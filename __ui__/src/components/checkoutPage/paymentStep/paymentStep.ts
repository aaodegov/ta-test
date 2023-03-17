import { Component } from '@Core/component';
import { CreditCard } from '@Components/checkoutPage/paymentStep/paymentMethods/creditCard';
import { CashOnDelivery } from '@Components/checkoutPage/paymentStep/paymentMethods/cashOnDelivery';

export class PaymentStep extends Component {
    protected LOCATORS = {
        creditCard: this.page.locator("(//form[@name='credit card form'])[2]"),
        cashOnDelivery: this.locator.locator("(//div[contains(@class, 'paymentWrapper')])[4]"),
    };

    public creditCard = new CreditCard(this.LOCATORS.creditCard, this.page);
    public cashOnDelivery = new CashOnDelivery(this.LOCATORS.cashOnDelivery, this.page);

    public async selectCashOnDelivery() {
        await this.LOCATORS.cashOnDelivery.click();
    }
}
