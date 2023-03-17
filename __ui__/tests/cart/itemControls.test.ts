import {expect, test} from '@Test';

test.describe('Item controls on cart page', () => {
    test('', async ({ homePage, categoryPage, productPage, cartPage }) => {
        await homePage.open();
        await homePage.eyeglassesNavbarButton.gotoCategory();
        await categoryPage.selectFirstProduct();
        await productPage.selectLensesClick();

        // Прохождение визарда бещ дополнительных опций
        const wizard = productPage.wizard;
        await wizard.nonPrescriptionClick();
        await wizard.selectFreeOption();
        await wizard.continueButtonClick();
        await wizard.selectClearOption();
        await wizard.continueButtonClick();
        await wizard.noThanksButtonClick();
        await wizard.addToCartClick();

        // Проверка корректности отображения значений в корзине
        const itemPrice = await cartPage.getItemPrice();
        // Увеличение количества позиций
        await cartPage.buttonIncreaseClick();
        const subtotalPriceAfterIncrease = await cartPage.getSubtotalPrice();
        const expectedPrice = itemPrice * 2;
        expect(subtotalPriceAfterIncrease).toBe(expectedPrice);
        // Уменьшение количества позиций
        await cartPage.buttonDecreaseClick();
        const subtotalPriceAfterDecrease = await cartPage.getSubtotalPrice();
        expect(subtotalPriceAfterDecrease).toBe(itemPrice);
        // Проверка логики удаления
        await cartPage.removeItem();
        await cartPage.checkEmptyCart();
    });
});
