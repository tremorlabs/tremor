import { describe, expect, it } from "vitest"

import {
  chartColors,
  ColorUtility,
  constructCategoryColors,
  getColorClassName,
  type AvailableChartColorsKeys,
} from "./chartColors"
import { getYAxisDomain } from "./getYAxisDomain"
import { hasOnlyOneValueForKey } from "./hasOnlyOneValueForKey"

describe("constructCategoryColors", () => {
  it("should correctly map categories to colors", () => {
    const categories = ["A", "B", "C", "D"]
    const colors: AvailableChartColorsKeys[] = [
      "blue",
      "emerald",
      "violet",
      "amber",
    ]

    const expectedOutput = new Map<string, AvailableChartColorsKeys>([
      ["A", "blue"],
      ["B", "emerald"],
      ["C", "violet"],
      ["D", "amber"],
    ])

    const result = constructCategoryColors(categories, colors)

    expect(result).toEqual(expectedOutput)
  })
})

describe("hasOnlyOneValueForKey", () => {
  it("returns false when the key has the same value in all objects", () => {
    const array = [
      { id: 1, value: "a" },
      { id: 2, value: "a" },
      { id: 3, value: "a" },
    ]
    expect(hasOnlyOneValueForKey(array, "value")).toBe(false)
  })

  it("returns false when the key has different values in the objects", () => {
    const array = [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
      { id: 3, value: "a" },
    ]
    expect(hasOnlyOneValueForKey(array, "value")).toBe(false)
  })

  it("returns true when the key is present in only one object", () => {
    const array = [{ id: 1 }, { id: 2, value: "a" }, { id: 3 }]
    expect(hasOnlyOneValueForKey(array, "value")).toBe(true)
  })

  it("returns true when the array is empty", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const array: any[] = []
    expect(hasOnlyOneValueForKey(array, "value")).toBe(true)
  })

  it("returns false when the key has different values and some objects are missing the key", () => {
    const array = [{ id: 1, value: "a" }, { id: 2 }, { id: 3, value: "b" }]
    expect(hasOnlyOneValueForKey(array, "value")).toBe(false)
  })

  it("returns true when all objects are missing the key", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }]
    expect(hasOnlyOneValueForKey(array, "value")).toBe(true)
  })
})

describe("getYAxisDomain", () => {
  it('returns ["auto", "auto"] when autoMinValue is true and maxValue is undefined', () => {
    const result = getYAxisDomain(true, undefined, undefined)
    expect(result).toEqual(["auto", "auto"])
  })

  it('returns ["auto", maxValue] when autoMinValue is true and maxValue is defined', () => {
    const result = getYAxisDomain(true, undefined, 100)
    expect(result).toEqual(["auto", 100])
  })

  it('returns [minValue, "auto"] when autoMinValue is false and minValue is defined', () => {
    const result = getYAxisDomain(false, 10, undefined)
    expect(result).toEqual([10, "auto"])
  })

  it("returns [minValue, maxValue] when autoMinValue is false and both minValue and maxValue are defined", () => {
    const result = getYAxisDomain(false, 10, 100)
    expect(result).toEqual([10, 100])
  })

  it('returns [0, "auto"] when autoMinValue is false and minValue is undefined and maxValue is undefined', () => {
    const result = getYAxisDomain(false, undefined, undefined)
    expect(result).toEqual([0, "auto"])
  })

  it("returns [0, maxValue] when autoMinValue is false, minValue is undefined, and maxValue is defined", () => {
    const result = getYAxisDomain(false, undefined, 100)
    expect(result).toEqual([0, 100])
  })

  it('returns [minValue, "auto"] when autoMinValue is true and minValue is defined but maxValue is undefined', () => {
    const result = getYAxisDomain(true, 10, undefined)
    expect(result).toEqual(["auto", "auto"])
  })

  it('returns ["auto", "auto"] when autoMinValue is true and minValue is defined and maxValue is undefined', () => {
    const result = getYAxisDomain(true, 10, undefined)
    expect(result).toEqual(["auto", "auto"])
  })
})

describe("getColorClassName", () => {
  const colors: AvailableChartColorsKeys[] = Object.keys(
    chartColors,
  ) as AvailableChartColorsKeys[]
  const utilities: ColorUtility[] = ["bg", "stroke", "fill", "text"]

  colors.forEach((color) => {
    utilities.forEach((type) => {
      it(`returns the correct class name for color ${color} and type ${type}`, () => {
        const result = getColorClassName(color, type)
        expect(result).toBe(chartColors[color][type])
      })
    })
  })

  it("returns the fallback class name for an invalid color", () => {
    const result = getColorClassName(
      "invalidColor" as AvailableChartColorsKeys,
      "bg",
    )
    expect(result).toBe("bg-gray-500")
  })
})
