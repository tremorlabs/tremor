import { expect, test } from "@playwright/test"

test.describe("Drawer Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-drawer--default")
  })

  test("should open and display drawer content", async ({ page }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')

    await frame.getByRole("button", { name: "Open Drawer" }).click()

    await expect(
      frame.getByRole("heading", { name: "Account Created Successfully" }),
    ).toBeVisible()
    await expect(
      frame.getByText(
        "Your account has been created successfully. You can now login to your account. For more information, please contact us.",
      ),
    ).toBeVisible()
    await expect(
      frame.getByText("This is they body of the drawer, content goes here."),
    ).toBeVisible()
    await expect(frame.getByRole("button", { name: "Go back" })).toBeVisible()
    await expect(
      frame.getByRole("button", { name: "Ok, got it!" }),
    ).toBeVisible()
  })

  test("should close the drawer when 'Go back' button is clicked", async ({
    page,
  }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')

    await frame.getByRole("button", { name: "Open Drawer" }).click()

    await frame.getByRole("button", { name: "Go back" }).click()

    await expect(
      frame.getByRole("button", { name: "Open Drawer" }),
    ).toBeVisible()
  })

  test("should close the drawer when 'Ok, got it!' button is clicked", async ({
    page,
  }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')

    await frame.getByRole("button", { name: "Open Drawer" }).click()

    await frame.getByRole("button", { name: "Ok, got it!" }).click()

    await expect(
      frame.getByRole("button", { name: "Open Drawer" }),
    ).toBeVisible()
  })

  test("should be accessible via keyboard interactions", async ({ page }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')

    await frame.getByRole("button", { name: "Open Drawer" }).focus()
    await page.keyboard.press("Enter")

    await expect(
      frame.getByRole("heading", { name: "Account Created Successfully" }),
    ).toBeVisible()

    await page.keyboard.press("Escape")

    await expect(
      frame.getByRole("button", { name: "Open Drawer" }),
    ).toBeVisible()
  })

  test("should handle content updates correctly", async ({ page }) => {
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]')

    await frame.getByRole("button", { name: "Open Drawer" }).click()

    await expect(
      frame.getByText("This is they body of the drawer, content goes here."),
    ).toBeVisible()
  })
})
