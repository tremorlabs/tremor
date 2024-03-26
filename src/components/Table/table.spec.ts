import { expect, test } from "@playwright/test"

test.describe("Expect Table", () => {
  test("to render TableRoot", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-root"),
    ).toBeVisible()
  })

  test("to render Table", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table"),
    ).toBeVisible()
  })

  test("to render TableCaption", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-caption"),
    ).toBeVisible()
  })

  test("to render TableHead", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-head"),
    ).toBeVisible()
  })

  test("to render TableRow", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-row"),
    ).toBeVisible()
  })
  test("to render TableHeaderCell", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-header-cell"),
    ).toBeVisible()
  })
  test("to render TableBody", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-body"),
    ).toBeVisible()
  })
  test("to render TableCell", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-cell"),
    ).toHaveCount(13)
  })

  test("to render TableFoot", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-table--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("table-foot"),
    ).toBeVisible()
  })
})
