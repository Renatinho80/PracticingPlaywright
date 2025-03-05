import { Page } from '@playwright/test';
import { MenuElements } from '../elements/MenuElements';

export class MenuPage {
  constructor(private page: Page) {}
  private elements = new MenuElements();

  async login() {
    await this.page.click(this.elements.authenticationMenu);
  }
}
