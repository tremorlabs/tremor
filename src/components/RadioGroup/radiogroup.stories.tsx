import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Label } from "../Label/Label"
import { RadioGroup, RadioGroupItem } from "./RadioGroup"

const meta: Meta<typeof RadioGroup> = {
  title: "ui/RadioGroup",
  component: RadioGroup,
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroupItem value="1" />
        <RadioGroupItem value="2" />
        <RadioGroupItem value="3" />
      </RadioGroup>
    )
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex justify-center">
      <RadioGroup>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="1" id="radio_1" />
          <Label htmlFor="radio_1">First come first serve (FCFS)</Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="2" id="radio_2" />
          <Label htmlFor="radio_2">By appointment</Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="3" id="radio_3" />
          <Label htmlFor="radio_3">By time window</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const WithLegend: Story = {
  render: () => (
    <form className="flex justify-center">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-800">
          Select booking logic:
        </legend>
        <RadioGroup>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="1" id="radio_21" />
            <Label htmlFor="radio_21">First come first serve (FCFS)</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="2" id="radio_22" />
            <Label htmlFor="radio_22">By appointment</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="3" id="radio_23" />
            <Label htmlFor="radio_23">By time window</Label>
          </div>
        </RadioGroup>
      </fieldset>
    </form>
  ),
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <RadioGroup className="flex flex-col gap-6">
      <div className="flex items-start gap-x-3">
        <RadioGroupItem value="1" id="radio_11" />
        <div className="mt-px flex flex-col gap-y-2.5">
          <Label
            className="text-sm font-semibold leading-none"
            htmlFor="radio_11"
            aria-describedby="radio_11-description"
          >
            Privacy Mode
          </Label>
          <p className="text-sm text-gray-500" id="radio_11-description">
            Enhance your security by enabling Privacy Mode, which anonymizes all
            outgoing links to protect your data.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3">
        <RadioGroupItem value="2" id="radio_22" />
        <div className="mt-px flex flex-col gap-y-2.5">
          <Label
            className="text-sm font-semibold leading-none"
            htmlFor="radio_22"
            aria-describedby="radio_22-description"
          >
            Performance Mode
          </Label>
          <p className="text-sm text-gray-500" id="radio_22-description">
            Optimize your site's speed by activating Performance Mode, ensuring
            faster load times and a smoother user experience.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-x-3">
        <RadioGroupItem value="3" id="radio_33" />
        <div className="mt-px flex flex-col gap-y-2.5">
          <Label
            className="text-sm font-semibold leading-none"
            htmlFor="radio_33"
            aria-describedby="radio_33-description"
          >
            Compatibility Mode
          </Label>
          <p className="text-sm text-gray-500" id="radio_33-description">
            Ensure maximum compatibility with legacy systems by selecting
            Compatibility Mode, ideal for broad audience reach.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <form className="flex justify-center">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-800">
          Select booking logic:
        </legend>
        <RadioGroup>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="1" id="radio_41" />
            <Label htmlFor="radio_41">First come first serve (FCFS)</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="2" id="radio_42" />
            <Label htmlFor="radio_42">By appointment</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem disabled value="3" id="radio_43" />
            <Label disabled htmlFor="radio_43">
              By time window
            </Label>
          </div>
        </RadioGroup>
      </fieldset>
    </form>
  ),
}

export const DefaultChecked: Story = {
  render: () => (
    <form className="flex justify-center">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-800">
          Select booking logic:
        </legend>
        <RadioGroup defaultValue="1">
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="1" id="radio_31" />
            <Label htmlFor="radio_31">First come first serve (FCFS)</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="2" id="radio_32" />
            <Label htmlFor="radio_32">By appointment</Label>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioGroupItem value="3" id="radio_33" />
            <Label htmlFor="radio_33">By time window</Label>
          </div>
        </RadioGroup>
      </fieldset>
    </form>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState("")

    return (
      <div className="flex flex-col items-center justify-start">
        <form>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Choose your preferred interior option:
            </legend>
            <RadioGroup
              value={selectedOption}
              onValueChange={(value) => {
                setSelectedOption(value)
              }}
            >
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="1" id="radio_61" />
                <Label htmlFor="radio_61">Leather Seats</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="2" id="radio_62" />
                <Label htmlFor="radio_62">Fabric Seats</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="3" id="radio_63" />
                <Label htmlFor="radio_63">Sport Seats</Label>
              </div>
            </RadioGroup>
          </fieldset>
          <Button
            className="mt-4"
            type="reset"
            variant="secondary"
            onClick={() => setSelectedOption("")}
          >
            Reset
          </Button>
        </form>
        <pre className="mt-6 w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          Selected Opt: {selectedOption ? selectedOption : "Nothing selected!"}
        </pre>
      </div>
    )
  },
}
