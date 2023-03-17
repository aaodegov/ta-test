import { Component } from '@Core/component';

export class CreditCard extends Component {
    protected LOCATORS = {
        frameNumberCardField: this.locator
            .frameLocator("//div[@id='card-number']/iframe")
            .getByPlaceholder('* Card Number'),
        frameMonthAndYearField: this.locator
            .frameLocator("//div[@id='exp-date']/iframe")
            .getByPlaceholder('* MM / YY'),
        placeOrder: this.locator.locator(
            "(//form[@name='credit card form'])[2]//button[@aria-label='Place Order']"
        ),
    };

    public async cardNumberFill(cardNumber: string) {
        await this.LOCATORS.frameNumberCardField.fill(cardNumber);
    }

    public async monthAndYearFill(monthAndYear: string) {
        await this.LOCATORS.frameMonthAndYearField.fill(monthAndYear);
    }

    public async placeOrderClick() {
        await this.LOCATORS.placeOrder.click();
    }
}