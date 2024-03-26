import { expect, test } from "@playwright/test"

test.describe("Expect selectnative", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-selectnative--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("combobox"),
    ).toBeVisible()
  })
  test("to make a selection", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-selectnative--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .selectOption("19-39")
  })
})
