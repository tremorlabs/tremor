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
  RiStackLine,
  RiSettings2Line,
  RiFolder5Line,
  RiUserAddLine
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
            Public
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Private
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            disabled
          >
            Restricted
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

export const Default2: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⇧⌘P">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">
              Shortcuts
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">
              Team
            </DropdownMenuItem>
            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                Invite users
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  More...
                </DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem shortcut="⌘+T">
              New Team
            </DropdownMenuItem>
          </DropdownMenuGroup>    
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⌘W">
            <div className="flex items-center space-x-2">
              <RiStackLine className="size-4 text-gray-500" />
              <span>Workspaces</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘M">
              {/* @SEV: should we truncate by default */}
              <div className="flex items-center space-x-2">
              <RiFolder5Line className="size-4 text-gray-500" />
              {/* <span>Metrics catalogue (with long edge case)</span> */}
              <span>Metrics catalogue</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              <div className="flex items-center space-x-2">
                <RiSettings2Line className="size-4 text-gray-500" />
                <span>Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘U">
              <div className="flex items-center space-x-2">
                <DropdownMenuIconWrapper>
                  <RiUserAddLine className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Invite users</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {/* @SEV: tracking-widest is okay until you have to use words, e.g. CONTROL + Q */}
            <DropdownMenuItem>
              Log out all
            </DropdownMenuItem>
          </DropdownMenuGroup>    
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioButtons: Story = {
  render: () => {
    const [position, setPosition] = React.useState("alpha-reverse")
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⇧⌘P">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">
              Shortcuts
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="alpha" hint="⌘K">
              Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
              Reverse Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="asc" hint="1-99">
              Created At - Ascending – 345
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          </DropdownMenuGroup>    
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithCheckbox: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⇧⌘P">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">
              Shortcuts
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Layout</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            hint="Pro"
          >
            Show status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Show activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            hint="Base"
          >
            Show panel
          </DropdownMenuCheckboxItem>

        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
