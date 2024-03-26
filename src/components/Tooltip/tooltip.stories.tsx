import { RiInformation2Fill } from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Tooltip } from "./Tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "ui/Tooltip",
  component: Tooltip,
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Which KPIs are the most visited in your project">
      <p className="text-sm text-gray-500 dark:text-gray-500">Show tooltip</p>
    </Tooltip>
  ),
}

export const TooltipSides: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div className="flex flex-wrap justify-center gap-6">
      <Tooltip side="top" content="Tooltip">
        <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-700 dark:border dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
          Top
        </span>
      </Tooltip>
      <Tooltip side="right" content="Tooltip">
        <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-700 dark:border dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
          Right
        </span>
      </Tooltip>
      <Tooltip side="bottom" content="Tooltip">
        <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-700 dark:border dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
          Bottom
        </span>
      </Tooltip>
      <Tooltip side="left" content="Tooltip">
        <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-700 dark:border dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
          Left
        </span>
      </Tooltip>
    </div>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip
      content="Which KPIs are the most visited in your project"
      showArrow={false}
    >
      <p className="text-sm text-gray-500 dark:text-gray-500">Show tooltip</p>
    </Tooltip>
  ),
}

export const Icon: Story = {
  render: () => (
    <Tooltip side="top" content="The quick brown fox jumps over the lazy dog.">
      <RiInformation2Fill className="h-5 w-5 text-gray-500 dark:text-gray-500" />
    </Tooltip>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Tooltip
      side="left"
      defaultOpen
      content="The quick brown fox jumps over the lazy dog."
    >
      <RiInformation2Fill className="h-5 w-5 text-gray-500" />
    </Tooltip>
  ),
}

export const WrappedAroundButton: Story = {
  render: () => (
    <>
      <Tooltip content="Once you submitted this request, there is no way back.">
        <Button variant="secondary">Submit request</Button>
      </Tooltip>
      <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-500">
        You can hover over the button to see a tooltip, while it still functions
        as a button.
      </p>
    </>
  ),
}
