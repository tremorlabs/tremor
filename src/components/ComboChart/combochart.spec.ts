import { expect, test, type Page } from "@playwright/test"

const goToStory = async (page: Page, storyName: string) => {
  await page.goto(
    `http://localhost:6006/?path=/story/visualization-combochart--${storyName}`,
  )
}

const getStoryFrame = (page: Page) =>
  page.frameLocator('iframe[title="storybook-preview-iframe"]')

test.describe("ComboChart Component Tests", () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, "default")
  })

  test.describe("Default ComboChart", () => {
    test("should render the combo chart", async ({ page }) => {
      await expect(getStoryFrame(page).getByTestId("combo-chart")).toBeVisible()
    })

    test("should render correct number of legend items", async ({ page }) => {
      await expect(
        getStoryFrame(page).locator(
          ".recharts-legend-wrapper .flex.h-full.flex-wrap li",
        ),
      ).toHaveCount(2)
    })

    test("should render x-axis with correct labels", async ({ page }) => {
      const xAxis = getStoryFrame(page).locator(
        ".recharts-xAxis .recharts-cartesian-axis-tick",
      )
      await expect(xAxis.first()).toContainText("Jan 23")
      await expect(xAxis.last()).toContainText("Dec 23")
    })

    test("should render y-axis with correct values", async ({ page }) => {
      const yAxis = getStoryFrame(page).locator(
        ".recharts-yAxis .recharts-cartesian-axis-tick",
      )
      await expect(yAxis.first()).toContainText("0")
      await expect(yAxis.last()).toContainText("3600")
    })

    test("should render correct number of bars", async ({ page }) => {
      await expect(
        getStoryFrame(page).locator(".recharts-bar-rectangles rect"),
      ).toHaveCount(12)
    })

    test("should render line series", async ({ page }) => {
      await expect(getStoryFrame(page).locator(".recharts-line")).toBeVisible()
    })

    test("should show tooltip on hover", async ({ page }) => {
      const chart = getStoryFrame(page).getByTestId("combo-chart")
      await chart.hover({ position: { x: 100, y: 100 } })
      await expect(
        getStoryFrame(page).locator(".recharts-tooltip-wrapper"),
      ).toBeVisible()
    })

    test.describe("ComboChart with OnValueChange", () => {
      test.beforeEach(async ({ page }) => {
        await goToStory(page, "with-on-value-change-biaxial")
      })

      test("should update chart on legend item click", async ({ page }) => {
        const legendWrapper = getStoryFrame(page).locator(
          ".recharts-legend-wrapper .flex.h-full.flex-wrap",
        )

        await legendWrapper.locator("li", { hasText: "SolarCells" }).click()

        await expect(
          legendWrapper.locator("li", { hasText: "Glass" }).locator("span"),
        ).toHaveClass(/opacity-40/)
      })
    })
  })

  test.describe("Biaxial ComboChart", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "biaxial")
    })
    test("should render chart with two y-axes", async ({ page }) => {
      await page.goto(
        "http://localhost:6006/?path=/story/visualization-combochart--biaxial",
      )

      const chart = getStoryFrame(page).getByTestId("combo-chart-biaxial")
      await expect(chart).toBeVisible()

      const yAxes = chart.locator(".recharts-yAxis")
      await expect(yAxes).toHaveCount(2)

      const leftAxisLabel = chart
        .locator('.recharts-yAxis text[style="text-anchor: middle;"]')
        .first()
      await expect(leftAxisLabel).toHaveText("BarSeries")

      const rightAxisLabel = chart
        .locator('.recharts-yAxis text[style="text-anchor: middle;"]')
        .last()
      await expect(rightAxisLabel).toHaveText("LineSeries")

      const legendItems = chart.locator(".recharts-legend-wrapper li")
      await expect(legendItems).toHaveCount(2)
      await expect(legendItems.nth(0)).toContainText("SolarCells")
      await expect(legendItems.nth(1)).toContainText("Frame")
    })
  })

  test.describe("ComboChart with value formatters", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-value-formatter-biaxial")
    })

    test("should format y-axis and tooltip values correctly", async ({
      page,
    }) => {
      const chart = getStoryFrame(page).locator('[tremor-id="tremor-raw"]')

      const leftYAxisTicks = chart
        .locator(".recharts-yAxis")
        .first()
        .locator(".recharts-cartesian-axis-tick")
      await expect(leftYAxisTicks.first()).toContainText("$-4,000")
      await expect(leftYAxisTicks.last()).toContainText("$4,000")

      const rightYAxisTicks = chart
        .locator(".recharts-yAxis")
        .last()
        .locator(".recharts-cartesian-axis-tick")
      await expect(rightYAxisTicks.first()).toContainText("$0")
      await expect(rightYAxisTicks.last()).toContainText("$3,600")
    })
  })

  test.describe("ComboChart with custom min and max values", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-min-and-max-value-biaxial")
    })

    test("should respect custom min and max values for y-axes", async ({
      page,
    }) => {
      const yAxes = getStoryFrame(page).locator(".recharts-yAxis")
      const leftYAxis = yAxes.nth(0)
      const rightYAxis = yAxes.nth(1)

      await expect(
        leftYAxis.locator(".recharts-cartesian-axis-tick").first(),
      ).toContainText("800")
      await expect(
        leftYAxis.locator(".recharts-cartesian-axis-tick").last(),
      ).toContainText("5000")
      await expect(
        rightYAxis.locator(".recharts-cartesian-axis-tick").first(),
      ).toContainText("2500")
      await expect(
        rightYAxis.locator(".recharts-cartesian-axis-tick").last(),
      ).toContainText("3500")
    })
  })

  test.describe("ComboChart with legend slider", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-legend-slider-biaxial")
    })

    test("should render legend slider buttons and scroll on click", async ({
      page,
    }) => {
      const sliderButtons = getStoryFrame(page).locator(
        ".group.inline-flex.size-5",
      )
      await expect(sliderButtons).toHaveCount(2)

      const rightScrollButton = sliderButtons.nth(1)
      await rightScrollButton.click()
    })
  })

  test.describe("ComboChart with connect nulls", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-connect-nulls-false-biaxial")
    })

    test("should not connect null data points in line series", async ({
      page,
    }) => {
      const linePath = getStoryFrame(page).locator(".recharts-line-curve")
      const pathD = await linePath.getAttribute("d")
      expect(pathD).toContain("M")
    })
  })
})
