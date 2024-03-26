import { expect, test } from "@playwright/test"

test.describe("Expect checkbox", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-checkbox--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox"),
    ).toBeVisible()
  })
})

test.describe("Expect checkbox", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-checkbox--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("checkbox")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox"),
    ).toBeChecked()
  })
})

test.describe("Expect checkbox disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-checkbox--disabled")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox")
        .first(),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox")
        .nth(1),
    ).toBeDisabled()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("checkbox")
        .nth(2),
    ).toBeDisabled()
  })
})

test.describe("Expect checkbox with label", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-checkbox--with-label",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("I'd like to be notified by"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByLabel("I'd like to be notified by")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("I'd like to be notified by"),
    ).toBeChecked()
  })
})
