import { expect, test } from "@playwright/test"

test.describe("Expect card", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-card--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("#storybook-root div"),
    ).toBeVisible()
  })
})

test.describe("Expect card", () => {
  test("to inlcude text", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-card--with-text")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("heading", { name: "Perseverance Rover's Latest" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("NASA's Perseverance Rover has"),
    ).toBeVisible()
  })
})

test.describe("Expect card as list item", () => {
  test("to be defined", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-card--as-child-list")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("listitem", {
          name: "This card will be turned into a <li> element",
        }),
    ).toBeDefined()
  })
})
