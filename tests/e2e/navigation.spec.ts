import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');

    // Check that we're on homepage
    await expect(page).toHaveTitle(/Home.*Lizardi Consulting/);

    // Navigate to Services
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    await expect(page).toHaveTitle(/Services.*Lizardi Consulting/);

    // Navigate to About
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
    await expect(page).toHaveTitle(/About.*Lizardi Consulting/);

    // Navigate to Newsletter
    await page.click('text=Newsletter');
    await expect(page).toHaveURL(/.*newsletter/);

    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page).toHaveTitle(/Contact.*Lizardi Consulting/);
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu button should be visible
    const menuButton = page.locator('#mobile-menu-toggle');
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();

    // Menu should be visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).not.toHaveClass(/hidden/);
  });

  test('should have working logo link', async ({ page }) => {
    await page.goto('/about');

    // Click logo
    await page.click('nav a[href="/"]');

    // Should be back on homepage
    await expect(page).toHaveURL('/');
  });
});
