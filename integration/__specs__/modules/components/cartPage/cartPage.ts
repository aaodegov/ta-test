import { Container } from '@Core/container';
import type { CartStateType } from 'frontend/store/types';

const SELECTORS = {
    emptyCart: ".//h2[text()='Cart is empty, please add items']",
    subtotalItemPrice: ".//p[contains(text(), 'Subtotal:')]",
    totalPrice: ".//h3[text()='Total price:']//following-sibling::p",
    removeButton: "(.//button[text()='Remove'])",
    addItemNameInput: "//input[@placeholder='name']",
    addItemPriceInput: "//input[@placeholder='price']",
    addItemQuantityInput: "//input[@placeholder='quantity']",
    addNewItemButton: "//button[text()='Add new item']",
    proceedToCheckout: "//button[text()='Proceed to Checkout']",
};

export class CartPageContainer extends Container {
    public async fulfill(initialState?: CartStateType): Promise<void> {
        await super.fulfill(initialState);
    }

    public isEmpty(): boolean {
        return Boolean(document.$x(SELECTORS.emptyCart));
    }

    public getSummaryPrices(): number {
        return document
            .$$x(SELECTORS.subtotalItemPrice)
            .map(elem => Number(elem.innerHTML.slice(11)))
            .reduce((a, b) => a + b);
    }

    public getTotalPrice(): number {
        return document.$$x(SELECTORS.totalPrice).map(elem => Number(elem.innerHTML.slice(1)))[0];
    }

    public async removeAllItems(): Promise<void> {
        const buttons = document.$$x(SELECTORS.removeButton);
        for (const button of buttons) {
            await document.clickByXpath(SELECTORS.removeButton + '[1]');
        }
    }

    public async fillNewItemFields(): Promise<void> {
        await document.fillByXpath(SELECTORS.addItemNameInput, 'My Beloved Item');
        await document.fillByXpath(SELECTORS.addItemPriceInput, 23);
        await document.fillByXpath(SELECTORS.addItemQuantityInput, 4);
    }

    public async addNewItemButtonClick(): Promise<void> {
        await document.clickByXpath(SELECTORS.addNewItemButton);
    }

    public async proceedToCheckoutClick(): Promise<void> {
        await document.clickByXpath(SELECTORS.proceedToCheckout);
    }

    public checkDisabledProceedToCheckoutButton(): boolean {
        return document.$x(SELECTORS.proceedToCheckout).hasAttribute('disabled');
    }
}
