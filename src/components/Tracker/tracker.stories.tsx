import type { Meta, StoryObj } from "@storybook/react"

import { Tracker, TrackerBlockProps } from "./Tracker"

const data: TrackerBlockProps[] = [
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-red-600", tooltip: "Error" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-red-600", tooltip: "Error" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-yellow-600", tooltip: "Warn" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-yellow-600", tooltip: "Warn" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-red-600", tooltip: "Error" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
  { color: "bg-emerald-600", tooltip: "Tracker Info" },
]

const meta: Meta<typeof Tracker> = {
  title: "visualization/Tracker",
  component: Tracker,
  args: {
    data: data,
  },
  render: (args) => (
    <Tracker className="w-full" {...args} data-testid="tracker" />
  ),
}

export default meta
type Story = StoryObj<typeof Tracker>

export const Default: Story = {}

export const Breakpoints: Story = {
  render: () => (
    <>
      <Tracker className="hidden w-full lg:flex" data={data} />
      <Tracker
        className="hidden w-full md:flex lg:hidden"
        data={data.slice(0, 60)}
      />
      <Tracker className="flex w-full sm:hidden" data={data.slice(0, 30)} />
    </>
  ),
}
