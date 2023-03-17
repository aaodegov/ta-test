import { test } from '@Test';
import type { DataLayerEvent } from '@Utils/types/dataLayerEvent';
import faker from 'faker';
import { DataLayer } from '@Utils/dataLayer';

test.describe('"CheckoutNonInteraction" "Error" events', () => {
    let dataLayer: DataLayer;
    const email = faker.internet.email();
    const deliveryData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        city: faker.address.city(),
        county: 'Sweden',
        zip: '10278',
    };

    const checkoutNonInteractionEvent: DataLayerEvent = {
        event: 'CheckoutNonInteraction',
        eventAction: 'Step 2 - Credit card',
        eventCategory: 'Checkout - D',
    };

    const checkoutInteractionEvent: DataLayerEvent = {
        event: 'CheckoutInteraction',
        eventCategory: 'Checkout - D',
        eventAction: 'Step 2 - Payment',
    };

    test.beforeEach(({ page }) => {
        dataLayer = new DataLayer(page);
    });

    test('event activation analysis', async ({
        homePage,
        categoryPage,
        productPage,
        checkoutPage,
        cartPage,
    }) => {
        let verifyEvent = dataLayer.createEventVerifier(checkoutNonInteractionEvent);
        console.log(deliveryData);
        const deliveryForm = checkoutPage.deliveryForm;
        await homePage.open();
        await homePage.sunglassesNavbarButton.gotoCategory();
        await categoryPage.selectFirstProduct();
        await productPage.addToCartClick();
        await cartPage.proceedToCheckoutClick();
        // Заполнение полей формы доставки
        await deliveryForm.firstNameFill(deliveryData.firstName);
        await deliveryForm.lastNameFill(deliveryData.lastName);
        await deliveryForm.emailFill(email);
        await deliveryForm.phoneFill(deliveryData.phone);
        await deliveryForm.addressFill(deliveryData.address);
        await deliveryForm.cityFill(deliveryData.city);
        await deliveryForm.zipFill(deliveryData.zip);
        await deliveryForm.selectCountry(deliveryData.county);

        // Переход на этап выбора способа оплаты
        await checkoutPage.continueButtonClick();

        // Проверка невалидного номера карты
        await checkoutPage.paymentStep.creditCard.cardNumberFill('4222 2222 2222 2222');
        await checkoutPage.paymentStep.creditCard.placeOrderClick();
        await verifyEvent('Error – Please enter a valid credit card number');
        await checkoutPage.paymentStep.creditCard.cardNumberFill('');

        // Проверка валидного номера карты
        await checkoutPage.paymentStep.creditCard.cardNumberFill('4111 1111 1111 1111');
        await checkoutPage.paymentStep.creditCard.placeOrderClick();
        await verifyEvent('Error – Please enter a valid expiration date');

        // Проверка обязательности ввода CVV
        await checkoutPage.paymentStep.creditCard.monthAndYearFill('1122');
        await checkoutPage.paymentStep.creditCard.placeOrderClick();
        await verifyEvent("Error – Please enter your card's security code (CVV/CID)");

        // Переопределение объекта для верификации нового типа ивентов
        verifyEvent = dataLayer.createEventVerifier(checkoutInteractionEvent);
        // Проверка Cash on delivery
        await checkoutPage.paymentStep.selectCashOnDelivery();
        await checkoutPage.paymentStep.cashOnDelivery.placeOrderClick();
        await verifyEvent('CTA - Place Order - Cash On Delivery');
    });
});
