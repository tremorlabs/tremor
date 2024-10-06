import type { Meta, StoryObj } from "@storybook/react"

import { CategoryBar } from "./CategoryBar"

const meta: Meta<typeof CategoryBar> = {
  title: "visualization/CategoryBar",
  render: (args) => <CategoryBar {...args} data-testid="CategoryBar" />,
  component: CategoryBar,
}

export default meta
type Story = StoryObj<typeof CategoryBar>

export const Default: Story = {
  args: {
    values: [70, 18, 11],
  },
}

export const WithFloatingPoints: Story = {
  args: {
    values: [70.1, 18.3, 11.6],
  },
}

export const WithMarker: Story = {
  args: {
    values: [60, 10, 15, 15],
    marker: { value: 65, tooltip: "65" },
    showLabels: true,
  },
}

export const WithColors: Story = {
  args: {
    values: [60, 25, 15],
    colors: ["pink", "amber", "emerald"],
  },
}

export const WithMarkerOnLabel: Story = {
  args: {
    values: [0, 50, 50],
    marker: { value: 0, tooltip: "0" },
    showLabels: true,
  },
}

export const WithSmallStartValue: Story = {
  args: {
    values: [10, 25, 45, 20],
    colors: ["amber", "gray", "pink", "cyan"],
    marker: { value: 50, tooltip: "50%" },
    showLabels: true,
  },
}

export const WithCloseEndValue: Story = {
  args: {
    values: [10, 25, 50, 15],
    marker: { value: 50, tooltip: "50%" },
    showLabels: true,
  },
}

export const WithValuesMoreThan100: Story = {
  args: {
    values: [400, 400, 800],
    marker: { value: 1400, tooltip: "50%" },
    showLabels: true,
  },
}

export const WithValuesLessThan100: Story = {
  args: {
    values: [8, 7, 9, 8],
    marker: { value: 20, tooltip: "20%" },
    showLabels: true,
  },
}

export const WithConsecutiveSmallValues: Story = {
  args: {
    values: [10, 5, 5, 5, 5, 5, 50, 15, 0],
    marker: { value: 50, tooltip: "50%" },
    showLabels: true,
  },
}

export const WithNoLabelsInbetween: Story = {
  args: {
    values: [5, 95],
    marker: { value: 50, tooltip: "50%" },
    showLabels: true,
  },
}

export const WithZero: Story = {
  args: {
    values: [0, 100],
  },
}
