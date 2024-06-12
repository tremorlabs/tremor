// Tremor Raw Spark Chart [v0.0.0]

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

//#region AreaChart

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
  fill?: "gradient" | "solid"
}

const SparkAreaChart = React.forwardRef<HTMLDivElement, SparkAreaChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      type = "stacked",
      className,
      fill = "gradient",
      ...other
    } = props

    const categoryColors = constructCategoryColors(categories, colors)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const stacked = type === "stacked" || type === "percent"

    return (
      <div ref={ref} className={cx("h-12 w-28", className)} {...other}>
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
            {categories.map((category) => (
              <defs key={category}>
                <linearGradient
                  className={cx(
                    getColorClassName(
                      categoryColors.get(category) as AvailableChartColorsKeys,
                      "text",
                    ),
                  )}
                  id={categoryColors.get(category)}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  {fill === "gradient" ? (
                    <>
                      <stop
                        offset="5%"
                        stopColor="currentColor"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="95%"
                        stopColor="currentColor"
                        stopOpacity={0}
                      />
                    </>
                  ) : (
                    <stop stopColor="currentColor" stopOpacity={0.3} />
                  )}
                </linearGradient>
              </defs>
            ))}
            {categories.map((category) => (
              <Area
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
                stackId={stacked ? "stack" : undefined}
                fill={`url(#${categoryColors.get(category) as AvailableChartColorsKeys})`}
              />
            ))}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

SparkAreaChart.displayName = "SparkAreaChart"

interface SparkLineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  categories: string[]
  index: string
  colors?: AvailableChartColorsKeys[]
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  connectNulls?: boolean
  type?: "default" | "stacked" | "percent"
}

const SparkLineChart = React.forwardRef<HTMLDivElement, SparkLineChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = AvailableChartColors,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      type = "stacked",
      className,
      ...other
    } = props

    const categoryColors = constructCategoryColors(categories, colors)
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)

    return (
      <div ref={ref} className={cx("h-12 w-28", className)} {...other}>
        <ResponsiveContainer>
          <RechartsLineChart
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
      <div ref={forwardedRef} className={cx("h-12 w-28", className)} {...other}>
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
