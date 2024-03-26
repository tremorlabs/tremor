import { expect, test } from "@playwright/test"

test.describe("Expect label", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-label--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Label"),
    ).toBeVisible()
  })
})

test.describe("Expect label disabled", () => {
  test("to be disabeld", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-label--disabled")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("label-disabled"),
    ).toBeVisible()
  })
})
