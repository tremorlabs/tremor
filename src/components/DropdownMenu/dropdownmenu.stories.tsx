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
  DropdownMenuIconWrapper,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
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
            <DropdownMenuItem shortcut="⇧⌘P">
              <RiUser2Fill className="size-4 text-gray-500" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              <DropdownMenuIconWrapper>
                <RiIdCardFill className="size-4 text-inherit" />
              </DropdownMenuIconWrapper>
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              <DropdownMenuIconWrapper>
              <RiSettings2Fill className="size-4" />
              </DropdownMenuIconWrapper>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">
              <RiKeyboardBoxFill className="size-4 text-gray-500" />
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">
              <RiUserSmileFill className="size-4 text-gray-500" />
              <span>Team</span>
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
            <DropdownMenuItem shortcut="⌘+T">
              <RiAddFill className="size-4 text-gray-500" />
              <span>New Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="alpha" hint="A-Z">
              Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
              Reverse Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="asc" hint="1-99">
              Created At - Ascending
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
          <DropdownMenuItem shortcut="⇧⌘Q">
            <RiLogoutBoxFill className="size-4 text-gray-500" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
