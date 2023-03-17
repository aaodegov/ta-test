import { Component } from '@Core/component';

export class CashOnDelivery extends Component {
    protected LOCATORS = {
        placeOrder: this.locator.locator("//button[@aria-label='Place Order']"),
    };

    public async placeOrderClick() {
        await this.LOCATORS.placeOrder.click();
    }
}
