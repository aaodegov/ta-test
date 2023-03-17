import { Component } from '@Core/component';

export class Wizard extends Component {
    protected LOCATORS = {
        wizard: this.locator,
        nonPrescription: this.locator.locator(
            '//div[@role="button" and contains(., "Non-prescription")]'
        ),
        freeOption: this.locator.locator("//div[contains(@class, 'eyeglassesPackages')][1]"),
        clearOption: this.locator.locator("//h3[text()='Clear']"),
        noThanksButton: this.locator.locator("//span[text()='No Thanks']"),
        continueButton: this.locator.locator('//button[contains(., "Continue")]'),
        addToCartButton: this.locator.locator("//span[text()='Add to Cart']"),
    };

    public async nonPrescriptionClick() {
        await this.LOCATORS.nonPrescription.click();
    }

    public async selectFreeOption() {
        await this.LOCATORS.freeOption.click();
    }

    public async continueButtonClick() {
        await this.LOCATORS.continueButton.click();
    }

    public async selectClearOption() {
        await this.LOCATORS.clearOption.click();
    }

    public async noThanksButtonClick() {
        await this.LOCATORS.noThanksButton.click();
    }

    public async addToCartClick() {
        await this.LOCATORS.addToCartButton.click();
    }

}
