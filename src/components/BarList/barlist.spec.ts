import { expect, test } from "@playwright/test"

test.describe("Expect barlist default", () => {
  test("to render a barlist", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist"),
    ).toBeVisible()
  })

  test("to render a barlist with bar, label and value", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--default",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("/home"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/home" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^843$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("/documentation"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/documentation" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^384$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("/blocks"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/blocks" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^108$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("/imprint"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/imprint" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^46$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByText("/cancellation"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/cancellation" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^3$/ }),
    ).toBeVisible()
  })
})

test.describe("Expect barlist href and value formatter", () => {
  test("to render a barlist with bar, href and formatted value", async ({
    page,
  }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-href-and-value-formatter",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("link", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^843 Visitors$/ }),
    ).toBeVisible()
  })
})

test.describe("Expect barlist sort order", () => {
  test("to have aria-sort='ascending'", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-sort-order-ascending",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist"),
    ).toHaveAttribute("aria-sort", "ascending")
  })
})

test.describe("Expect barlist onvaluechange", () => {
  test("to be clickable", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-on-value-change",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist-onvaluechange"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/blocks" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/imprint" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/cancellation" }),
    ).toBeVisible()
  })

  test("to be clickable and return value", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-on-value-change",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "/cancellation" })
      .click()
    //  improve test with check of payload
  })
})

test.describe("Expect barlist onvaluechange and href", () => {
  test("to be clickable,have href and button", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-on-value-change-and-href",
    )
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByTestId("barlist-onvaluechangehref"),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("link", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^843$/ }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("link", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .getByRole("button", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .frameLocator('iframe[title="storybook-preview-iframe"]')
        .locator("div")
        .filter({ hasText: /^384$/ }),
    ).toBeVisible()
  })

  test("to be clickable and return value", async ({ page }) => {
    await page.goto(
      "http://localhost:6006/?path=/story/visualization-barlist--with-on-value-change-and-href",
    )
    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByRole("button", { name: "/cancellation" })
      .click()
    //  improve test with check of payload
  })
})
