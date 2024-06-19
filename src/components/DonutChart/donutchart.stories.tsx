import type { Meta, StoryObj } from "@storybook/react"

import { DonutChart } from "./DonutChart"

const chartdata = [
  {
    category: "SolarCells",
    value: 4890,
  },
  {
    category: "Glass",
    value: 2103,
  },
  {
    category: "JunctionBox",
    value: 2050,
  },
  {
    category: "Adhesive",
    value: 1300,
  },
  {
    category: "BackSheet",
    value: 1100,
  },
  {
    category: "Frame",
    value: 700,
  },
  {
    category: "Encapsulant",
    value: 200,
  },
]

const meta: Meta<typeof DonutChart> = {
  title: "visualization/DonutChart",
  component: DonutChart,
  args: { value: "value", category: "category", data: chartdata },
}

export default meta
type Story = StoryObj<typeof DonutChart>

export const Default: Story = {}

export const ValueFormatter: Story = {
  args: { valueFormatter: (v) => `${v} units` },
}

export const CustomLabel: Story = {
  args: { label: "Custom Label" },
}

export const LabelDisabled: Story = {
  args: {
    label: "Custom Label",
    showLabel: false,
  },
}

export const OtherColors: Story = {
  args: { colors: ["blue", "amber", "pink", "emerald", "violet", "cyan"] },
}

export const MoreDatapointsThanColors: Story = {
  args: {
    data: [
      // extra long data array
      ...chartdata,
      ...chartdata,
    ],
  },
}

export const LongValues: Story = {
  args: {
    data: chartdata.map((dataPoint) => ({
      ...dataPoint,
      value: dataPoint.value * 10000000,
    })),
  },
}

export const VariantPie: Story = {
  args: { variant: "pie" },
}

export const OnValueChangeExample: Story = {
  args: { onValueChange: (value) => alert(JSON.stringify(value)) },
}

export const OnValueChangePieExample: Story = {
  args: {
    variant: "pie",
    onValueChange: (value) => alert(JSON.stringify(value)),
  },
}
