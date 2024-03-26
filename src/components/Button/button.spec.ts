import { expect, test } from "@playwright/test"

test.describe("Expect button variant", () => {
  test("primary to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-button--primary")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Primary" }),
    ).toBeVisible()
  })
  test("secondary to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-button--secondary")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Secondary" }),
    ).toBeVisible()
  })
  test("light to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-button--light")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Light" }),
    ).toBeVisible()
  })
  test("destructive to exist", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-button--destructive")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Destructive" }),
    ).toBeVisible()
  })
})

test.describe("Expect button disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-button--with-disabled",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Disabled" }),
    ).toBeDisabled()
  })
})

test.describe("Expect button as link", () => {
  test("to be a link", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-button--as-child-anchor",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("link", { name: "API Reference" }),
    ).toBeDefined()
  })
})
