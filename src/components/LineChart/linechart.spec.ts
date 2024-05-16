import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:6006/?path=/story/visualization-linechart--default",
  )
})

test.describe("Expect default line chart", () => {
  test("to be rendered", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("line-chart"),
    ).toBeVisible()
  })

  test("to render legend two items", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("li")
        .filter({ hasText: "SolarCells" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("li")
        .filter({ hasText: "Glass" }),
    ).toBeVisible()
  })

  test("to render an x-axis", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".recharts-xAxis"),
    ).toHaveClass(/recharts-xAxis/)
  })

  test("to render an y-axis", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".recharts-yAxis"),
    ).toHaveClass(/recharts-yAxis/)
  })

  test("to render two lines", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator('path.recharts-curve.recharts-line-curve[name="SolarCells"]'),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator('path.recharts-curve.recharts-line-curve[name="Glass"]'),
    ).toBeVisible()
  })
})
