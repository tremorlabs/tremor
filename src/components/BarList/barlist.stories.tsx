import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { BarList } from "./BarList"

const meta: Meta<typeof BarList> = {
  title: "visualization/BarList",
  component: BarList,
  render: (args) => <BarList data-testid="barlist" {...args} />,
}

export default meta
type Story = StoryObj<typeof BarList>

const data = [
  { name: "/home", value: 843 },
  { name: "/imprint", value: 46 },
  { name: "/cancellation", value: 3 },
  { name: "/blocks", value: 108 },
  { name: "/documentation", value: 384 },
]

const dataSame = [
  { name: "/home", value: 100 },
  { name: "/imprint", value: 100 },
  { name: "/cancellation", value: 100 },
  { name: "/blocks", value: 100 },
  { name: "/documentation", value: 100 },
]

const dataHref = [
  { name: "/home", value: 843, href: "https://tremor.so" },
  { name: "/imprint", value: 46, href: "https://tremor.so" },
  { name: "/cancellation", value: 3, href: "https://tremor.so" },
  { name: "/blocks", value: 108, href: "https://tremor.so" },
  { name: "/documentation", value: 384, href: "https://tremor.so" },
]

export const Default: Story = {
  args: {
    data: data,
  },
}

export const WithHrefAndValueFormatter: Story = {
  args: {
    data: dataHref,
    valueFormatter: (value) => `${value} Visitors`,
  },
}

export const WithSortOrderAscending: Story = {
  args: {
    data: data,
    sortOrder: "ascending",
  },
}

export const WithOnValueChange: Story = {
  args: {
    data: data,
  },
  render: (args) => {
    const [selectedItem, setSelectedItem] = React.useState("")
    return (
      <div className="relative flex flex-col gap-3">
        <BarList
          data-testid="barlist-onvaluechange"
          onValueChange={(item) =>
            setSelectedItem(JSON.stringify(item, null, 2))
          }
          {...args}
        />
        <pre className="w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700">
          {selectedItem === "" ? "Click on a bar" : selectedItem}
        </pre>
      </div>
    )
  },
}

export const WithOnValueChangeAndHref: Story = {
  args: {
    data: dataHref,
  },
  render: (args) => {
    const [selectedItem, setSelectedItem] = React.useState("")
    return (
      <div className="relative flex flex-col gap-3">
        <BarList
          data-testid="barlist-onvaluechangehref"
          onValueChange={(item) =>
            setSelectedItem(JSON.stringify(item, null, 2))
          }
          {...args}
        />
        <pre className="w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700">
          {selectedItem === "" ? "Click on a bar" : selectedItem}
        </pre>
      </div>
    )
  },
}

export const DataSameWithOnValueChange: Story = {
  args: {
    onValueChange: () => {},
    data: dataSame,
  },
}

export const DataSame: Story = {
  args: {
    data: dataSame,
  },
}
