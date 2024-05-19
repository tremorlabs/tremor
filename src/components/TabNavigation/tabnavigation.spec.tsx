import { expect, test } from "@playwright/test"

test.describe("Expect tabs variant-line", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-line")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("ReturnsShipping"),
    ).toBeVisible()
  })

  test("to render a selected tab", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-line")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("tab", { name: "Returns" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Returns" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "false")
  })
})

test.describe("Expect tabs disabled", () => {
  test("to render a disabled tab line", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-tabs--variant-line-disabled",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Tab 3" }),
    ).toBeDisabled()
  })
})

test("to render a selected tab", async ({ page }) => {
  await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-solid")
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole("tab", { name: "Returns" })
    .click()
  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("tab", { name: "Returns" }),
  ).toHaveAttribute("aria-selected", "true")
  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("tab", { name: "Shipping" }),
  ).toHaveAttribute("aria-selected", "false")
})
