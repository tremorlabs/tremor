import { expect, test } from "@playwright/test"

test.describe("Expect progresscircle default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progresscircle--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progresscircle"),
    ).toBeVisible()
  })
})
test.describe("Expect progresscircle with children", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progresscircle--with-children",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progresscircle"),
    ).toBeVisible()
  })
  test("to have children", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progresscircle--with-children",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progresscircle"),
    ).toBeVisible()

    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("%"),
    ).toBeVisible()
  })
})
