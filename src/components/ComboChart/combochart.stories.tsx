import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../Label/Label"
import { Switch } from "../Switch/Switch"
import { ComboChart, TooltipProps } from "./ComboChart"

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
    Small: 50,
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
    Small: 51,
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
    Small: 55,
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
    Small: 30,
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
    Small: 60,
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
    Small: 50,
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
    Small: 57,
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
    Small: 55,
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
    Small: 14,
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
    Small: 21,
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
    Small: 29,
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
    Small: 40,
  },
]

const meta: Meta<typeof ComboChart> = {
  title: "visualization/ComboChart",
  component: ComboChart,
  args: {
    data: chartdata,
    index: "date",
  },
}

export default meta
type Story = StoryObj<typeof ComboChart>

export const Default: Story = {
  render: () => (
    <ComboChart
      data-testid="combo-chart"
      data={chartdata}
      index="date"
      barSeries={{
        categories: [{ category: "SolarCells", name: "Solar Cells" }],
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        colors: ["amber"],
      }}
    />
  ),
}

export const Biaxial: Story = {
  render: () => (
    <ComboChart
      data-testid="combo-chart-biaxial"
      data={chartdata}
      index="date"
      enableBiaxial={true}
      barSeries={{
        categories: [{ category: "SolarCells" }],
        yAxisLabel: "BarSeries",
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        showYAxis: true,
        yAxisLabel: "LineSeries",
        colors: ["amber"],
        yAxisWidth: 70,
      }}
    />
  ),
}

export const BiaxialDoubleBars: Story = {
  render: () => (
    <ComboChart
      data-testid="combo-chart-biaxial"
      data={chartdata}
      index="date"
      enableBiaxial={true}
      barSeries={{
        categories: [
          { category: "SolarCells", name: "Solar Cells" },
          { category: "Encapsulant" },
        ],
        yAxisLabel: "BarSeries",
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        showYAxis: true,
        yAxisLabel: "LineSeries",
        colors: ["amber"],
        yAxisWidth: 70,
      }}
    />
  ),
}

export const BiaxialDoubleBarsStacked: Story = {
  render: () => (
    <ComboChart
      data={chartdata}
      index="date"
      enableBiaxial={true}
      barSeries={{
        categories: [
          { category: "SolarCells", name: "Solar Cells" },
          { category: "Encapsulant" },
        ],
        yAxisLabel: "BarSeries",
        type: "stacked",
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        showYAxis: true,
        yAxisLabel: "LineSeries",
        colors: ["amber"],
        yAxisWidth: 70,
      }}
    />
  ),
}

export const DoubleBars: Story = {
  render: () => (
    <ComboChart
      data={chartdata}
      index="date"
      barSeries={{
        categories: [
          { category: "SolarCells", name: "Solar Cells" },
          { category: "Encapsulant" },
        ],
        yAxisLabel: "BarSeries",
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        showYAxis: true,
        yAxisLabel: "LineSeries",
        colors: ["amber"],
        yAxisWidth: 70,
      }}
    />
  ),
}

export const DoubleBarsStacked: Story = {
  render: () => (
    <ComboChart
      data={chartdata}
      index="date"
      barSeries={{
        categories: [
          { category: "SolarCells", name: "Solar Cells" },
          { category: "Encapsulant" },
        ],
        yAxisLabel: "BarSeries",
        type: "stacked",
      }}
      lineSeries={{
        categories: [{ category: "Frame" }],
        showYAxis: true,
        yAxisLabel: "LineSeries",
        colors: ["amber"],
        yAxisWidth: 70,
      }}
    />
  ),
}

export const DefaultNegative: Story = {
  args: {
    barSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    lineSeries: {
      categories: [{ category: "SolarCells" }, { category: "Adhesive" }],
    },
  },
}

export const WithValueFormatterBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Adhesive" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
    },
  },
}

export const WithAxisLabelsBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Adhesive" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
      yAxisLabel: "BarSeries",
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
      yAxisLabel: "BarSeries",
    },
  },
}

export const WithAutoMinValueBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
      autoMinValue: true,
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      autoMinValue: true,
    },
  },
}

export const WithMinAndMaxValueBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
      minValue: 800,
      maxValue: 5000,
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      minValue: 2500,
      maxValue: 3500,
    },
  },
}

export const AllColorsBarsBiaxial: Story = {
  args: {
    barSeries: {
      categories: [
        { category: "SolarCells" },
        { category: "Glass" },
        { category: "Encapsulant" },
        { category: "BackSheet" },
        { category: "Frame" },
        { category: "JunctionBox" },
        { category: "Adhesive" },
      ],
    },
  },
}

export const AllColorsLinesBiaxial: Story = {
  args: {
    lineSeries: {
      categories: [
        { category: "SolarCells" },
        { category: "Glass" },
        { category: "Encapsulant" },
        { category: "BackSheet" },
        { category: "Frame" },
        { category: "JunctionBox" },
        { category: "Adhesive" },
      ],
    },
  },
}

export const WithLegendLeftBiaxial: Story = {
  args: {
    barSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    lineSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    enableBiaxial: true,
    legendPosition: "left",
  },
}

export const WithLegendCenterBiaxial: Story = {
  args: {
    barSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    lineSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    enableBiaxial: true,
    legendPosition: "center",
  },
}

export const WithLegendSliderBiaxial: Story = {
  args: {
    className: "max-w-md",
    barSeries: {
      categories: [
        { category: "SolarCells" },
        { category: "Glass" },
        { category: "Encapsulant" },
        { category: "BackSheet" },
        { category: "Frame" },
        { category: "JunctionBox" },
        { category: "Adhesive" },
      ],
    },
    lineSeries: {
      categories: [{ category: "Adhesive" }, { category: "SolarCells" }],
    },
    enableLegendSlider: true,
    onValueChange: (v) => console.log(v),
  },
}

export const WithConnectNullsFalseBiaxial: Story = {
  args: {
    data: chartdata.map((item, index) => ({
      date: item.date,
      Adhesive: item.Adhesive,
      SolarCells: index > 5 && index < 8 ? null : item.SolarCells,
    })),
    barSeries: {
      categories: [{ category: "Adhesive" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      connectNulls: false,
    },
  },
}

export const WithStartEndOnlyBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
    },
    startEndOnly: true,
  },
}

export const WithoutYAxisBiaxial: Story = {
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
      showYAxis: false,
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      showYAxis: false,
    },
  },
}

export const WithNoGridlinesBiaxial: Story = {
  args: {
    showGridLines: false,
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
    },
  },
}

export const WithNoLegendBiaxial: Story = {
  args: {
    showLegend: false,
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
    },
  },
}

export const WithNoTooltipBiaxial: Story = {
  args: {
    showTooltip: false,
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
    },
  },
}

export const WithOnValueChangeBiaxial: Story = {
  args: {
    onValueChange: (v) => console.log(v),
    enableBiaxial: true,
    barSeries: {
      categories: [{ category: "Glass" }],
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
    },
  },
}

export const CustomTooltip: Story = {
  args: {
    enableBiaxial: true,

    customTooltip: (props: TooltipProps) => {
      const { payload, active, label } = props
      if (!active || !payload || payload.length === 0) return null

      const data = payload[0].payload

      const categoriesToShow = ["Adhesive", "SolarCells"]

      return (
        <div className="w-56 rounded-md border bg-white p-3 text-sm shadow-sm">
          <p className="mb-2 font-medium text-gray-900">{label}</p>
          <div className="flex flex-col space-y-2">
            {categoriesToShow.map((category) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-5 w-1 rounded-full ${
                      category === "Adhesive" ? "bg-blue-500" : "bg-amber-500"
                    }`}
                  />
                  <p className="text-gray-700">{category}</p>
                </div>
                <p className="font-medium text-gray-900">{data[category]}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    barSeries: {
      categories: [{ category: "Adhesive" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
    },
    lineSeries: {
      colors: ["amber"],
      categories: [{ category: "SolarCells" }],
      valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
    },
  },
}

export const WithTooltipCallback: Story = {
  render: () => {
    const [callback, setCallBack] = React.useState<TooltipProps | null>(null)
    const [checked, setChecked] = React.useState(true)
    return (
      <>
        <div className="flex items-center gap-3">
          <Label htmlFor="a">showTooltip</Label>
          <Switch id="a" checked={checked} onCheckedChange={setChecked} />
        </div>

        <ComboChart
          data={chartdata}
          index="date"
          barSeries={{
            categories: [{ category: "Adhesive" }],
            valueFormatter: (v) =>
              `$${Intl.NumberFormat("us").format(v).toString()}`,
          }}
          lineSeries={{
            colors: ["amber"],
            categories: [{ category: "SolarCells" }],
            valueFormatter: (v) =>
              `$${Intl.NumberFormat("us").format(v).toString()}`,
          }}
          tooltipCallback={(cooltipContent) => setCallBack(cooltipContent)}
          showTooltip={checked}
        />
        <pre className="text-xs">{JSON.stringify(callback, null, 2)}</pre>
      </>
    )
  },
}
