import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import {
  RadioCardGroup,
  RadioCardGroupIndicator,
  RadioCardItem,
} from "./RadioCard"

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
            <RadioCardGroupIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
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
            <RadioCardGroupIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Hardware Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="4">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Security</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="5">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Marketing Ops</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="6">
          <div className="flex items-center gap-3">
            <RadioCardGroupIndicator />
            <span>Product Manager</span>
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}
