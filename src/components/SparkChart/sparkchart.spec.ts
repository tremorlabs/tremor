import { expect, test } from "@playwright/test"

test.describe("Expect default spark area chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparkareachart--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("spark-area-chart"),
    ).toBeVisible()
  })

  test("to render two lines", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparkareachart--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator('path.recharts-curve.recharts-area-curve[name="SolarCells"]'),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator('path.recharts-curve.recharts-area-curve[name="Glass"]'),
    ).toBeVisible()
  })
})

test.describe("Expect default spark bar chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparkbarchart--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("spark-bar-chart"),
    ).toBeVisible()
  })

  test("to render first two bars", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparkbarchart--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".recharts-rectangle")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".recharts-rectangle")
        .nth(2),
    ).toBeVisible()
  })
})

test.describe("Expect default spark line chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparklinechart--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("spark-line-chart"),
    ).toBeVisible()
  })

  test("to render two lines", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-sparklinechart--default",
    )
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
