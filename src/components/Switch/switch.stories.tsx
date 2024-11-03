import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { Divider } from "../Divider/Divider"
import { Label } from "../Label/Label"
import { Switch } from "./Switch"

const meta: Meta<typeof Switch> = {
  title: "ui/Switch",
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SimpleIdSwitch = (args: any) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  return (
    <div className="space-y-4">
      <Card className="w-96">
        <form
          onSubmit={(event) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            event.preventDefault(), alert("Submitted")
          }}
          onReset={() => setChecked(false)}
        >
          <div className="flex items-center gap-3">
            <Label htmlFor="a">Click the Label</Label>
            <Switch
              id="a"
              checked={checked}
              onCheckedChange={setChecked}
              {...args}
            />
          </div>
          <Divider />
          <div className="flex gap-4">
            <Button type="submit" className="mt-2 w-fit">
              Submit
            </Button>

            <Button type="reset" variant="secondary" className="mt-2 w-fit">
              Reset Input
            </Button>
          </div>
        </form>
      </Card>

      <p className="text-sm text-gray-500">
        Switch is:
        <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
          {checked ? "On" : "Off"}
        </span>
      </p>
    </div>
  )
}

export const Default: Story = {}

export const SizeDefault: Story = {
  args: { size: "default" },
}

export const SizeSmall: Story = {
  args: { size: "small" },
}

export const DefaultChecked: Story = {
  render: () => (
    <>
      <Switch id="label" defaultChecked />
    </>
  ),
}

export const Disabled: Story = {
  render: () => (
    <>
      <Switch id="label" disabled />
    </>
  ),
}

export const CheckedDisabled: Story = {
  render: () => (
    <>
      <Switch id="label" defaultChecked disabled />
    </>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <>
      <div className="flex items-center space-x-4">
        <Label htmlFor="r1">Click this Label check the Switch</Label>
        <Switch id="r1" />
      </div>
    </>
  ),
  args: { size: "small" },
}

export const ControlledForm: Story = {
  render: SimpleIdSwitch,
  args: {
    required: true,
  },
}
