import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should show validation errors for empty form', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]');

    // HTML5 validation should prevent submission
    const nameInput = page.locator('#name');
    await expect(nameInput).toHaveAttribute('required', '');
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'invalid-email');
    await page.fill('#message', 'This is a test message that is long enough to pass validation.');

    await page.click('button[type="submit"]');

    // Should show email validation error
    const emailError = page.locator('[data-error="email"]');
    await expect(emailError).toBeVisible();
  });

  test('should submit valid form', async ({ page }) => {
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#company', 'Test Company');
    await page.selectOption('#service', 'ai-consulting');
    await page.fill('#message', 'This is a test message that is long enough to pass validation requirements.');

    await page.click('button[type="submit"]');

    // Should show success message
    const successMsg = page.locator('#form-success');
    await expect(successMsg).toBeVisible();
  });

  test('should have all required fields marked', async ({ page }) => {
    // Check that required fields have asterisks
    await expect(page.locator('label[for="name"]')).toContainText('*');
    await expect(page.locator('label[for="email"]')).toContainText('*');
    await expect(page.locator('label[for="message"]')).toContainText('*');
  });

  test('should have honeypot field hidden', async ({ page }) => {
    const honeypot = page.locator('input[name="bot-field"]');
    await expect(honeypot).toBeHidden();
  });
});
