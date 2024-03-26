import { Label } from "@radix-ui/react-label"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Divider } from "../Divider/Divider"
import { Input } from "../Input/Input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "./Popover"

const meta: Meta<typeof Popover> = {
  title: "ui/Popover",
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button variant="primary">Open</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here</PopoverContent>
    </Popover>
  ),
}

export const WithSeperator: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <p className="p-2">Place content for the popover here</p>
        <Divider className="my-0" />
        <p className="p-2">Place content for the popover here</p>
      </PopoverContent>
    </Popover>
  ),
}

export const Close: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <form>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="number">Salary</label>
            <Input
              id="number"
              name="number"
              type="number"
              placeholder="$100K"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Emma" />
          </div>
          <div className="flex items-center gap-2 border-t border-gray-200 p-2 dark:border-gray-800">
            <PopoverClose asChild>
              <Button className="w-full" variant="secondary">
                Clear
              </Button>
            </PopoverClose>
            <Button className="mx-auto w-full" type="submit">
              Apply
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  ),
}
