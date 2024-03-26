import { expect, test } from "@playwright/test"

test.describe("Expect dialog", () => {
  test("to be openend, rendered, closed", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-dialog--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open Dialog" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Account Created Successfully"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("heading", { name: "Account Created Successfully" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("Your account has been created"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Go back" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Ok, got it!" }),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Ok, got it!" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Open Dialog" }),
    ).toBeVisible()
  })
})
