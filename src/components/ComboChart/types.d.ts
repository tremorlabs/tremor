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

  // ???
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
  barCategoryGap?: string | number
  connectNulls?: boolean

  // prop for every series
  categories: string[]
  //   colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  showYAxis?: boolean
  yAxisWidth?: number
  allowDecimals?: boolean
  yAxisLabel?: string
  type?: "default" | "stacked" | "percent" // maybe without percent? remove all?
}
