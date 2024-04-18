import { expect, test } from "@playwright/test"

test.describe("Expect dropdown menu default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-dropdownmenu--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("combobox"),
    ).toBeVisible()
  })

  test("to make a selection", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-select--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("combobox"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByLabel("Striped Dress Shirt")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("combobox"),
    ).toContainText("Striped Dress Shirt")
  })

  test("to have first item selected and subsequent not", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-select--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByLabel("Striped Dress Shirt")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Striped Dress Shirt")
        .locator("svg"),
    ).toHaveCount(1)
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Relaxed Fit Button Down")
        .locator("svg"),
    ).toHaveCount(0)
  })
})

test.describe("Expect select with group", () => {
  test("to render a group separator", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-select--with-groups")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Shirts", { exact: true }),
    ).toBeVisible()
  })
})

test.describe("Expect select disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-select--disabled")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("combobox"),
    ).toBeDisabled()
  })
})

test.describe("Expect select disabled item", () => {
  test("to render a disabled item", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-select--disabled-item",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("combobox")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Solid Dress Shirt"),
    ).toBeDisabled()
  })
})
