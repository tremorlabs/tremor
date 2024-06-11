import type { Meta, StoryObj } from "@storybook/react"

import { RadioCardGroup, RadioCardIndicator, RadioCardItem } from "./RadioCard"

const meta: Meta<typeof RadioCardGroup> = {
  title: "ui/RadioCardGroup",
  component: RadioCardGroup,
}

export default meta
type Story = StoryObj<typeof RadioCardGroup>

export const Default: Story = {
  render: () => {
    return (
      <RadioCardGroup>
        <RadioCardItem value="1">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Hardware Engineer</span>
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}

export const Grid: Story = {
  render: () => {
    return (
      <RadioCardGroup className="grid-cols-2">
        <RadioCardItem value="1">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Hardware Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="4">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Security</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="5">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Marketing Ops</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="6">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Product Manager</span>
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}
