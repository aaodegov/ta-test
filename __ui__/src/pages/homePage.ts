import { Container } from '@Core/container';
import { SunglasesNavbarButton } from '@Components/homePage/SunglasesButton';
import { EyeglasesNavbarButton } from "@Components/homePage/EyeglasesButton";

export class HomePage extends Container {
    protected LOCATORS = {
        sunglassesNavbarButton: this.page.locator('//nav//a[contains(., "Sunglasses")]'),
        eyeglassesNavbarButton: this.page.locator('//nav//a[contains(., "Eyeglasses")]'),
    };

    public sunglassesNavbarButton = new SunglasesNavbarButton(
        this.LOCATORS.sunglassesNavbarButton,
        this.page
    );

    public eyeglassesNavbarButton = new EyeglasesNavbarButton(
        this.LOCATORS.eyeglassesNavbarButton,
        this.page
    );

    public async open() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
