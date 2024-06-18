"use client"

import React from "react"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  getColorClassName,
} from "../../utils/chartColors"
import { cx } from "../../utils/cx"
import { Tooltip } from "../Tooltip/Tooltip"

const getMarkerBgColor = (
  markerValue: number | undefined,
  values: number[],
  colors: AvailableChartColorsKeys[],
): string => {
  if (markerValue === undefined) return ""

  if (markerValue === 0) {
    for (const [index, value] of values.entries()) {
      if (value > 0) {
        return getColorClassName(colors[index], "bg")
      }
    }
  }

  let prefixSum = 0
  for (const [index, value] of values.entries()) {
    prefixSum += value
    if (prefixSum >= markerValue) {
      return getColorClassName(colors[index], "bg")
    }
  }

  return ""
}

const getPositionLeft = (
  value: number | undefined,
  maxValue: number,
): number => (value ? (value / maxValue) * 100 : 0)

const sumNumericArray = (arr: number[]) =>
  arr.reduce((prefixSum, num) => prefixSum + num, 0)

const BarLabels = ({ values }: { values: number[] }) => {
  const sumValues = React.useMemo(() => sumNumericArray(values), [values])
  let prefixSum = 0
  let sumConsecutiveHiddenLabels = 0

  return (
    <div
      className={cx(
        // base
        "relative mb-2 flex h-5 w-full text-sm font-medium",
        // text color
        "text-gray-700 dark:text-gray-300",
      )}
    >
      {values.map((widthPercentage, index) => {
        prefixSum += widthPercentage

        const showLabel =
          (widthPercentage >= 0.1 * sumValues ||
            sumConsecutiveHiddenLabels >= 0.09 * sumValues) &&
          sumValues - prefixSum >= 0.1 * sumValues &&
          prefixSum >= 0.1 * sumValues &&
          prefixSum < 0.9 * sumValues

        sumConsecutiveHiddenLabels = showLabel
          ? 0
          : (sumConsecutiveHiddenLabels += widthPercentage)

        const widthPositionLeft = getPositionLeft(widthPercentage, sumValues)

        return (
          <div
            key={`item-${index}`}
            className="flex items-center justify-end"
            style={{ width: `${widthPositionLeft}%` }}
          >
            <span
              className={cx(
                showLabel ? "block" : "hidden",
                "left-1/2 translate-x-1/2 tabular-nums",
              )}
            >
              {prefixSum}
            </span>
          </div>
        )
      })}
      <div className="absolute bottom-0 left-0 flex items-center">0</div>
      <div className="absolute bottom-0 right-0 flex items-center">
        {sumValues}
      </div>
    </div>
  )
}

interface CategoryBarProps extends React.HTMLAttributes<HTMLDivElement> {
  values: number[]
  colors?: AvailableChartColorsKeys[]
  markerValue?: number
  showLabels?: boolean
  tooltip?: string
  showAnimation?: boolean
}

const CategoryBar = React.forwardRef<HTMLDivElement, CategoryBarProps>(
  (
    {
      values = [],
      colors = AvailableChartColors,
      markerValue,
      showLabels = true,
      tooltip,
      showAnimation = false,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const markerBgColor = React.useMemo(
      () => getMarkerBgColor(markerValue, values, colors),
      [markerValue, values, colors],
    )

    const maxValue = React.useMemo(() => sumNumericArray(values), [values])

    const markerPositionLeft: number = React.useMemo(
      () => getPositionLeft(markerValue, maxValue),
      [markerValue, maxValue],
    )

    return (
      <div
        ref={forwardedRef}
        className={cx(className)}
        aria-label="category bar"
        aria-valuenow={markerValue}
        {...props}
      >
        {showLabels ? <BarLabels values={values} /> : null}
        <div className="relative flex h-2 w-full items-center">
          <div className="flex h-full flex-1 items-center gap-0.5 overflow-hidden rounded-full">
            {values.map((value, index) => {
              const barColor = colors[index] ?? "gray"
              const percentage = (value / maxValue) * 100
              return (
                <div
                  key={`item-${index}`}
                  className={cx(
                    "h-full",
                    getColorClassName(
                      barColor as AvailableChartColorsKeys,
                      "bg",
                    ),
                  )}
                  style={{ width: `${percentage}%` }}
                />
              )
            })}
          </div>
          {markerValue !== undefined ? (
            <div
              className="absolute w-2 -translate-x-1/2"
              style={{
                left: `${markerPositionLeft}%`,
                transition: showAnimation ? "all 1s" : "",
              }}
            >
              {tooltip ? (
                <Tooltip content={tooltip}>
                  <div
                    aria-hidden
                    className="absolute size-7 -translate-x-[45%] -translate-y-[15%]"
                  ></div>
                  <div
                    className={cx(
                      "mx-auto h-4 w-1 translate-y-0.5 rounded-full ring-2",
                      "ring-white dark:ring-gray-950",
                      markerBgColor,
                    )}
                  />
                </Tooltip>
              ) : (
                <div
                  className={cx(
                    "mx-auto h-4 w-1 rounded-full ring-2",
                    "ring-white dark:ring-gray-950",
                    markerBgColor,
                  )}
                />
              )}
            </div>
          ) : null}
        </div>
      </div>
    )
  },
)

CategoryBar.displayName = "CategoryBar"

export { CategoryBar, type CategoryBarProps }
