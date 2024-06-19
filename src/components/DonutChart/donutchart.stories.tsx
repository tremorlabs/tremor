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
  args: { category: "value", index: "category", data: chartdata },
}

export default meta
type Story = StoryObj<typeof DonutChart>

export const Default: Story = {}
