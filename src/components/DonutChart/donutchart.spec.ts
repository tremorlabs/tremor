import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:6006/?path=/story/visualization-donutchart--default",
  )
})

test.describe("DonutChart Tests", () => {
  test("Default DonutChart renders correctly", async ({ page }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')
    await expect(frame.getByTestId("donut-chart")).toBeVisible()
    await expect(frame.locator(".recharts-sector")).toHaveCount(7)
  })

  test("ValueFormatter displays formatted values", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-donutchart--value-formatter",
    )
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')
    await expect(frame.getByText(/\d+ units/)).toBeVisible()
  })

  test("LabelDisabled does not show label", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-donutchart--label-disabled",
    )
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')
    await expect(frame.getByText("Custom Label")).not.toBeVisible()
  })

  test("OtherColors uses provided colors", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-donutchart--other-colors",
    )
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')
    const sectors = frame.locator(".recharts-sector")
    const expectedColors = [
      "blue",
      "amber",
      "pink",
      "emerald",
      "violet",
      "cyan",
    ]
    for (let i = 0; i < expectedColors.length; i++) {
      await expect(sectors.nth(i)).toHaveClass(
        new RegExp(`fill-${expectedColors[i]}-500`),
      )
    }
    await expect(sectors.nth(6)).toHaveClass(/fill-blue-500/)
  })

  test("MoreDatapointsThanColors handles excess data points", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-donutchart--more-datapoints-than-colors",
    )
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')
    await expect(frame.locator(".recharts-sector")).toHaveCount(14)
  })
})
