import { Page } from '@playwright/test';
import { LoginElements } from '../elements/LoginElements';

export class LoginPage {
  constructor(private page: Page) {}
  private elements = new LoginElements();

  async login(user: string, pass: string) {
    await this.page.fill(this.elements.userNameInput, user);
    await this.page.fill(this.elements.passwordInput, pass);
    await this.page.click(this.elements.loginButton);
  }

  async loginSuccess() {
    await this.page.isVisible(this.elements.loginSuccess);
  }

  async loading() {
    await this.page.waitForSelector(this.elements.loginButton, {
      state: 'detached',
    });
  }
}
