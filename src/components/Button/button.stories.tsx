import type { Meta, StoryObj } from "@storybook/react"

import { cx } from "../../utils/cx"
import { Button, buttonVariants } from "./Button"

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: [...Object.keys(buttonVariants.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Light: Story = {
  args: {
    variant: "light",
    children: "Light",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const WithDisabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const IsLoadingWithChildren: Story = {
  args: {
    isLoading: true,
    children: "Add item",
  },
}

export const IsLoadingWithLoadingText: Story = {
  args: {
    loadingText: "Custom loading text",
    isLoading: true,
  },
}

export const AsChildAnchor: Story = {
  render: () => (
    <Button asChild>
      <a href="#api-reference-button">API Reference</a>
    </Button>
  ),
}

export const AnchorWithBadgeVariantsStyle: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <a className={cx(buttonVariants({ variant: "secondary" }))}>
        Anchor element
      </a>
    </div>
  ),
}
