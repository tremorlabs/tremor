// Tremor Raw LineChart [v0.0.0]

"use client"

import React from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import {
  CartesianGrid,
  Dot,
  Line,
  Legend as RechartsLegend,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AxisDomain } from "recharts/types/util/types"

import { cx } from "../../utils/cx"

type ColorType = "bg" | "stroke" | "fill" | "text"

const chartColors: {
  [color: string]: {
    [key in ColorType]: string
  }
} = {
  blue: {
    bg: "bg-blue-500",
    stroke: "stroke-blue-500",
    fill: "fill-blue-500",
    text: "text-blue-500",
  },
  red: {
    bg: "bg-red-500",
    stroke: "stroke-red-500",
    fill: "fill-red-500",
    text: "text-red-500",
  },
  green: {
    bg: "bg-green-500",
    stroke: "stroke-green-500",
    fill: "fill-green-500",
    text: "text-green-500",
  },
}

const constructCategoryColors = (
  categories: string[],
  colors: string[],
): Map<string, string> => {
  const categoryColors = new Map<string, string>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

const getColorClassName = (
  color: string, //keyof typeof chartColors,
  type: ColorType,
): string => {
  const fallbackColor = {
    bg: "bg-gray-500",
    stroke: "stroke-gray-500",
    fill: "fill-gray-500",
    text: "text-gray-500",
  }
  return chartColors[color]?.[type] ?? fallbackColor[type]
}

const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined,
) => {
  const minDomain = autoMinValue ? "auto" : minValue ?? 0
  const maxDomain = maxValue ?? "auto"
  return [minDomain, maxDomain]
}

function hasOnlyOneValueForThisKey(array: any[], keyToCheck: string) {
  const val = []

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck])
      if (val.length > 1) {
        return false
      }
    }
  }

  return true
}

const useOnWindowResize = (
  handler: { (): void },
  initialWindowSize?: number,
) => {
  const [windowSize, setWindowSize] = React.useState<undefined | number>(
    initialWindowSize,
  )
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
      handler()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [handler, windowSize])
}

type BaseEventProps = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble"
  categoryClicked: string
  [key: string]: number | string
}

type EventProps = BaseEventProps | null | undefined

type IntervalType = "preserveStartEnd" | "equidistantPreserveStart"

interface BaseChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
  categories: string[]
  index: string
  colors?: string[]
  valueFormatter?: (value: number) => string
  startEndOnly?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  yAxisWidth?: number
  intervalType?: IntervalType
  showTooltip?: boolean
  showLegend?: boolean
  showGridLines?: boolean
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  allowDecimals?: boolean
  onValueChange?: (value: EventProps) => void
  enableLegendSlider?: boolean
  tickGap?: number
}

export interface LegendItemProps {
  name: string
  color: string
  onClick?: (name: string, color: string) => void
  activeLegend?: string
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick
  return (
    <li
      className={cx(
        // base
        "group inline-flex items-center whitespace-nowrap rounded-md px-2 py-0.5 transition",
        // text
        "text-gray-700 dark:text-gray-300",
        hasOnValueChange
          ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          : "cursor-default",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(name, color)
      }}
    >
      <svg
        aria-hidden="true"
        className={cx(
          "mr-1.5 size-2 flex-none",
          getColorClassName(color ?? "fallback", "text"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={4} />
      </svg>
      <p
        className={cx(
          // base
          "truncate whitespace-nowrap text-sm",
          // text color
          "text-gray-700 dark:text-gray-300",
          hasOnValueChange &&
            "dark:group-hover:text-dark-gray-200 group-hover:text-gray-900",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
      >
        {name}
      </p>
    </li>
  )
}

export interface ScrollButtonProps {
  icon: React.ElementType
  onClick?: () => void
  disabled?: boolean
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon
  const [isPressed, setIsPressed] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.()
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isPressed, onClick])

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout)
      setIsPressed(false)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className={cx(
        // base
        "group inline-flex size-5 items-center truncate rounded-sm transition",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        // light
        disabled
          ? "dark:text-text-gray-500 text-gray-500"
          : "hover:text-text-gray-900 dark:hover:bg-dark-gray-100 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-50",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        setIsPressed(true)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        setIsPressed(false)
      }}
    >
      <Icon className={"w-full"} />
    </button>
  )
}

export interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[]
  colors?: string[]
  onClickLegendItem?: (category: string, color: string) => void
  activeLegend?: string
  enableLegendSlider?: boolean
}

type HasScrollProps = {
  left: boolean
  right: boolean
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = ["blue", "red", "green"],
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props
  const scrollableRef = React.useRef<HTMLInputElement>(null)
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null)
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current
    if (!scrollable) return

    const hasLeftScroll = scrollable.scrollLeft > 0
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll })
  }, [setHasScroll]) // dependencies are listed here in the array

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current
      const width = element?.clientWidth ?? 0

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width
              : element.scrollLeft + width,
          behavior: "smooth",
        })
        setTimeout(() => {
          checkScroll()
        }, 400)
      }
    },
    [enableLegendSlider, checkScroll],
  )

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left")
      } else if (key === "ArrowRight") {
        scrollToTest("right")
      }
    }
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned)
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned)
      }, 300)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isKeyDowned, scrollToTest])

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsKeyDowned(e.key)
    }
  }
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation()
    setIsKeyDowned(null)
  }

  React.useEffect(() => {
    const scrollable = scrollableRef?.current
    if (enableLegendSlider) {
      checkScroll()

      scrollable?.addEventListener("keydown", keyDown)
      scrollable?.addEventListener("keyup", keyUp)
    }

    return () => {
      //   document.removeEventListener("keydown", keyDown);
      //   document.removeEventListener("keyup", keyUp);
      scrollable?.removeEventListener("keydown", keyDown)
      scrollable?.removeEventListener("keyup", keyUp)
    }
  }, [checkScroll, enableLegendSlider])

  return (
    <ol
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cx(
          //common
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center  overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, idx) => (
          <LegendItem
            key={`item-${idx}`}
            name={category}
            color={colors[idx]}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cx(
              // light mode
              "bg-white",
              // dark mode
              "dark:bg-gray-950",
              // base
              "absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1",
            )}
          >
            <ScrollButton
              icon={RiArrowLeftSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("left")
              }}
              disabled={!hasScroll?.left ?? true}
            />
            <ScrollButton
              icon={RiArrowRightSLine}
              onClick={() => {
                setIsKeyDowned(null)
                scrollToTest("right")
              }}
              disabled={!hasScroll?.right ?? true}
            />
          </div>
        </>
      ) : null}
    </ol>
  )
})

Legend.displayName = "Legend"

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, string>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
) => {
  const legendRef = React.useRef<HTMLDivElement>(null)

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height
        ? Number(height) + 20 // 20px extra padding
        : 60 // default height
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight))
  })

  const filteredPayload = payload.filter((item: any) => item.type !== "none")

  return (
    <div ref={legendRef} className="flex items-center justify-end">
      <Legend
        categories={filteredPayload.map((entry: any) => entry.value)}
        colors={filteredPayload.map((entry: any) =>
          categoryColors.get(entry.value),
        )}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  )
}

const ChartTooltipFrame = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cx(
      // base
      "rounded-md border text-sm shadow-xl",
      // background color
      "bg-white dark:bg-gray-950",
    )}
  >
    {children}
  </div>
)

export interface ChartTooltipRowProps {
  value: string
  name: string
  color: string
}

const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        className={cx(
          // base
          "size-3 shrink-0 rounded-full border-2 shadow",
          // border color
          "border-white dark:border-gray-800",
          getColorClassName(color ?? "fallback", "bg"),
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

export interface ChartTooltipProps {
  active: boolean | undefined
  payload: any
  label: string
  categoryColors: Map<string, string>
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  categoryColors,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload) {
    const filteredPayload = payload.filter((item: any) => item.type !== "none")

    return (
      <ChartTooltipFrame>
        <div
          className={cx(
            // base
            "border-b px-4 py-2",
            // border color
            "border-gray-200 dark:border-gray-800",
          )}
        >
          <p
            className={cx(
              // base
              "font-medium",
              // text color
              "text-gray-900 dark:text-gray-50",
            )}
          >
            {label}
          </p>
        </div>

        <div className={cx("space-y-1 px-4 py-2")}>
          {filteredPayload.map(
            ({ value, name }: { value: number; name: string }, idx: number) => (
              <ChartTooltipRow
                key={`id-${idx}`}
                value={valueFormatter(value)}
                name={name}
                color={categoryColors.get(name) ?? "fallback"}
              />
            ),
          )}
        </div>
      </ChartTooltipFrame>
    )
  }
  return null
}

export interface LineChartProps extends BaseChartProps {
  connectNulls?: boolean
}

interface ActiveDot {
  index?: number
  dataKey?: string
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = ["blue", "red", "green"],
      valueFormatter = (value: number) => value.toString(),
      startEndOnly = false,
      showXAxis = true,
      showYAxis = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      showGridLines = true,
      autoMinValue = false,
      minValue,
      maxValue,
      connectNulls = false,
      allowDecimals = true,
      className,
      onValueChange,
      enableLegendSlider = false,
      tickGap = 5,
      ...other
    } = props
    const paddingValue = !showXAxis && !showYAxis ? 0 : 20
    const [legendHeight, setLegendHeight] = React.useState(60)
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined,
    )
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined,
    )
    const categoryColors = constructCategoryColors(categories, colors)

    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue)
    const hasOnValueChange = !!onValueChange

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation()

      if (!hasOnValueChange) return
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForThisKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined)
        setActiveDot(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(itemData.dataKey)
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        })
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        })
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForThisKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined)
        onValueChange?.(null)
      } else {
        setActiveLegend(dataKey)
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        })
      }
      setActiveDot(undefined)
    }

    return (
      <div ref={ref} className={cx("h-80 w-full", className)} {...other}>
        <ResponsiveContainer className="h-full w-full">
          <RechartsLineChart
            data={data}
            onClick={
              hasOnValueChange && (activeLegend || activeDot)
                ? () => {
                    setActiveDot(undefined)
                    setActiveLegend(undefined)
                    onValueChange?.(null)
                  }
                : undefined
            }
          >
            {showGridLines ? (
              <CartesianGrid
                className={cx(
                  // stroke
                  "dark:stroke-dark-gray-800 stroke-gray-200 stroke-1",
                )}
                horizontal={true}
                vertical={false}
              />
            ) : null}
            <XAxis
              padding={{ left: paddingValue, right: paddingValue }}
              hide={!showXAxis}
              dataKey={index}
              interval={startEndOnly ? "preserveStartEnd" : intervalType}
              tick={{ transform: "translate(0, 6)" }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              fill=""
              stroke=""
              className={cx("dark:fill-dark-gray-400 fill-gray-600 text-sm")}
              tickLine={false}
              axisLine={false}
              minTickGap={tickGap}
            />
            <YAxis
              width={yAxisWidth}
              hide={!showYAxis}
              axisLine={false}
              tickLine={false}
              type="number"
              domain={yAxisDomain as AxisDomain}
              tick={{ transform: "translate(-3, 0)" }}
              fill=""
              stroke=""
              className={cx(
                // base
                "text-sm",
                // light
                "fill-gray-700 dark:fill-gray-300",
              )}
              tickFormatter={valueFormatter}
              allowDecimals={allowDecimals}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={false}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              content={
                showTooltip ? (
                  ({ active, payload, label }) => (
                    <ChartTooltip
                      active={active}
                      payload={payload}
                      label={label}
                      valueFormatter={valueFormatter}
                      categoryColors={categoryColors}
                    />
                  )
                ) : (
                  <></>
                )
              }
              position={{ y: 0 }}
            />

            {showLegend ? (
              <RechartsLegend
                verticalAlign="top"
                height={legendHeight}
                content={({ payload }) =>
                  ChartLegend(
                    { payload },
                    categoryColors,
                    setLegendHeight,
                    activeLegend,
                    hasOnValueChange
                      ? (clickedLegendItem: string) =>
                          onCategoryClick(clickedLegendItem)
                      : undefined,
                    enableLegendSlider,
                  )
                }
              />
            ) : null}
            {categories.map((category) => (
              <Line
                className={cx(
                  getColorClassName(
                    categoryColors.get(category) ?? "fallback",
                    "stroke",
                  ),
                )}
                strokeOpacity={
                  activeDot || (activeLegend && activeLegend !== category)
                    ? 0.3
                    : 1
                }
                // activeDot={(props: any) => {
                //   const {
                //     cx,
                //     cy,
                //     stroke,
                //     strokeLinecap,
                //     strokeLinejoin,
                //     strokeWidth,
                //     dataKey,
                //   } = props
                //   return (
                //     <Dot
                //       className={cx(
                //         "stroke-tremor-background dark:stroke-dark-tremor-background",
                //         onValueChange ? "cursor-pointer" : "",
                //         getColorClassName(
                //           categoryColors.get(dataKey) ?? "fallback",
                //           "fill",
                //         ),
                //       )}
                //       cx={cx}
                //       cy={cy}
                //       r={5}
                //       fill=""
                //       stroke={stroke}
                //       strokeLinecap={strokeLinecap}
                //       strokeLinejoin={strokeLinejoin}
                //       strokeWidth={strokeWidth}
                //       onClick={(dotProps: any, event) =>
                //         onDotClick(props, event)
                //       }
                //     />
                //   )
                // }}
                dot={(props: any) => {
                  const {
                    stroke,
                    strokeLinecap,
                    strokeLinejoin,
                    strokeWidth,
                    cx,
                    cy,
                    dataKey,
                    index,
                  } = props

                  if (
                    (hasOnlyOneValueForThisKey(data, category) &&
                      !(
                        activeDot ||
                        (activeLegend && activeLegend !== category)
                      )) ||
                    (activeDot?.index === index &&
                      activeDot?.dataKey === category)
                  ) {
                    return (
                      <Dot
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={5}
                        stroke={stroke}
                        fill=""
                        strokeLinecap={strokeLinecap}
                        strokeLinejoin={strokeLinejoin}
                        strokeWidth={strokeWidth}
                        className={cx(
                          "dark:stroke-dark-white stroke-white",
                          onValueChange ? "cursor-pointer" : "",
                          getColorClassName(
                            categoryColors.get(dataKey) ?? "fallback",
                            "fill",
                          ),
                        )}
                      />
                    )
                  }
                  return <React.Fragment key={index}></React.Fragment>
                }}
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
            {onValueChange
              ? categories.map((category) => (
                  <Line
                    className={cx("cursor-pointer")}
                    strokeOpacity={0}
                    key={category}
                    name={category}
                    type="linear"
                    dataKey={category}
                    stroke="transparent"
                    fill="transparent"
                    legendType="none"
                    tooltipType="none"
                    strokeWidth={12}
                    connectNulls={connectNulls}
                    onClick={(props: any, event) => {
                      event.stopPropagation()
                      const { name } = props
                      onCategoryClick(name)
                    }}
                  />
                ))
              : null}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    )
  },
)

LineChart.displayName = "LineChart"

export default LineChart
