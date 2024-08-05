import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { Divider } from "../Divider/Divider"
import { Slider } from "./Slider"

const meta: Meta<typeof Slider> = {
  title: "ui/Slider",
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ControlledSlider = (args: any) => {
  const [value, setValue] = React.useState([55, 75])

  return (
    <Card className="w-96">
      <form
        onSubmit={(event) => {
          event.preventDefault(),
            alert("Submitted: " + `${value[0]}, ${value[1]}`)
        }}
        onReset={() => setValue([55, 75])}
      >
        <Slider id="a" value={value} onValueChange={setValue} {...args} />
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
      <Divider />
      <p className="mt-2 text-sm text-gray-500">
        Slider value:
        <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
          {value[0]}, {value[1]}
        </span>
      </p>
    </Card>
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

export const ControlledForm: Story = {
  render: ControlledSlider,
}
