import type { Meta, StoryObj } from "@storybook/react"

import { BarChart } from "./BarChart"

const chartdata = [
  {
    date: "Jan 23",
    SolarCells: 2890,
    Glass: 2338,
    Encapsulant: 1450,
    BackSheet: 1900,
    Frame: 1600,
    JunctionBox: 1800,
    Adhesive: 1700,
  },
  {
    date: "Feb 23",
    SolarCells: 2756,
    Glass: 2103,
    Encapsulant: 1200,
    BackSheet: 1850,
    Frame: 1700,
    JunctionBox: 1750,
    Adhesive: 1650,
  },
  {
    date: "Mar 23",
    SolarCells: 3322,
    Glass: 2194,
    Encapsulant: 1300,
    BackSheet: 2200,
    Frame: 1400,
    JunctionBox: 2000,
    Adhesive: 800,
  },
  {
    date: "Apr 23",
    SolarCells: 3470,
    Glass: 2108,
    Encapsulant: 1400,
    BackSheet: 1600,
    Frame: 1800,
    JunctionBox: 1900,
    Adhesive: -1950,
  },
  {
    date: "May 23",
    SolarCells: 3475,
    Glass: 1812,
    Encapsulant: 1550,
    BackSheet: 2300,
    Frame: 1450,
    JunctionBox: 2200,
    Adhesive: -1600,
  },
  {
    date: "Jun 23",
    SolarCells: 3129,
    Glass: 1726,
    Encapsulant: 1350,
    BackSheet: 2100,
    Frame: 1750,
    JunctionBox: 2050,
    Adhesive: -1700,
  },
  {
    date: "Jul 23",
    SolarCells: 3490,
    Glass: 1982,
    Encapsulant: 1450,
    BackSheet: 1950,
    Frame: 1500,
    JunctionBox: 2300,
    Adhesive: -1800,
  },
  {
    date: "Aug 23",
    SolarCells: 2903,
    Glass: 2012,
    Encapsulant: 1250,
    BackSheet: 1700,
    Frame: 1850,
    JunctionBox: 2150,
    Adhesive: -1900,
  },
  {
    date: "Sep 23",
    SolarCells: 2643,
    Glass: 2342,
    Encapsulant: 1400,
    BackSheet: 1600,
    Frame: 1500,
    JunctionBox: 2000,
    Adhesive: -3750,
  },
  {
    date: "Oct 23",
    SolarCells: 2837,
    Glass: 2473,
    Encapsulant: 1350,
    BackSheet: 1850,
    Frame: 1900,
    JunctionBox: 2100,
    Adhesive: -2600,
  },
  {
    date: "Nov 23",
    SolarCells: 2954,
    Glass: 3848,
    Encapsulant: 1200,
    BackSheet: 2000,
    Frame: 1750,
    JunctionBox: 2400,
    Adhesive: -2950,
  },
  {
    date: "Dec 23",
    SolarCells: 3239,
    Glass: 3736,
    Encapsulant: 1550,
    BackSheet: 1700,
    Frame: 1600,
    JunctionBox: 2250,
    Adhesive: -3800,
  },
]

const meta: Meta<typeof BarChart> = {
  title: "visualization/BarChart",
  component: BarChart,
  args: { data: chartdata, index: "date", categories: ["SolarCells", "Glass"] },
}

export default meta
type Story = StoryObj<typeof BarChart>

export const Default: Story = {
  render: () => (
    <BarChart
      data-testid="bar-chart"
      data={chartdata}
      index="date"
      categories={["SolarCells", "Glass"]}
    />
  ),
}

export const DefaultNegative: Story = {
  args: {
    categories: ["SolarCells", "Adhesive"],
  },
}

export const WithValueFormatter: Story = {
  args: {
    valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
  },
}

export const WithAxisLabels: Story = {
  args: {
    xAxisLabel: "Month of Year",
    yAxisLabel: "Revenue",
  },
}

export const WithMinValue: Story = {
  args: {
    autoMinValue: true,
  },
}

export const WithMinAndMaxValue: Story = {
  args: {
    maxValue: 5000,
    minValue: -3000,
  },
}

export const AllColors: Story = {
  args: {
    data: chartdata,
    index: "date",
    categories: [
      "SolarCells",
      "Glass",
      "Encapsulant",
      "BackSheet",
      "Frame",
      "JunctionBox",
      "Adhesive",
    ],
  },
}

export const WithLegendLeft: Story = {
  args: {
    legendPosition: "left",
  },
}

export const WithLegendCenter: Story = {
  args: {
    legendPosition: "center",
  },
}

export const WithLegendSlider: Story = {
  args: {
    className: "max-w-md",
    data: chartdata,
    index: "date",
    categories: [
      "SolarCells",
      "Glass",
      "Encapsulant",
      "BackSheet",
      "Frame",
      "JunctionBox",
      "Adhesive",
    ],
    enableLegendSlider: true,
    onValueChange: (v) => console.log(v),
  },
}

export const ShiftColors: Story = {
  args: {
    colors: ["amber", "cyan"],
  },
}

export const WithStartEndOnly: Story = {
  args: {
    startEndOnly: true,
  },
}

export const WithNoAxis: Story = {
  args: {
    showXAxis: false,
    showYAxis: false,
  },
}

export const WithNoGridlines: Story = {
  args: {
    showGridLines: false,
  },
}

export const WithNoLegend: Story = {
  args: {
    showLegend: false,
  },
}

export const WithNoTooltip: Story = {
  args: {
    showTooltip: false,
  },
}

export const WithOnValueChange: Story = {
  args: {
    onValueChange: (v) => console.log(v),
  },
}

export const WithTooltipCallback: Story = {
  args: {
    tooltipCallback: (props) => console.log(JSON.stringify(props.payload)),
  },
}

export const WithLargeTickGap: Story = {
  args: {
    tickGap: 300,
  },
}

export const WithBarCategoryGap: Story = {
  args: {
    barCategoryGap: "30%",
  },
}

export const WithLayoutVertical: Story = {
  args: {
    categories: ["SolarCells"],
    layout: "vertical",
  },
}

export const WithTypePercent: Story = {
  args: {
    type: "percent",
  },
}
export const WithTypePercentVertical: Story = {
  args: {
    layout: "vertical",
    type: "percent",
  },
}

export const stacked: Story = {
  args: {
    type: "stacked",
  },
}

export const WithTypeStackedVertical: Story = {
  args: {
    layout: "vertical",
    type: "stacked",
  },
}

export const OneDataValue: Story = {
  args: {
    data: chartdata.slice(0, 1),
    index: "date",
    categories: ["SolarCells", "Glass"],
    onValueChange: (v) => console.log(v),
  },
}
