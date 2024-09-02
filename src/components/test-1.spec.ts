import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/ui-datepicker--single');
  await page.getByRole('button', { name: 'Hide addons [⌥ A]' }).click();
});