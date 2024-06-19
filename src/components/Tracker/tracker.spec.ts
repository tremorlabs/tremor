import { expect, test } from "@playwright/test"

test.describe("Expect tracker default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-tracker--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("tracker"),
    ).toBeVisible()
  })
  test("to have a bar", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-tracker--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("tracker"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".size-full > .size-full")
        .first(),
    ).toBeVisible()
  })
  test("to have a tooltip", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-tracker--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("tracker"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".size-full > .size-full")
        .first(),
    ).toBeVisible()
    page
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .locator(".size-full > .size-full")
      .first()
      .hover()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Tracker Info"),
    ).toBeVisible()
  })
})
