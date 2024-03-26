import { expect, test } from "@playwright/test"

test.describe("Expect divider", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-divider--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("#storybook-root div")
        .nth(1),
    ).toBeVisible()
  })
})

test.describe("Expect divider", () => {
  test("to render with icon child", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-divider--with-children",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".w-96 > div:nth-child(2)"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("img"),
    ).toBeVisible()
  })
  test("to render with text child", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-divider--with-children",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: "Standard" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Standard"),
    ).toBeVisible()
  })
})
