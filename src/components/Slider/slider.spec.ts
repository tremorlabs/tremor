import { expect, test } from "@playwright/test"

test.describe("Expect switch default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-switch--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("switch"),
    ).toBeVisible()
  })
})

test.describe("Expect switch default", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-switch--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("switch"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("switch")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("switch"),
    ).toBeChecked()
  })
})

test.describe("Expect switch disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-switch--disabled")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("switch"),
    ).toBeDisabled()
  })
})

test.describe("Expect switch with label", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-switch--with-label")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Click this Label check the"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("Click this Label check the")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Click this Label check the"),
    ).toBeChecked()
  })
})
