import { Container } from '@Core/container';
import {expect} from "@Test";

export class CartPage extends Container {
    protected LOCATORS = {
        proceedToCheckout: this.page.locator("//span[text()='Proceed to Checkout']"),
        buttonIncrease: this.page.locator("//button[@data-test-name='counterIncrease']"),
        buttonDecrease: this.page.locator("//button[@data-test-name='counterDecrease']"),
        subtotalSummary: this.page.locator("//div[@id='summary_subtotal']"),
        itemPrice: this.page.locator("(//span[@data-test-name='totalPrice'])[2]"),
        removeItem: this.page.locator("//button[@data-test-name='removeCartItem']"),
        applyRemoveButton: this.page.locator("//button[text()='Yes']"),
        emptyCart: this.page.locator("//h2[text()='Shopping Cart is Empty']"),
    };

    public async proceedToCheckoutClick(): Promise<void> {
        await this.LOCATORS.proceedToCheckout.click();
    }

    public async buttonIncreaseClick(): Promise<void> {
        await this.LOCATORS.buttonIncrease.click();
        await Promise.all([
            this.page.waitForResponse(
                (resp) =>
                    resp.url().includes('optimaxcheckout/v2/cart/item') && resp.status() === 200
            ),
        ]);
    }

    public async buttonDecreaseClick(): Promise<void> {
        await this.LOCATORS.buttonDecrease.click();
        await Promise.all([
            this.page.waitForResponse(
                (resp) =>
                    resp.url().includes('optimaxcheckout/v2/cart/item') && resp.status() === 200
            ),
        ]);
    }

    public async getItemPrice(): Promise<number> {
        const itemPrice = await this.LOCATORS.itemPrice.textContent();
        return Number(itemPrice?.slice(1));
    }

    public async getSubtotalPrice(): Promise<number> {
        await this.page.waitForTimeout(1000);
        const subtotalPrice = await this.LOCATORS.subtotalSummary.textContent();
        return Number(subtotalPrice?.slice(1));
    }

    public async removeItem() {
        await this.LOCATORS.removeItem.click();
        await this.LOCATORS.applyRemoveButton.click();
    }

    public async checkEmptyCart() {
        await expect(this.LOCATORS.emptyCart).toBeInViewport();
    }
}
