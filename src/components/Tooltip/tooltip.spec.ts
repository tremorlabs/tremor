import { expect, test } from "@playwright/test"

test.describe("Expect tooltip", () => {
  test("to render tooltip trigger", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tooltip--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Show tooltip" }),
    ).toBeVisible()
  })

  test("to be rendered on trigger hover", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tooltip--default")
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Show tooltip" })
      .hover()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText(
          "Which KPIs are the most visited in your projectWhich KPIs are the most visited",
        ),
    ).toBeVisible()
  })
})
