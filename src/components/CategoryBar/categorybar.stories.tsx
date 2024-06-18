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
    values: [60, 10, 20, 10],
  },
}

export const WithMarker: Story = {
  args: {
    values: [60, 10, 15, 15],
    markerValue: 70,
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
    markerValue: 0,
    tooltip: "0%",
  },
}

export const WithSmallStartValue: Story = {
  args: {
    values: [10, 25, 45, 20],
    colors: ["amber", "gray", "pink", "cyan"],
    markerValue: 50,
    tooltip: "50%",
  },
}

export const WithCloseEndValue: Story = {
  args: {
    values: [10, 25, 50, 15],
    markerValue: 50,
    tooltip: "90%",
  },
}

export const WithValuesMoreThan100: Story = {
  args: {
    values: [400, 400, 800],
    markerValue: 1400,
    tooltip: "90%",
  },
}

export const WithValuesLessThan100: Story = {
  args: {
    values: [8, 7, 9, 8],
    markerValue: 20,
    tooltip: "90%",
  },
}

export const WithConsecutiveSmallValues: Story = {
  args: {
    values: [10, 5, 5, 5, 5, 5, 50, 15, 0],
    markerValue: 50,
    tooltip: "90%",
  },
}

export const WithNoLabelsInbetween: Story = {
  args: {
    values: [5, 95],
    markerValue: 50,
    tooltip: "90%",
  },
}

export const WithNoLabels: Story = {
  args: {
    values: [5, 95],
    markerValue: 50,
    tooltip: "90%",
    showLabels: false,
  },
}
