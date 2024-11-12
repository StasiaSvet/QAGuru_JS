import { BasePage } from "./base.page";


export class MainPage extends BasePage {
    constructor (page) {
        super(page);
        this.menuButton = this.page.locator('.dropdown-toggle');
        this.settingsButton = this.page.getByRole('link', { name: 'Settings' });
        this.signupButton = this.page.getByRole('link', { name: 'Sign up' });
    }

    async goToRegister () {
        await this.signupButton.click();
    }
}