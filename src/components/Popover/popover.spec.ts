import { expect, test } from "@playwright/test"

test.describe("Expect popover default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-popover--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("Open")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Place content for the popover"),
    ).toBeVisible()
  })

  test("to be rendered and closeable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-popover--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("Open")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Place content for the popover"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("Open")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Place content for the popover"),
    ).toHaveCount(0)
  })
})
