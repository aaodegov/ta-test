import { Container } from '@Core/container';
import { Wizard } from '@Components/productPage/Wizard';

export class ProductPage extends Container {
    protected LOCATORS = {
        addToCart: this.page.locator("//button[@aria-label='add to cart']"),
        selectLenses: this.page.locator("//button[@aria-label='choose lenses']"),
        wizard: this.page.locator("//section[contains(@class, 'wizardContainer')]"),
    };

    public async addToCartClick(): Promise<void> {
        await this.LOCATORS.addToCart.click();
    }

    public async selectLensesClick(): Promise<void> {
        await this.LOCATORS.selectLenses.click();
    }

    public wizard = new Wizard(this.LOCATORS.wizard, this.page);
}
