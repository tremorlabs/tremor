import { expect, test } from "@playwright/test"

test.describe("Expect progressbar default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progressbar"),
    ).toBeVisible()
  })

  test("to have a background bar", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progressbar"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Progress bar"),
    ).toBeVisible()
  })

  test("renders with background and indicator bar properly", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )

    const storyFrame = page.frameLocator(
      'iframe[title="storybook-preview-iframe"]',
    )

    const progressBar = storyFrame.getByRole("progressbar", {
      name: "Progress bar",
    })
    await expect(progressBar).toBeVisible()

    const barBackground = progressBar.locator(".bg-blue-200")
    await expect(barBackground).toBeVisible()

    const indicatorBar = progressBar.locator(".bg-blue-500")
    await expect(indicatorBar).toBeVisible()

    await expect(progressBar).toHaveAttribute("aria-valuenow")
    await expect(progressBar).toHaveAttribute("aria-valuemax", "100")
  })

  test("updates progress value through controls", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )

    const storyFrame = page.frameLocator(
      'iframe[title="storybook-preview-iframe"]',
    )
    const progressBar = storyFrame.getByRole("progressbar", {
      name: "Progress bar",
    })
    await expect(progressBar).toHaveAttribute("aria-valuenow", "62")
  })

  test("displays label correctly", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )

    const storyFrame = page.frameLocator(
      'iframe[title="storybook-preview-iframe"]',
    )

    await expect(storyFrame.getByText("62%")).toBeVisible()
  })

  test("to have a label", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("progressbar"),
    ).toBeVisible()
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-progressbar--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("%"),
    ).toBeVisible()
  })
})
