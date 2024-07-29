import type { Meta, StoryObj } from "@storybook/react"

import { Card } from "../Card/Card.tsx"
import { ProgressBar } from "./ProgressBar.tsx"

const meta: Meta<typeof ProgressBar> = {
  title: "visualization/ProgressBar",
  render: (args) => (
    <ProgressBar {...args} className="w-96" data-testid="progressbar" />
  ),
  component: ProgressBar,
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 62,
    label: "62%",
  },
}

export const Value0: Story = {
  args: {
    value: 0,
  },
}

export const Value120: Story = {
  args: {
    value: 120,
  },
}

export const Max: Story = {
  args: {
    value: 40,
    max: 50,
  },
}

export const VariantsComposition: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="default" value={50} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Default
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="neutral" value={40} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Neutral
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="success" value={50} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Success
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="warning" value={20} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Warning
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="error" value={10} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Error
        </span>
      </div>
    </div>
  ),
}

export const WithKPICard: Story = {
  render: () => (
    <Card className="w-96">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
        Sales Progress
      </p>
      <div className="mt-2 flex items-center space-x-2">
        <span className="whitespace-nowrap text-sm text-gray-500">
          Goal 2023
        </span>
        <ProgressBar value={54} max={100} label="54%" />
      </div>
    </Card>
  ),
}
