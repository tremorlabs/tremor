import { expect, test } from "@playwright/test"

test.describe("Expect radiocardgroup default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiocardgroup--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radiogroup"),
    ).toBeVisible()
  })
  test("to render radiogroupitems", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiocardgroup--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radiogroup"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Software Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Hardware Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio"),
    ).toHaveCount(3)
  })

  test("to be checkable", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiocardgroup--default",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("radio", { name: "Platform Engineer" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiocardgroup--disabled",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio", { name: "Hardware Engineer" }),
    ).toBeDisabled()
  })
})
