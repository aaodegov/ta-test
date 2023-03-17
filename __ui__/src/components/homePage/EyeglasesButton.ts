import { Component } from '@Core/component';

export class EyeglasesNavbarButton extends Component {
    protected LOCATOR = {
        eyeglasesNavbarButton: this.locator,
    };

    public async gotoCategory(): Promise<void> {
        await Promise.all([
            this.LOCATOR.eyeglasesNavbarButton.click(),
            this.page.waitForLoadState('domcontentloaded'),
        ]);
    }
}
