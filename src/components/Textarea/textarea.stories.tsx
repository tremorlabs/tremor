import type { Meta, StoryObj } from "@storybook/react"

import { Card } from "../Card/Card.tsx"
import { Textarea } from "./Textarea.tsx"

const meta: Meta<typeof Textarea> = {
  title: "ui/Textarea",
  component: Textarea,
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    placeholder: "Write something...",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const HasError: Story = {
  args: {
    hasError: true,
  },
}

export const WithCard: Story = {
  render: () => (
    <Card className="sm:w-96">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        Submit details
      </h3>
      <p className="mt-4 text-sm text-gray-500">Insert some text</p>
      <Textarea id="textarea" name="textarea" className="mt-2" />
      <p className="mt-4 text-sm text-gray-500">This is disabled</p>
      <Textarea id="textarea" name="textarea" className="mt-2" disabled />
    </Card>
  ),
}
