import { test as base, expect } from '@playwright/test';
import { DataLayer } from '@Utils/dataLayer';
import { HomePage } from '@Pages/homePage';
import { CategoryPage } from '@Pages/categoryPage';
import { ProductPage } from '@Pages/productPage';
import { CartPage } from '@Pages/cartPage';
import { CheckoutPage } from '@Pages/checkoutPage';

// Добавить недоставющие страницы в фикстуры и типы

type Options = {
    dataLayer: DataLayer;
    homePage: HomePage;
    categoryPage: CategoryPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};
const test = base.extend<Options>({
    dataLayer: async ({ page }, use) => {
        await use(new DataLayer(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    categoryPage: async ({ page }, use) => {
        await use(new CategoryPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

export { test, expect };
