import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Deve fazer login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    await test.step('Acessando Menu', async () => {
      await menuPage.login();
    });

    await test.step('Realizando Login', async () => {
      await loginPage.login('admin', 'admin');
    });

    await test.step('Aguardando Loding da Página', async () => {
      await loginPage.loading();
    });

    await test.step('Validando resultado de login', async () => {
      const loginSuccess = loginPage.loginSuccess();
      expect(loginSuccess).toBeTruthy();
    });
  });
});
