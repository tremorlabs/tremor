import { expect, test } from "@playwright/test"

test.describe("Expect default badge", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-badge--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("Badge")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Badge"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("#storybook-root"),
    ).toContainText("Badge")
  })
})

test.describe("Expect accordion variants", () => {
  test("to inlcude all variants", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-badge--variants")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Neutral"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("#storybook-root")
        .getByText("Default"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Success"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Error"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Warning"),
    ).toBeVisible()
  })
})

test.describe("Expect badge as link", () => {
  test("to be a link", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-badge--anchor-with-badge-variants-style",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("link"),
    ).toBeDefined()
  })
})
