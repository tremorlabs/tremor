import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:6006/?path=/story/ui-accordion--default")
})

test.describe("Expect default accordion", () => {
  test("to be rendered", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "In the app" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Via browser extension" }),
    ).toBeVisible()
  })

  test("to be open and closeable", async ({ page }) => {
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "In the app" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Step 1:"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Step 2:"),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "In the app" })
      .click()
  })

  test("have a disabled item", async ({ page }) => {
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Via email forwarding" }),
    ).toBeDisabled()
  })
})

test.describe("Expect accordion multiple to", () => {
  test("have all elements opened", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-accordion--type-multiple",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Does NASA provide public" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Are NASA's educational" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Can the public participate in" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Absolutely. NASA offers open"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Yes. NASA provides a wide"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Yes! Through various citizen"),
    ).toBeVisible()
  })
})
