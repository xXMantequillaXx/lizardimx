import { test, expect } from '@playwright/test';

test.describe('Newsletter Subscription', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/newsletter');
  });

  test('should have newsletter form', async ({ page }) => {
    await expect(page.locator('#newsletter-form')).toBeVisible();
  });

  test('should validate email', async ({ page }) => {
    await page.fill('#email', 'invalid-email');
    await page.click('button[type="submit"]');

    // Should show validation error
    const emailError = page.locator('[data-error="email"]');
    await expect(emailError).toBeVisible();
  });

  test('should submit valid email', async ({ page }) => {
    await page.fill('#email', 'test@example.com');
    await page.click('button[type="submit"]');

    // Should show success message
    const successMsg = page.locator('#form-success');
    await expect(successMsg).toBeVisible();
  });

  test('should show newsletter benefits', async ({ page }) => {
    // Check that value propositions are shown
    await expect(page.locator('text=AI trends')).toBeVisible();
    await expect(page.locator('text=Security insights')).toBeVisible();
    await expect(page.locator('text=Reputation intelligence')).toBeVisible();
  });
});
