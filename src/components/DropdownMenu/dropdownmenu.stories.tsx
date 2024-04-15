import React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  RiAddCircleFill,
  RiAddFill,
  RiGithubFill,
  RiHeartPulseLine,
  RiIdCardFill,
  RiKeyboardBoxFill,
  RiLogoutBoxFill,
  RiMailAddFill,
  RiMessage2Fill,
  RiSettings2Fill,
  RiUploadCloud2Line,
  RiUser2Fill,
  RiUserSmileFill,
} from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuHint,
  DropdownMenuIconWrapper,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "./DropdownMenu"

RiUser2Fill

const meta: Meta<typeof DropdownMenu> = {
  title: "ui/DropdownMenu",
  component: DropdownMenu,
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

type Checked = DropdownMenuCheckboxItemProps["checked"]

export const Default: Story = {
  render: () => {
    const [position, setPosition] = React.useState("bottom")
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <RiUser2Fill className="size-4 text-gray-500" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <DropdownMenuIconWrapper>
                <RiIdCardFill className="size-4 text-inherit" />
              </DropdownMenuIconWrapper>
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RiSettings2Fill className="size-4 text-gray-500" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RiKeyboardBoxFill className="size-4 text-gray-500" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <RiUserSmileFill className="size-4 text-gray-500" />
              <span>Team</span>
              <DropdownMenuHint>Hint</DropdownMenuHint>
            </DropdownMenuItem>
            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                <RiAddCircleFill className="size-4 text-gray-500" />
                <span>Invite users</span>
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>
                  <RiMailAddFill className="size-4 text-gray-500" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RiMessage2Fill className="size-4 text-gray-500" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <RiAddCircleFill className="size-4 text-gray-500" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem>
              <RiAddFill className="size-4 text-gray-500" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="alpha">
              Alphabetical
              <DropdownMenuHint>A-Z</DropdownMenuHint>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="alpha-reverse">
              Reverse Alphabetical
              <DropdownMenuHint>Z-A</DropdownMenuHint>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="asc">
              Created At - Ascending
              <DropdownMenuHint>1 - 30</DropdownMenuHint>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <RiGithubFill className="size-4 text-gray-500" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiHeartPulseLine className="size-4 text-gray-500" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <RiUploadCloud2Line className="size-4 text-gray-500" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RiLogoutBoxFill className="size-4 text-gray-500" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
