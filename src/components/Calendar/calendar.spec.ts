import { expect, test } from "@playwright/test"

test.describe("Expect calendar single", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-calendar--single")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("react-day-picker-calendar"),
    ).toBeVisible()
  })
  test("to render month navigation buttons", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-calendar--single")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next month"),
    ).toBeVisible()
  })
  test("to render a caption", async ({ page }) => {
    const currentMonthText = new Date().toLocaleString("en-US", {
      month: "long",
    })
    await page.goto("http://localhost:6006/?path=/story/ui-calendar--single")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator(`text=${currentMonthText}`),
    ).toBeVisible()
  })
  test("to render month and year navigation", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-calendar--single-with-year-navigation",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous year"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next month"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next year"),
    ).toBeVisible()
  })
  test("to render disabled month and year navigation", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-calendar--single-disable-navigation",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous year"),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous month"),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next month"),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next year"),
    ).toBeDisabled()
  })
  test("to render limited year nagivation", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-calendar--with-year-navigation-limited",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous year"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next month"),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Go to next year"),
    ).toBeDisabled()
  })
})
