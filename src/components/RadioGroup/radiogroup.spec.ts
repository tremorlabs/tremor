import { expect, test } from "@playwright/test"

test.describe("Expect radiogroup default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-radiogroup--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radiogroup"),
    ).toBeVisible()
  })
  test("to render radiogroupitems", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-radiogroup--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radiogroup"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio")
        .nth(1),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio")
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio"),
    ).toHaveCount(3)
  })

  test("to be checkable", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-radiogroup--default")
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("radio")
      .first()
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("radio")
        .first(),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup label", () => {
  test("to render with label", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiogroup--with-label",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^First come first serve \(FCFS\)$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^By appointment$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^By time window$/ }),
    ).toBeVisible()
  })

  test("to be checkable", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiogroup--with-label",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByLabel("First come first serve (FCFS)")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("First come first serve (FCFS)"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("First come first serve (FCFS)"),
    ).toBeChecked()
  })
  test("to be checkable by label", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiogroup--with-label",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByText("First come first serve (FCFS)")
      .click()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("First come first serve (FCFS)"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("First come first serve (FCFS)"),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/ui-radiogroup--disabled",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByLabel("By time window"),
    ).toBeDisabled()
  })
})
