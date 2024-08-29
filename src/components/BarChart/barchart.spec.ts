import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:6006/?path=/story/visualization-barchart--default",
  )
})

test.describe("Expect default bar chart", () => {
  test("to be rendered", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("bar-chart"),
    ).toBeVisible()
  })

  test("to render legend two items", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("li")
        .filter({ hasText: "Solar Cells" }),
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

  test("to render first two bars", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(".recharts-layer > rect")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("g:nth-child(8) > g > g > rect")
        .first(),
    ).toBeVisible()
  })
})
