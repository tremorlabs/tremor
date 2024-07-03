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
        .getByLabel("progress bar"),
    ).toBeVisible()
  })

  test("to have a background and indicator bar", async ({ page }) => {
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
        .getByLabel("progress bar"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("progress bar")
        .locator("div"),
    ).toBeVisible()
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
