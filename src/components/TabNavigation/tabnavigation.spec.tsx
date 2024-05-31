import { expect, test } from "@playwright/test"

test.describe("Expect tabnavigation", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-tabnavigation--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Home"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Balances"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Transactions"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Customers"),
    ).toBeVisible()
  })
})

test.describe("Expect tabnavigation disabled", () => {
  test("to render a disabled tab", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-tabnavigation--default",
    )
    const tab = page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .locator("li")
      .filter({ hasText: "Customers" })

    const isAriaDisabled = await tab.getAttribute("aria-disabled")
    expect(isAriaDisabled).toBe("true")
  })
})
