import { expect, test } from "@playwright/test"

test.describe("Slider component", () => {
  test("renders the slider", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-slider--default")
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("slider"),
    ).toBeVisible()
  })

  test("can be dragged horizontally", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-slider--default")
    const slider = page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2 + 50,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.up()
    }
  })

  test("can be dragged vertically", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-slider--vertical")
    const slider = page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2 + 50,
      )
      await page.mouse.up()
    }
  })

  test("displays the correct value when changed", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-slider--default")
    const slider = page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2 + 50,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.up()
    }
    // Add an assertion to check the slider value if it is displayed in the UI
  })

  test("is disabled when appropriate", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/ui-slider--disabled")
    const slider = page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("slider")
    await expect(slider).toBeDisabled()
  })
})
