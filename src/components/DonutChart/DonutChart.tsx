// Tremor Raw DonutChart [v0.0.0]

"use client"

import React from "react"
import {
  Pie,
  PieChart as ReChartsDonutChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts"

import {
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
} from "../../utils/chartColors"
import { cx } from "../../utils/cx"

const sumNumericArray = (arr: number[]): number =>
  arr.reduce((sum, num) => sum + num, 0)

const parseData = (
  data: Record<string, any>[],
  categoryColors: Map<string, AvailableChartColorsKeys>,
  category: string,
) =>
  data.map((dataPoint) => ({
    ...dataPoint,
    color: categoryColors.get(dataPoint[category]) || AvailableChartColors[0],
    className: getColorClassName(
      categoryColors.get(dataPoint[category]) || AvailableChartColors[0],
      "fill",
    ),
  }))

const calculateDefaultLabel = (data: any[], valueKey: string): number =>
  sumNumericArray(data.map((dataPoint) => dataPoint[valueKey]))

const parseLabelInput = (
  labelInput: string | undefined,
  valueFormatter: (value: number) => string,
  data: any[],
  valueKey: string,
): string => labelInput || valueFormatter(calculateDefaultLabel(data, valueKey))

const ChartTooltipRow: React.FC<{
  value: string
  name: string
  color?: string
}> = ({ value, name, color }) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        aria-hidden="true"
        className={cx(
          "size-2.5 shrink-0 rounded-full",
          getColorClassName(color as AvailableChartColorsKeys, "bg"),
        )}
      />
      <p className="whitespace-nowrap text-right text-gray-700 dark:text-gray-300">
        {name}
      </p>
    </div>
    <p className="whitespace-nowrap text-right font-medium tabular-nums text-gray-900 dark:text-gray-50">
      {value}
    </p>
  </div>
)

const ChartTooltip: React.FC<{
  active: boolean | undefined
  payload: any
  valueFormatter: (value: number) => string
}> = ({ active, payload, valueFormatter }) => {
  if (!active || !payload) return null

  const filteredPayload = payload.filter((item: any) => item.type !== "none")

  return (
    <div className="rounded-md border border-gray-200 bg-white text-sm shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-1 px-4 py-2">
        {filteredPayload.map(
          ({ value, name, payload: itemPayload }: any, index: number) => (
            <ChartTooltipRow
              key={`id-${index}`}
              value={valueFormatter(value)}
              name={name}
              color={itemPayload?.color || "gray"}
            />
          ),
        )}
      </div>
    </div>
  )
}

const renderInactiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, className } =
    props

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      className={className}
      fill=""
      opacity={0.3}
      style={{ outline: "none" }}
    />
  )
}

type DonutChartVariant = "donut" | "pie"

type BaseEventProps = {
  eventType: "sector"
  categoryClicked: string
  [key: string]: number | string
}

type DonutChartEventProps = BaseEventProps | null | undefined

interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  category: string
  value: string
  colors?: AvailableChartColorsKeys[]
  variant?: DonutChartVariant
  valueFormatter?: (value: number) => string
  label?: string
  showLabel?: boolean
  showTooltip?: boolean
  onValueChange?: (value: DonutChartEventProps) => void
}

const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      data = [],
      value,
      category,
      colors = AvailableChartColors,
      variant = "donut",
      valueFormatter = (value: number) => value.toString(),
      label,
      showLabel = false,
      showTooltip = true,
      onValueChange,
      className,
      ...other
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
      undefined,
    )
    const isDonut = variant === "donut"
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data, value)

    const categories = Array.from(new Set(data.map((item) => item[category])))
    const categoryColors = constructCategoryColors(categories, colors)

    const handleShapeClick = (
      data: any,
      index: number,
      event: React.MouseEvent,
    ) => {
      event.stopPropagation()
      if (!onValueChange) return

      if (activeIndex === index) {
        setActiveIndex(undefined)
        onValueChange(null)
      } else {
        setActiveIndex(index)
        onValueChange({
          eventType: "sector",
          categoryClicked: data.payload[category],
          ...data.payload,
        })
      }
    }

    React.useEffect(() => {
      document.querySelectorAll(".recharts-pie-sector").forEach((sector) => {
        sector.setAttribute("style", "outline: none")
      })
    }, [activeIndex])

    return (
      <div ref={ref} className={cx("h-40", className)} {...other}>
        <ResponsiveContainer className="h-full w-full">
          <ReChartsDonutChart
            onClick={
              onValueChange && activeIndex !== undefined
                ? () => {
                    setActiveIndex(undefined)
                    onValueChange(null)
                  }
                : undefined
            }
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {showLabel && isDonut && (
              <text
                className="fill-tremor-content-emphasis dark:fill-dark-tremor-content-emphasis"
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {parsedLabelInput}
              </text>
            )}
            <Pie
              className={cx(
                "stroke-white dark:stroke-gray-950",
                onValueChange ? "cursor-pointer" : "cursor-default",
              )}
              data={parseData(data, categoryColors, category)}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={isDonut ? "75%" : "0%"}
              outerRadius="100%"
              stroke=""
              strokeLinejoin="round"
              dataKey={value}
              nameKey={category}
              isAnimationActive={false}
              onClick={handleShapeClick}
              activeIndex={activeIndex}
              inactiveShape={renderInactiveShape}
              style={{ outline: "none" }}
            />
            {showTooltip && (
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                isAnimationActive={false}
                content={({ active, payload }) => (
                  <ChartTooltip
                    active={active}
                    payload={payload}
                    valueFormatter={valueFormatter}
                  />
                )}
              />
            )}
          </ReChartsDonutChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

DonutChart.displayName = "DonutChart"

export { DonutChart, type DonutChartEventProps }
