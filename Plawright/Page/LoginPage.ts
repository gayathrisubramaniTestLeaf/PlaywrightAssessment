import { Page } from "@playwright/test"

export class LoginPage {
    constructor(private page: Page) {}

    async loadURL() {
        await this.page.goto('https://login.salesforce.com/?locale=in');
    }

    async enterUsername(username: string) {
        await this.page.locator('#username').fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator('#password').fill(password);
    }

    async clickOnLogin() {
        await this.page.locator('#Login').click();
    }

    async login(username: string, password: string) {
        await this.loadURL();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
    }
}
