interface ActiveDot {
  index?: number
  dataKey?: string
}

type BaseEventProps = {
  eventType: "category" | "bar" | "dot"
  categoryClicked: string
  [key: string]: number | string
}

type BarChartEventProps = BaseEventProps | null | undefined

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  // general
  data: Record<string, any>[]
  index: string
  startEndOnly?: boolean
  showXAxis?: boolean
  showGridLines?: boolean
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart"
  showLegend?: boolean
  showTooltip?: boolean
  onValueChange?: (value: BarChartEventProps) => void
  enableLegendSlider?: boolean
  legendPosition?: "left" | "center" | "right"
  xAxisLabel?: string
  tickGap?: number

  // barSeries?
  leftSeries: {
    type: "bar" | "line" // does not make sense if another series is set to the same?
    categories: string[]
    colors?: AvailableChartColorsKeys[]
    valueFormatter?: (value: number) => string
    showYAxis?: boolean
    yAxisWidth?: number
    allowDecimals?: boolean
    yAxisLabel?: string
    autoMinValue?: boolean
    minValue?: number
    maxValue?: number
  }

  rightSeries: {}

  // ??? bar/line
  barCategoryGap?: string | number
  connectNulls?: boolean
  // type?: "default" | "stacked" | "percent" // maybe without percent? remove all?
}
