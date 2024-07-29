import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button.tsx"
import { Label } from "../Label/Label.tsx"
import { Checkbox } from "./Checkbox.tsx"

const meta: Meta<typeof Checkbox> = {
  title: "ui/Checkbox",
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    checked: "indeterminate",
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={true} /> <Label disabled>Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={false} /> <Label disabled>Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked="indeterminate" />
        <Label disabled>Indeterminate</Label>
      </div>
    </div>
  ),
  args: {
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true)

    return (
      <div className="flex flex-col items-center gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <Button variant="secondary" onClick={() => setChecked(!checked)}>
          Set {checked ? "Unchecked" : "Checked"}
        </Button>
      </div>
    )
  },
}
