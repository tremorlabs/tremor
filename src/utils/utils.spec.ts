import { describe, expect, it } from "vitest"

type AvailableChartColors = string

const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColors[],
): Map<string, AvailableChartColors> => {
  const categoryColors = new Map<string, AvailableChartColors>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

describe("constructCategoryColors", () => {
  it("should correctly map categories to colors", () => {
    const categories = ["A", "B", "C", "D"]
    const colors: AvailableChartColors[] = ["red", "green", "blue"]

    // Expected output
    const expectedOutput = new Map<string, AvailableChartColors>([
      ["A", "red"],
      ["B", "green"],
      ["C", "blue"],
      ["D", "red"],
    ])

    // Run the function
    const result = constructCategoryColors(categories, colors)

    // Assert the output
    expect(result).toEqual(expectedOutput)
  })
})
