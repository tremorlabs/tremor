import { expect, test } from "@playwright/test"

test.describe("Expect dropdown menu default", () => {
  test("trigger to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Open" }),
    ).toBeVisible()
  })

  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("My Account"),
    ).toContainText("My Account")
  })

  test("to make click an item to be clickable", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("menuitem", { name: "Account Settings ⌘S" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Open" }),
    ).toBeVisible()
  })

  test("to have a submenu", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("menuitem", { name: "Invite users" })
      .hover()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitem", { name: "Email" }),
    ).toBeVisible()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("menuitem", { name: "Email" })
      .click()
  })
})

test.describe("Expect dropdown item", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitem", { name: "Billing ⌘B" }),
    ).toBeDisabled()
  })
})

test.describe("Expect dropdown menu radio item", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--with-radio-item",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitemradio", { name: "Alphabetical A–Z" }),
    ).toBeVisible()
  })
  test("to be checked", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--with-radio-item",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitemradio", { name: "Alphabetical A–Z" }),
    ).toBeChecked()
  })
})

test.describe("Expect dropdown menu checkbox item", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--with-checkbox-item",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitemcheckbox", { name: "Show status bar Pro" }),
    ).toBeVisible()
  })
  test("to be checked", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-dropdownmenu--with-checkbox-item",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("menuitemcheckbox", { name: "Show status bar Pro" }),
    ).toBeChecked()
  })
})
