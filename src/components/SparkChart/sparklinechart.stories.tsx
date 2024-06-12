import type { Meta, StoryObj } from "@storybook/react"

import { SparkLineChart } from "./SparkChart"

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

const meta: Meta<typeof SparkLineChart> = {
  title: "visualization/SparkLineChart",
  component: SparkLineChart,
  args: { data: chartdata, index: "date", categories: ["SolarCells", "Glass"] },
}

export default meta
type Story = StoryObj<typeof SparkLineChart>

export const Default: Story = {
  render: () => (
    <SparkLineChart
      data-testid="spark-line-chart"
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

export const ShiftColors: Story = {
  args: {
    colors: ["amber", "cyan"],
  },
}

export const WithConnectNullsFalse: Story = {
  args: {
    data: chartdata.map(
      (
        item,
        index,
      ): {
        date: string
        Glass: number | null
      } => {
        let glassValue: number | null = item.Glass
        if (index > 5 && index < 8) {
          glassValue = null
        }
        return {
          date: item.date,
          Glass: glassValue,
        }
      },
    ),
    index: "date",
    categories: ["SolarCells", "Glass"],
    colors: ["amber", "cyan"],
    connectNulls: false,
  },
}

export const WithTypePercent: Story = {
  render: () => (
    <SparkLineChart
      data={chartdata}
      index="date"
      categories={["SolarCells", "Glass"]}
      type="percent"
    />
  ),
}

export const WithTypeStacked: Story = {
  render: () => (
    <SparkLineChart
      data={chartdata}
      index="date"
      categories={["SolarCells", "Glass"]}
      type="stacked"
    />
  ),
}
