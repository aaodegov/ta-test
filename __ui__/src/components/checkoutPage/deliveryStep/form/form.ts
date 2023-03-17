import { Component } from '@Core/component';

export class Form extends Component {
    protected LOCATORS = {
        deliveryForm: this.locator,
        firstName: this.locator.locator("//input[@id='input-1']"),
        lastName: this.locator.locator("//input[@id='input-2']"),
        email: this.locator.locator("//input[@id='input-3']"),
        phone: this.locator.locator("//input[@id='input-4']"),
        address: this.locator.locator("//input[@id='input-5']"),
        city: this.locator.locator("//input[@id='input-7']"),
        zip: this.locator.locator("//input[@id='input-9']"),
        county: this.locator.locator("(//select[@name='country'])[1]"),
    };

    public async firstNameFill(name: string) {
        await this.LOCATORS.firstName.fill(name);
    }

    public async lastNameFill(lastname: string) {
        await this.LOCATORS.lastName.fill(lastname);
    }

    public async emailFill(email: string) {
        await this.LOCATORS.email.fill(email);
    }

    public async phoneFill(phone: string) {
        await this.LOCATORS.phone.fill(phone);
    }

    public async addressFill(address: string) {
        await this.LOCATORS.address.fill(address);
    }

    public async cityFill(city: string) {
        await this.LOCATORS.city.fill(city);
    }

    public async zipFill(zip: string) {
        await this.LOCATORS.zip.fill(zip);
    }

    public async selectCountry(country: string) {
        await this.LOCATORS.county.selectOption(country);
    }
}
