import { expect, test } from "@playwright/test"

test.describe("Expect Input default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-input--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeVisible()
  })

  test("to be editable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-input--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .fill("Add some text")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toHaveValue("Add some text")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .fill("")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeEmpty()
  })

  test("to be disbaled", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-input--disabled")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeDisabled()
  })

  test("to have a placeholder", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-input--with-placeholder",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByPlaceholder("With Placeholder"),
    ).toBeVisible()
  })
})

test.describe("Expect Input password", () => {
  test("to be a password", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-input--type-password",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByPlaceholder("Enter password"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByPlaceholder("Enter password"),
    ).toBeEmpty()
  })
})
