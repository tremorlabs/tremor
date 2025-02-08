import { RiBold, RiItalic, RiStarFill, RiUnderline } from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Toggle, ToggleGroup, ToggleGroupItem } from "./Toggle"

const meta: Meta<typeof Toggle> = {
  title: "ui/Toggle",
  component: Toggle,
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <>
      <Toggle aria-label="Toggle star">
        <RiStarFill className="pointer-events-none size-4 shrink-0" />
      </Toggle>
    </>
  ),
}
export const WithParentState: Story = {
  render: () => (
    <>
      <Toggle aria-label="Toggle star">
        <RiStarFill className="pointer-events-none size-4 shrink-0 group-data-[state=on]:text-yellow-400" />
      </Toggle>
    </>
  ),
}
export const DefaultToggleGroup: Story = {
  render: () => (
    <>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <RiBold className="size-4 shrink-0" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <RiItalic className="size-4 shrink-0" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <RiUnderline className="size-4 shrink-0" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
}
