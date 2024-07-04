import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../Label/Label"
import { Switch } from "../Switch/Switch"
import { DonutChart, TooltipProps } from "./DonutChart"

const chartdata = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
]

const meta: Meta<typeof DonutChart> = {
  title: "visualization/DonutChart",
  component: DonutChart,
  args: { value: "value", category: "category", data: chartdata },
}

export default meta
type Story = StoryObj<typeof DonutChart>

export const Default: Story = {
  render: () => (
    <DonutChart
      data-testid="donut-chart"
      value="amount"
      category="name"
      data={chartdata}
    />
  ),
}

export const ValueFormatter: Story = {
  args: { showLabel: true, valueFormatter: (v) => `${v} units` },
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
      value: dataPoint.amount * 10000000,
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

        <DonutChart
          data={chartdata}
          value="value"
          category="category"
          tooltipCallback={(tooltipContent) => setCallBack(tooltipContent)}
          showTooltip={checked}
        />
        <pre>{JSON.stringify(callback, null, 2)}</pre>
      </>
    )
  },
}

export const CustomTooltip: Story = {
  args: {
    category: "category",
    value: "value",
    customTooltip: (props: TooltipProps) => {
      const { payload, active } = props
      if (!active || !payload || payload.length === 0) return null
      return (
        <div className="w-fit rounded-md border bg-white p-2 text-sm shadow-sm">
          <div className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1.5 flex-col bg-${payload[0].color}-500 rounded`}
            />
            <div className="w-full">
              <div className="flex items-center justify-between space-x-2">
                <p className="whitespace-nowrap text-right text-gray-700">
                  {payload[0].category}
                </p>
                <p className="whitespace-nowrap text-right font-medium text-gray-900">
                  {payload[0].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
}
