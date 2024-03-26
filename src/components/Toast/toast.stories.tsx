import type { Meta, StoryObj } from "@storybook/react"

import { toast } from "../../hooks/useToast"
import { Button } from "../Button/Button"
import { Toast, ToastProvider, ToastViewport } from "./Toast"
import { Toaster } from "./Toaster"

const meta: Meta<typeof Toast> = {
  title: "ui/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  render: (args) => {
    return (
      <ToastProvider>
        <ToastViewport>
          <Toast {...args} />
        </ToastViewport>
      </ToastProvider>
    )
  },
}

export default meta

type Story = StoryObj<typeof Toast>

export const Minimal: Story = {
  args: {
    title: "Information",
    description:
      "Your account has been successfully created. Check your email for further instructions.",
    open: true,
    disableDismiss: true,
  },
}

export const Information: Story = {
  args: {
    title: "Information",
    description:
      "Your account has been successfully created. Check your email for further instructions.",
    open: true,
  },
}

export const Warning: Story = {
  args: {
    title: "Warning",
    description:
      "Your trial period will expire in 3 days. Upgrade now to continue using our services.",
    variant: "warning",
    open: true,
  },
}

export const Error: Story = {
  args: {
    title: "Error",
    description:
      "Failed to connect to the server. Please check your internet connection and try again.",
    variant: "error",
    open: true,
  },
}

export const ErrorWithAction: Story = {
  args: {
    title: "Error",
    description:
      "Failed to connect to the server. Please check your internet connection and try again.",
    variant: "error",
    open: true,
    action: {
      altText: "Delete",
      onClick: () => {},
      label: "Delete",
    },
  },
}

export const Success: Story = {
  args: {
    title: "Success",
    description:
      "Your payment has been processed. Thank you for your purchase!",
    variant: "success",
    open: true,
  },
}

export const Loading: Story = {
  args: {
    title: "Loading",
    description: "Fetching the latest data from the server. Please wait...",
    variant: "loading",
    open: true,
  },
}

export const ButtonTrigger: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast({
            title: "Info",
            description: "The quick brown fox jumps over the lazy dog.",
          })
        }
      >
        Show
      </Button>
    </>
  ),
  args: {
    title: "Loading",
    description: "Fetching the latest data from the server. Please wait...",
    variant: "loading",
  },
}

export const WithAction: Story = {
  args: {
    title: "Deployment Successful",
    description: "Your project has been successfully deployed to production.",
    variant: "success",
    open: true,
    action: {
      altText: "Revert the deployment",
      onClick: () => {},
      label: "Revert",
    },
  },
}
