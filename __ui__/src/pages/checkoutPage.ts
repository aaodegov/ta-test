import { Container } from '@Core/container';
import { Form } from '@Components/checkoutPage/deliveryStep/form/form';
import { PaymentStep } from '@Components/checkoutPage/paymentStep/paymentStep';

export class CheckoutPage extends Container {
    protected LOCATORS = {
        continueButton: this.page.locator("//span[text()='Continue']"),
        deliveryForm: this.page.locator("//div[contains(@class, 'deliveryForm__carrier')]"),
        paymentMethods: this.page.locator("//div[contains(@class, 'paymentsMethods')]"),
    };

    public deliveryForm = new Form(this.LOCATORS.deliveryForm, this.page);
    public paymentStep = new PaymentStep(this.LOCATORS.paymentMethods, this.page);

    public async continueButtonClick() {
        await this.LOCATORS.continueButton.click();
    }

}
