import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import LineChart from "./LineChart"

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
    "Tech Crunch": 1450,
    "Venture Beat": 1900,
    Wired: 1600,
    "Ars Technica": 1800,
    Gizmodo: 1700,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
    "Tech Crunch": 1200,
    "Venture Beat": 1850,
    Wired: 1700,
    "Ars Technica": 1750,
    Gizmodo: 1650,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
    "Tech Crunch": 1300,
    "Venture Beat": 2200,
    Wired: 1400,
    "Ars Technica": 2000,
    Gizmodo: 1800,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
    "Tech Crunch": 1400,
    "Venture Beat": 1600,
    Wired: 1800,
    "Ars Technica": 1900,
    Gizmodo: 1950,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
    "Tech Crunch": 1550,
    "Venture Beat": 2300,
    Wired: 1450,
    "Ars Technica": 2200,
    Gizmodo: 1600,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
    "Tech Crunch": 1350,
    "Venture Beat": 2100,
    Wired: 1750,
    "Ars Technica": 2050,
    Gizmodo: 1700,
  },
  {
    date: "Jul 22",
    SemiAnalysis: 3490,
    "The Pragmatic Engineer": 1982,
    "Tech Crunch": 1450,
    "Venture Beat": 1950,
    Wired: 1500,
    "Ars Technica": 2300,
    Gizmodo: 1800,
  },
  {
    date: "Aug 22",
    SemiAnalysis: 2903,
    "The Pragmatic Engineer": 2012,
    "Tech Crunch": 1250,
    "Venture Beat": 1700,
    Wired: 1850,
    "Ars Technica": 2150,
    Gizmodo: 1900,
  },
  {
    date: "Sep 22",
    SemiAnalysis: 2643,
    "The Pragmatic Engineer": 2342,
    "Tech Crunch": 1400,
    "Venture Beat": 1600,
    Wired: 1500,
    "Ars Technica": 2000,
    Gizmodo: 1750,
  },
  {
    date: "Oct 22",
    SemiAnalysis: 2837,
    "The Pragmatic Engineer": 2473,
    "Tech Crunch": 1350,
    "Venture Beat": 1850,
    Wired: 1900,
    "Ars Technica": 2100,
    Gizmodo: 1600,
  },
  {
    date: "Nov 22",
    SemiAnalysis: 2954,
    "The Pragmatic Engineer": 3848,
    "Tech Crunch": 1200,
    "Venture Beat": 2000,
    Wired: 1750,
    "Ars Technica": 2400,
    Gizmodo: 1950,
  },
  {
    date: "Dec 22",
    SemiAnalysis: 3239,
    "The Pragmatic Engineer": 3736,
    "Tech Crunch": 1550,
    "Venture Beat": 1700,
    Wired: 1600,
    "Ars Technica": 2250,
    Gizmodo: 1800,
  },
]

const dataFormatter = (number: any) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const meta: Meta<typeof LineChart> = {
  title: "ui/LineChart",
  component: LineChart,
}

export default meta
type Story = StoryObj<typeof LineChart>

export const Default: Story = {
  render: () => (
    <LineChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={[
        "SemiAnalysis",
        "The Pragmatic Engineer",
        "Tech Crunch",
        "Venture Beat",
        "Wired",
        "Ars Technica",
        "Gizmodo",
      ]}
      valueFormatter={dataFormatter}
      onValueChange={(v) => console.log(v)}
      enableLegendSlider
      xAxisLabel="Month of Year"
      yAxisLabel="Revenue"
    />
  ),
}
