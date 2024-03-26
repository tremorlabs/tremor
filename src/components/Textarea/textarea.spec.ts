import { expect, test } from "@playwright/test"

test.describe("Expect textarea default", () => {
  test("to render", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-textarea--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toBeVisible()
  })

  test("to be editable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-textarea--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("textbox")
      .fill("Some text\n")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("textbox"),
    ).toHaveValue("Some text\n")
  })

  test("to have a placeholder", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-textarea--placeholder",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByPlaceholder("Write something..."),
    ).toBeVisible()
  })
})
