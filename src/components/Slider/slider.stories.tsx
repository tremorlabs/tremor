import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { Divider } from "../Divider/Divider"
import { Label } from "../Label/Label"
import { Slider } from "./Slider"
import { Slider2 } from "./Slider2"

const meta: Meta<typeof Slider> = {
  title: "ui/Slider",
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SimpleIdSlider = (args: any) => {
  const [value, setValue] = React.useState([55, 75])

  return (
    <div className="space-y-4">
      <Card className="w-96">
        <form
          onSubmit={(event) => {
            event.preventDefault(), alert("Submitted")
          }}
          onReset={() => setValue([55, 75])}
        >
          <div className="flex items-center gap-3">
            <Label htmlFor="a">Click the Label</Label>
            <Slider id="a" value={value} onValueChange={setValue} {...args} />
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
        Slider value:
        <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
          {value}
        </span>
      </p>
    </div>
  )
}

export const Default: Story = {
  render: () => <Slider defaultValue={[55]} />,
}

export const Range: Story = {
  render: () => <Slider defaultValue={[55, 75]} />,
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[55]} disabled />,
}

export const Inverted: Story = {
  render: () => <Slider defaultValue={[55]} inverted />,
}

export const Vertical: Story = {
  render: () => (
    <div className="h-20">
      <Slider defaultValue={[55]} orientation="vertical" />
    </div>
  ),
}

export const StepSize: Story = {
  render: () => <Slider defaultValue={[55]} step={10} />,
}
export const Step2: Story = {
  render: () => (
    <Slider2
      defaultValue={[50]}
      step={25}
      min={0}
      max={100}
      showMarks="full"
      marks={[
        { value: 0, label: "xs longer label" },
        { value: 25, label: "sm" },
        { value: 50, label: "md" },
        { value: 75, label: "lg" },
        { value: 100, label: "xl longer label" },
      ]}
    />
  ),
}

export const ControlledForm: Story = {
  render: SimpleIdSlider,
}
