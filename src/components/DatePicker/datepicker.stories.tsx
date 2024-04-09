import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { fr } from "date-fns/locale"

import { Button } from "../Button/Button"
import { Divider } from "../Divider/Divider"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../Popover/Popover"
import { DatePicker } from "./DatePicker"

const meta: Meta<typeof DatePicker> = {
  title: "ui/DatePicker",
  component: DatePicker,
  render: (args) => {
    return (
      <div className="w-60">
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

export const WithYearNavigation: Story = {
  args: {
    enableYearNavigation: true,
  },
}

export const SingleWithPresets: Story = {
  args: {
    presets,
  },
}

export const Localized: Story = {
  args: {
    placeholder: "Choisissez une date",
    locale: fr,
    translations: { cancel: "Annuler", apply: "Applicer" },
    presets: [
      {
        label: "Aujourd'hui",
        date: new Date(),
      },
      {
        label: "Demain",
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        label: "Dans une semaine",
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
      },
      {
        label: "Dans un mois",
        date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      },
      {
        label: "Dans un an",
        date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      },
      {
        label: "Hier",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
      {
        label: "La semaine dernière",
        date: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
      {
        label: "Le mois dernier",
        date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      },
      {
        label: "L'année dernière",
        date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      },
    ],
  },
}

const ControlledDemo = () => {
  const [value, setValue] = React.useState<Date | undefined>(undefined)

  return (
    <>
      <p className="mb-6 text-gray-500">
        {value ? value.toDateString() : "Select a date"}
      </p>
      <div className="flex w-80 gap-2">
        <DatePicker
          value={value}
          onChange={(value) => {
            setValue(value)
          }}
        />
        <Button variant="destructive" onClick={() => setValue(undefined)}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => setValue(new Date())}>
          Today
        </Button>
      </div>
    </>
  )
}

export const Controlled: Story = {
  render: () => <ControlledDemo />,
}

type PopoverNestedProps = {
  value?: Date
  onChange?: (value: Date | undefined) => void
}
const PopoverNested = ({ value, onChange }: PopoverNestedProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <DatePicker value={value} onChange={onChange} />
        <Divider />
        <div className="flex items-center justify-between gap-x-2 px-3 py-2 [&_button]:w-full">
          <PopoverClose asChild>
            <Button variant="secondary">Clear</Button>
          </PopoverClose>
          <PopoverClose asChild>
            <Button>Apply</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const PopoverNestedDemo = () => {
  const [value, setValue] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex w-40 flex-col gap-y-4">
      <PopoverNested value={value} onChange={setValue} />
    </div>
  )
}

export const PopoverNestedControlled: Story = {
  render: () => <PopoverNestedDemo />,
}
