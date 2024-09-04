import { expect, test } from "@playwright/test"

test.describe("Expect date picker single", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-datepicker--single")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("dialog"),
    ).toBeVisible()
  })
  test("to render footer with buttons", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-datepicker--single")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Cancel" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Apply" }),
    ).toBeVisible()
  })
  test("to close on Cancel", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-datepicker--single")
    await page.getByRole("button", { name: "Hide addons [⌥ A]" }).click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Cancel" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("dialog"),
    ).toBeHidden()
  })
  test("to close on Apply", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-datepicker--single")
    await page.getByRole("button", { name: "Hide addons [⌥ A]" }).click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Apply" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("dialog"),
    ).toBeHidden()
  })
  test("to render presets", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-datepicker--single-with-presets",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("dialog"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Select date" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select Today"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select Tomorrow"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select A week from now"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select A month from now"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select 6 months from now"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select A year from now"),
    ).toBeVisible()
  })
  test("with time to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-datepicker--controlled-time",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("hour, Time"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("minute, Time"),
    ).toBeVisible()
  })
})

test.describe("Expect date picker range", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("presentation")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .getByRole("presentation")
        .last(),
    ).toBeVisible()
  })
  test("to render footer with buttons", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Cancel" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "Apply" }),
    ).toBeVisible()
  })

  test("to close on Cancel", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range",
    )
    await page.getByRole("button", { name: "Hide addons [⌥ A]" }).click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date range" })
      .click()

    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Cancel" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .first()
        .getByRole("presentation"),
    ).toBeHidden()
  })
  test("to close on Apply", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range",
    )
    await page.getByRole("button", { name: "Hide addons [⌥ A]" }).click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date range" })
      .click()
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Apply" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .first()
        .getByRole("presentation"),
    ).toBeHidden()
  })
  test("to render presets", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range-with-presets",
    )
    await page.getByRole("link", { name: "Range With Presets" }).click()
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--range-with-presets",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Select Today"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Last 7 days"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Last 30 days"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Last 3 months"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Last 6 mont"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Month to date"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("Year to date"),
    ).toBeVisible()
  })
  test("with time to be rendered", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-daterangepicker--controlled-time-range",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("hour, Start date time"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("minute, Start date time"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("hour, End date time"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("minute, End date time"),
    ).toBeVisible()
  })
})
