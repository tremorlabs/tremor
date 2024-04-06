import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DateRange } from "react-day-picker"

import { Button } from "../Button/Button"
import { Divider } from "../Divider/Divider"
import { Popover, PopoverContent, PopoverTrigger } from "../Popover/Popover"
import { DatePicker } from "./DatePicker"

const meta: Meta<typeof DatePicker> = {
  title: "ui/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  render: (args) => {
    return (
      <div className="w-[200px]">
        <DatePicker {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof DatePicker>

const presets = [
  {
    label: "Today",
    date: new Date(),
  },
  {
    label: "Tomorrow",
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
  },
  {
    label: "A week from now",
    date: new Date(new Date().setDate(new Date().getDate() + 7)),
  },
  {
    label: "A month from now",
    date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  },
  {
    label: "6 months from now",
    date: new Date(new Date().setMonth(new Date().getMonth() + 6)),
  },
  {
    label: "A year from now",
    date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  },
]

export const Single: Story = {
  args: {},
}

export const SingleWithPresets: Story = {
  args: {
    presets,
  },
}

const rangePresets = [
  {
    label: "Today",
    dateRange: {
      from: new Date(),
      to: new Date(),
    },
  },
  {
    label: "Last 7 days",
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() - 7)),
      to: new Date(),
    },
  },
  {
    label: "Last 30 days",
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() - 30)),
      to: new Date(),
    },
  },
  {
    label: "Last 3 months",
    dateRange: {
      from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
      to: new Date(),
    },
  },
  {
    label: "Last 6 months",
    dateRange: {
      from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
      to: new Date(),
    },
  },
  {
    label: "Month to date",
    dateRange: {
      from: new Date(new Date().setDate(1)),
      to: new Date(),
    },
  },
  {
    label: "Year to date",
    dateRange: {
      from: new Date(new Date().setFullYear(new Date().getFullYear(), 0, 1)),
      to: new Date(),
    },
  },
]

export const Range: Story = {
  args: {
    mode: "range",
  },
}

export const RangeWithPresets: Story = {
  args: {
    mode: "range",
    presets: rangePresets,
  },
}

const ControlledDemo = () => {
  const [value, setValue] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex w-[200px] flex-col gap-y-4">
      <DatePicker
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
      <Button onClick={() => setValue(undefined)}>Reset</Button>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
}

const ControlledRangeDemo = () => {
  const [value, setValue] = React.useState<DateRange | undefined>(undefined)

  React.useEffect(() => {
    console.log("Value changed: ", value)
  }, [value])

  return (
    <div className="flex w-[200px] flex-col gap-y-4">
      <DatePicker
        mode="range"
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
      <Button onClick={() => setValue(undefined)}>Reset</Button>
    </div>
  )
}

export const ControlledRange: Story = {
  render: () => <ControlledRangeDemo />,
}

type NestedProps = {
  value?: Date
  onChange?: (value: Date | undefined) => void
}
const Nested = ({ value, onChange }: NestedProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-3 py-2">
          <DatePicker value={value} onChange={onChange} />
        </div>
        <Divider />
        <div className="px-3 py-2">
          <DatePicker value={value} onChange={onChange} />
        </div>
        <Divider />
        <div className="flex items-center justify-between gap-x-2 px-3 py-2 [&_button]:w-full">
          <Button variant="secondary">Clear</Button>
          <Button>Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const NestedDemo = () => {
  const [value, setValue] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex w-[200px] flex-col gap-y-4">
      <Nested value={value} onChange={setValue} />
    </div>
  )
}

export const NestedControlled: Story = {
  render: () => <NestedDemo />,
}
