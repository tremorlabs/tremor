import type { Meta, StoryObj } from "@storybook/react"

import { Card } from "../Card/Card"
import { ProgressCircle } from "./ProgressCircle"

const meta: Meta<typeof ProgressCircle> = {
  title: "visualization/ProgressCircle",
  component: ProgressCircle,
  render: (args) => <ProgressCircle {...args} data-testid="progresscircle" />,
}

export default meta
type Story = StoryObj<typeof ProgressCircle>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: 69,
  },
}

export const Value120: Story = {
  args: {
    value: 120,
  },
}

export const WithMax50: Story = {
  args: {
    value: 40,
    max: 50,
  },
}

export const WithChildren: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-x-5">
      <ProgressCircle data-testid="progresscircle" value={75}>
        <span className="text-sm font-medium text-gray-700">75%</span>
      </ProgressCircle>
      <div>
        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          $340/$450
        </p>
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Spend management control
        </p>
      </div>
    </div>
  ),
}
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <ProgressCircle value={72} radius={16} strokeWidth={4} />
      <ProgressCircle value={72} radius={25} strokeWidth={6} />
      <ProgressCircle value={72} radius={40} strokeWidth={10} />
      <ProgressCircle value={72} radius={45} strokeWidth={5} />
      <ProgressCircle value={72} radius={50} strokeWidth={8} />
    </div>
  ),
}

export const VariantsComposition: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="default" value={50} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Default
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="neutral" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Neutral
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="success" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Success
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="warning" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Warning
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="error" value={40} />
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
        <ProgressCircle value={54} max={100} />
      </div>
    </Card>
  ),
}
