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

  test("to render a selected tab with content", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-line")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("tab", { name: "Shipping" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Shipping"),
    ).toContainText(
      "We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most brokerage fees are included in the price of UPS Expedited shipping, with the exception of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties and taxes are not made (see next question and answer).",
    )
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
  test("to render a disabled tab solid", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-tabs--variant-solid-disabled",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Tab 3" }),
    ).toBeDisabled()
  })
})

test.describe("Expect tabs variant-solid", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-solid")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("ReturnsShipping"),
    ).toBeVisible()
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

  test("to render a selected tab with content", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-tabs--variant-solid")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("tab", { name: "Shipping" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Shipping"),
    ).toContainText(
      "We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most brokerage fees are included in the price of UPS Expedited shipping, with the exception of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties and taxes are not made (see next question and answer).",
    )
  })
})
