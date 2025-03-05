import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';

test('Deve fazer login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);

  await page.goto('/');
  await menuPage.login();
  await loginPage.login('admin', 'admin');
  await loginPage.loading();
  const loginSuccess = await page.isVisible('[data-test="auth-success"]');
  expect(loginSuccess).toBeTruthy();
});
