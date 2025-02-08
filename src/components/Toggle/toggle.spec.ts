import { expect, test } from "@playwright/test"

test.describe("Expect Toggle", () => {
  test("to render TableRoot", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-toggle--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]').getByLabel('Toggle star')
    ).toBeVisible()
  })

})
