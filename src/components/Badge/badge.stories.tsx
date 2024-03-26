import type { Meta, StoryObj } from "@storybook/react"

import { cx } from "../../utils/cx"
import { Badge, badgeVariants } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "ui/Badge",
  component: Badge,
  args: {
    children: "Badge",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [...Object.keys(badgeVariants.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="neutral">Neutral</Badge>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
}

export const AnchorWithBadgeVariantsStyle: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <a
        className={cx(badgeVariants({ variant: "success" }), "cursor-pointer")}
      >
        Anchor element
      </a>
    </div>
  ),
}

export const CustomisedBadge: Story = {
  render: () => (
    <div className="flex items-center justify-between gap-8 rounded-md bg-blue-50 py-2.5 pl-2.5 pr-4 text-sm dark:bg-blue-900/50">
      <div className="flex items-center gap-2 truncate">
        <Badge className="ring-none dark:ring-none rounded-full bg-blue-800 text-white dark:bg-blue-500 dark:text-white">
          Export Request
        </Badge>
        <span className="truncate text-blue-800 dark:text-blue-400">
          Your export is ready for download:{" "}
          <span className="font-semibold">263 transactions</span>
        </span>
      </div>
      <button className="font-semibold text-blue-800 dark:text-blue-400">
        Download
      </button>
    </div>
  ),
}
