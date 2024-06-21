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
  getColorClassName,
} from "../../utils/chartColors"
import { cx } from "../../utils/cx"

//#region Legend

const sumNumericArray = (arr: number[]) =>
  arr.reduce((prefixSum, num) => prefixSum + num, 0)

const parseData = (
  data: Record<string, any>[],
  colors: (AvailableChartColorsKeys | string)[],
) =>
  data.map((dataPoint: any, index: number) => {
    const baseColor = colors[index % colors.length]
    return {
      ...dataPoint,
      color: baseColor,
      className: getColorClassName(
        baseColor as AvailableChartColorsKeys,
        "fill",
      ),
    }
  })

const calculateDefaultLabel = (data: any[], valueKey: string) =>
  sumNumericArray(data.map((dataPoint) => dataPoint[valueKey]))

const parseLabelInput = (
  labelInput: string | undefined,
  valueFormatter: (value: number) => string,
  data: any[],
  valueKey: string,
) =>
  labelInput
    ? labelInput
    : valueFormatter(calculateDefaultLabel(data, valueKey))

//#region Tooltip

interface ChartTooltipRowProps {
  value: string
  name: string
  color?: string
}

const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        aria-hidden="true"
        className={cx(
          "size-2.5 shrink-0 rounded-full",
          getColorClassName(color as AvailableChartColorsKeys, "bg"),
        )}
      />
      <p
        className={cx(
          // commmon
          "whitespace-nowrap text-right",
          // text color
          "text-gray-700 dark:text-gray-300",
        )}
      >
        {name}
      </p>
    </div>
    <p
      className={cx(
        // base
        "whitespace-nowrap text-right font-medium tabular-nums",
        // text color
        "text-gray-900 dark:text-gray-50",
      )}
    >
      {value}
    </p>
  </div>
)

interface ChartTooltipProps {
  active: boolean | undefined
  payload: any
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload) {
    const filteredPayload = payload.filter((item: any) => item.type !== "none")

    return (
      <div
        className={cx(
          // base
          "rounded-md border text-sm shadow-md",
          // border color
          "border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        <div className={cx("space-y-1 px-4 py-2")}>
          {filteredPayload.map(
            (
              {
                value,
                name,
                payload: itemPayload,
              }: { value: number; name: string; payload: any },
              index: number,
            ) => {
              const color = itemPayload?.color || "gray" // Extract color with a fallback
              return (
                <ChartTooltipRow
                  key={`id-${index}`}
                  value={valueFormatter(value)}
                  name={name}
                  color={color}
                />
              )
            },
          )}
        </div>
      </div>
    )
  }
  return null
}

type DonutChartVariant = "donut" | "pie"

type BaseEventProps = {
  eventType: "slice"
  categoryClicked: string
  [key: string]: number | string //@Sev
}

type DonutChartEventProps = BaseEventProps | null | undefined

export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  category: string //@really optional?
  value: string //@really optional?
  colors?: AvailableChartColorsKeys[]
  variant?: DonutChartVariant
  valueFormatter?: (value: number) => string
  label?: string
  showLabel?: boolean
  showTooltip?: boolean
  onValueChange?: (value: DonutChartEventProps) => void
}

const renderInactiveShape = (props: any) => {
  const {
    cx,
    cy,
    // midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    // fill,
    // payload,
    // percent,
    // value,
    // activeIndex,
    className,
  } = props

  return (
    <g>
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
    </g>
  )
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
      showLabel = true,
      showTooltip = true,
      onValueChange,
      className,
      ...other
    },
    forwardedRef,
  ) => {
    const isDonut = variant == "donut"
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data, value)

    // const categoryColors = constructCategoryColors(categories, colors)

    const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
      undefined,
    )
    const hasOnValueChange = !!onValueChange

    function onShapeClick(data: any, index: number, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (activeIndex === index) {
        setActiveIndex(undefined)
        onValueChange?.(null)
      } else {
        setActiveIndex(index)
        onValueChange?.({
          eventType: "slice",
          ...data.payload.payload,
        })
      }
    }

    React.useEffect(() => {
      const pieSectors = document.querySelectorAll(".recharts-pie-sector")
      if (pieSectors) {
        pieSectors.forEach((sector) => {
          sector.setAttribute("style", "outline: none")
        })
      }
    }, [activeIndex])

    return (
      <div
        ref={forwardedRef}
        className={cx("h-40 w-full", className)}
        {...other}
      >
        <ResponsiveContainer className="h-full w-full">
          <ReChartsDonutChart
            onClick={
              hasOnValueChange && activeIndex
                ? () => {
                    setActiveIndex(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {showLabel && isDonut ? (
              <text
                className={cx(
                  // light
                  "fill-tremor-content-emphasis",
                  // dark
                  "dark:fill-dark-tremor-content-emphasis",
                )}
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {parsedLabelInput}
              </text>
            ) : null}
            <Pie
              className={cx(
                "stroke-white dark:stroke-gray-950",
                onValueChange ? "cursor-pointer" : "cursor-default",
              )}
              data={parseData(data, colors)}
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
              onClick={onShapeClick}
              activeIndex={activeIndex}
              inactiveShape={renderInactiveShape}
              style={{ outline: "none" }}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={false}
              content={
                showTooltip ? (
                  ({ active, payload }) => (
                    <ChartTooltip
                      active={active}
                      payload={payload}
                      valueFormatter={valueFormatter}
                    />
                  )
                ) : (
                  <></>
                )
              }
            />
          </ReChartsDonutChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

DonutChart.displayName = "DonutChart"

export { DonutChart, type DonutChartEventProps }
