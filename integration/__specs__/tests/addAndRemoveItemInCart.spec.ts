import { CartPageContainer } from '@Components/cartPage/cartPage';
import { Mock } from '@Core/mock';
import { GetCartProductsMock } from '@Mocks/products/get';

describe('Cart page content', () => {
    const cartPage = new CartPageContainer();
    const mock = Mock.getInstance();

    test('Check ', async () => {
        mock.addMocks(new GetCartProductsMock());

        await cartPage.fulfill();
        // cartPage.debug();
        expect(cartPage.getTotalPrice()).toBe(cartPage.getSummaryPrices());
        await cartPage.removeAllItems();
        // Проверка попадания всех событий удаления товара в даталэйер
        expect(window.dataLayer).toHaveLength(5);
        expect(cartPage.isEmpty()).toBe(true);
        expect(cartPage.getTotalPrice()).toBe(0.0);
        expect(cartPage.checkDisabledProceedToCheckoutButton()).toBeTruthy();

        // Заполнение полей и добавление нового товара
        await cartPage.fillNewItemFields();
        await cartPage.addNewItemButtonClick();
        // Нажатие на кнопку Proceed to Checkout
        await cartPage.proceedToCheckoutClick();
        await cartPage.proceedToCheckoutClick();

        // Проверяем событие перехода к оформлению заказа
        reporter.startStep('Check item adding event');
        // Находим евент с именем "Proceed to Checkout"
        const itemAddedEvent = window.dataLayer.find(e => e.name === 'Proceed to Checkout');
        expect(itemAddedEvent).toMatchObject({
            name: 'Proceed to Checkout',
        });
        reporter.endStep();
    });
});
