import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog"

const meta: Meta<typeof Dialog> = {
  title: "ui/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
