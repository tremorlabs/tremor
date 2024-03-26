import { expect, test } from "@playwright/test"

test.describe("Expect callout variant", () => {
  test("default to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("success to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--success")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("error to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--error")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("warning to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--warning")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("neutral to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--neutral")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
})

test.describe("Expect callout icon", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-callout--with-icon")

    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("svg"),
    ).toBeVisible()
  })
})
