// Tremor Spark Chart [v0.1.2]
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import React from "react"
import {
  Area,
  Bar,
  Line,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
} from "../../utils/chartColors"
import { cx } from "../../utils/cx"
import { getYAxisDomain } from "../../utils/getYAxisDomain"

//#region SparkAreaChart

interface SparkAreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  categories: string[]
  index: string
  colors?: AvailableChartColorsKeys[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  connectNulls?: boolean
  type?: "default" | "stacked" | "percent"
  fill?: "gradient" | "solid" | "none"
}

const SparkAreaChart = React.forwardRef<HTMLDivElement, SparkAreaChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      type = "default",
      className,
      fill = "gradient",
      ...other
    } = props

    const categoryColors = constructCategoryColors(categories, colors)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const stacked = type === "stacked" || type === "percent"
    const areaId = React.useId()

    const getFillContent = (fillType: SparkAreaChartProps["fill"]) => {
      switch (fillType) {
        case "none":
          return <stop stopColor="currentColor" stopOpacity={0} />
        case "gradient":
          return (
            <>
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.4} />
              <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
            </>
          )
        case "solid":
          return <stop stopColor="currentColor" stopOpacity={0.3} />
        default:
          return <stop stopColor="currentColor" stopOpacity={0.3} />
      }
    }

    return (
      <div
        ref={forwardedRef}
        className={cx("h-12 w-28", className)}
        tremor-id="tremor-raw"
        {...other}
      >
        <ResponsiveContainer>
          <RechartsAreaChart
            data={data}
            margin={{
              bottom: 1,
              left: 1,
              right: 1,
              top: 1,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide={true} domain={yAxisDomain as AxisDomain} />

            {categories.map((category) => {
              const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, "")}`
              return (
                <React.Fragment key={category}>
                  <defs>
                    <linearGradient
                      key={category}
                      className={cx(
                        getColorClassName(
                          categoryColors.get(
                            category,
                          ) as AvailableChartColorsKeys,
                          "text",
                        ),
                      )}
                      id={categoryId}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      {getFillContent(fill)}
                    </linearGradient>
                  </defs>
                  <Area
                    className={cx(
                      getColorClassName(
                        categoryColors.get(
                          category,
                        ) as AvailableChartColorsKeys,
                        "stroke",
                      ),
                    )}
                    dot={false}
                    strokeOpacity={1}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke=""
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    isAnimationActive={false}
                    connectNulls={connectNulls}
                    stackId={stacked ? "stack" : undefined}
                    fill={`url(#${categoryId})`}
                  />
                </React.Fragment>
              )
            })}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkAreaChart.displayName = "SparkAreaChart"

//#region SparkLineChart

interface SparkLineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  categories: string[]
  index: string
  colors?: AvailableChartColorsKeys[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  connectNulls?: boolean
}

const SparkLineChart = React.forwardRef<HTMLDivElement, SparkLineChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      className,
      ...other
    } = props

    const categoryColors = constructCategoryColors(categories, colors)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)

    return (
      <div
        ref={forwardedRef}
        className={cx("h-12 w-28", className)}
        tremor-id="tremor-raw"
        {...other}
      >
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            margin={{
              bottom: 1,
              left: 1,
              right: 1,
              top: 1,
            }}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide={true} domain={yAxisDomain as AxisDomain} />
            {categories.map((category) => (
              <Line
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "stroke",
                  ),
                )}
                dot={false}
                strokeOpacity={1}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stroke=""
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                isAnimationActive={false}
                connectNulls={connectNulls}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkLineChart.displayName = "SparkLineChart"

//#region SparkBarChart

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  index: string
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  barCategoryGap?: string | number
  type?: "default" | "stacked" | "percent"
}

const SparkBarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, forwardedRef) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      autoMinValue = false,
      minValue,
      maxValue,
      barCategoryGap,
      type = "default",
      className,
      ...other
    } = props

    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const stacked = type === "stacked" || type === "percent"

    return (
      <div
        ref={forwardedRef}
        className={cx("h-12 w-28", className)}
        tremor-id="tremor-raw"
        {...other}
      >
        <ResponsiveContainer>
          <RechartsBarChart
            data={data}
            margin={{
              bottom: 1,
              left: 1,
              right: 1,
              top: 1,
            }}
            stackOffset={type === "percent" ? "expand" : undefined}
            barCategoryGap={barCategoryGap}
          >
            <XAxis hide dataKey={index} />
            <YAxis hide={true} domain={yAxisDomain as AxisDomain} />

            {categories.map((category) => (
              <Bar
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) as AvailableChartColorsKeys,
                    "fill",
                  ),
                )}
                key={category}
                name={category}
                type="linear"
                dataKey={category}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
                fill=""
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkBarChart.displayName = "SparkBarChart"

export { SparkAreaChart, SparkLineChart, SparkBarChart }
