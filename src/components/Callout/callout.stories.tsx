import { RiErrorWarningFill, RiInformation2Fill } from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Callout, calloutVariants } from "./Callout.tsx"

const meta: Meta<typeof Callout> = {
  title: "ui/Callout",
  component: Callout,
  args: {
    title: "Sales Performance",
    children:
      "System Update: Enhanced Salesforce and Dynamics 365 integration now delivers key sales performance metrics directly to your dashboard for improved target achievement.",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [...Object.keys(calloutVariants.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Callout>

export const Default: Story = {}

export const Success: Story = {
  args: {
    variant: "success",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
}

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
}

export const WithIcon: Story = {
  args: {
    icon: RiErrorWarningFill,
    title: "AWS Credit Alert",
    children:
      "Warning: Your AWS credits are nearly depleted. Please review your usage and consider adding more credits to avoid service interruptions. Visit your account dashboard for details.",
  },
}

export const WithIconElement: Story = {
  args: {
    icon: <RiInformation2Fill className="mr-1.5 h-5 w-5 shrink-0" />,
    title: "Information",
    children: "Visit your account dashboard for details.",
  },
}
