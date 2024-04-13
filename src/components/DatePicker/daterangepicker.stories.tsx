import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { fr } from "date-fns/locale"

import { Button } from "../Button/Button"
import { DateRange, DateRangePicker } from "./DatePicker"

const meta: Meta<typeof DateRangePicker> = {
  title: "ui/DateRangePicker",
  component: DateRangePicker,
  render: (args) => {
    return (
      <div className="w-60">
        <DateRangePicker {...args} />
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof DateRangePicker>

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
  args: {},
}

export const WithYearNavigation: Story = {
  args: {
    enableYearNavigation: true,
  },
}

export const showTimePicker: Story = {
  args: { showTimePicker: true },
}

export const RangeWithPresets: Story = {
  args: {
    presets: rangePresets,
  },
}

export const Localized: Story = {
  args: {
    placeholder: "Choisissez une date",
    locale: fr,
    translations: {
      cancel: "Annuler",
      apply: "Applicer",
      range: "Intervalle de dates",
    },
    presets: [
      {
        label: "Aujourd'hui",
        dateRange: {
          from: new Date(),
          to: new Date(),
        },
      },
      {
        label: "7 derniers jours",
        dateRange: {
          from: new Date(new Date().setDate(new Date().getDate() - 7)),
          to: new Date(),
        },
      },
      {
        label: "30 derniers jours",
        dateRange: {
          from: new Date(new Date().setDate(new Date().getDate() - 30)),
          to: new Date(),
        },
      },
      {
        label: "3 derniers mois",
        dateRange: {
          from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
          to: new Date(),
        },
      },
      {
        label: "6 derniers mois",
        dateRange: {
          from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
          to: new Date(),
        },
      },
      {
        label: "Mois en cours",
        dateRange: {
          from: new Date(new Date().setDate(1)),
          to: new Date(),
        },
      },
      {
        label: "Année en cours",
        dateRange: {
          from: new Date(
            new Date().setFullYear(new Date().getFullYear(), 0, 1),
          ),
          to: new Date(),
        },
      },
    ],
  },
}

export const AlignEnd: Story = {
  args: { align: "end" },
  parameters: {
    layout: "centered",
  },
}

const ControlledRangeDemo = () => {
  const [value, setValue] = React.useState<DateRange | undefined>(undefined)

  React.useEffect(() => {
    console.log("Value changed: ", value)
  }, [value])

  return (
    <div className="flex w-40 flex-col gap-y-4">
      <DateRangePicker
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
