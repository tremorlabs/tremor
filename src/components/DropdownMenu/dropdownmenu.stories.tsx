import React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  RiAddCircleLine,
  RiAddLine,
  RiArrowUpCircleLine,
  RiDiscordLine,
  RiFolder5Line,
  RiHeartPulseLine,
  RiIdCardLine,
  RiLogoutBoxLine,
  RiMailAddLine,
  RiMessageLine,
  RiSettings2Line,
  RiSlackLine,
  RiStackLine,
  RiTelegramLine,
  RiUser2Line,
  RiUserAddLine,
  RiUserSmileLine,
  RiWhatsappLine,
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

RiUser2Line

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
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className="flex items-center gap-x-2">
                <RiArrowUpCircleLine className="size-4 text-blue-500" />
                <span className="text-blue-500">Upgrade</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              <span className="flex items-center gap-x-2">
                <DropdownMenuIconWrapper>
                  <RiIdCardLine className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Billing</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              <span className="flex items-center gap-x-2">
                <DropdownMenuIconWrapper>
                  <RiSettings2Line className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Account Settings</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">
              <span className="flex items-center gap-x-2">
                <RiUserSmileLine className="size-4 text-inherit" />
                <span>Manage workspace</span>
              </span>
            </DropdownMenuItem>

            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                <span className="flex items-center gap-x-2">
                  <RiAddCircleLine className="size-4 text-inherit" />
                  <span>Invite users</span>
                </span>
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>
                  <span className="flex items-center gap-x-2">
                    <RiMailAddLine className="size-4 text-inherit" />
                    <span>Email</span>
                  </span>
                </DropdownMenuItem>

                <DropdownMenuSubMenu>
                  <DropdownMenuSubMenuTrigger>
                    <span className="flex items-center gap-x-2">
                      <RiMessageLine className="size-4 text-inherit" />
                      <span>Message</span>
                    </span>
                  </DropdownMenuSubMenuTrigger>
                  <DropdownMenuSubMenuContent>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiWhatsappLine className="size-4 text-inherit" />
                        <span>Whatsapp</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiTelegramLine className="size-4 text-inherit" />
                        <span>Telegram</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiDiscordLine className="size-4 text-inherit" />
                        <span>Discord</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiSlackLine className="size-4 text-inherit" />
                        <span>Slack</span>
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuSubMenuContent>
                </DropdownMenuSubMenu>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="flex items-center gap-x-2">
                    <RiAddCircleLine className="size-4 text-inherit" />
                    <span>More...</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem shortcut="⌘T">
              <span className="flex items-center gap-x-2">
                <RiAddLine className="size-4 text-inherit" />
                <span>New Workspace</span>
              </span>
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
              Created at
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
            <span className="flex items-center gap-x-2">
              <RiHeartPulseLine className="size-4 text-inherit" />
              <span>Support</span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⇧⌘Q">
            <span className="flex items-center gap-x-2">
              <RiLogoutBoxLine className="size-4 text-inherit" />
              <span>Sign out</span>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const Simple: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⇧⌘P">Profile</DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">Settings</DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">Shortcuts</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">Team</DropdownMenuItem>
            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                Invite users
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem shortcut="⌘+T">New Team</DropdownMenuItem>
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
              <div className="flex items-center space-x-2">
                <RiFolder5Line className="size-4 text-gray-500" />
                <span>Metrics catalogue (with long edge case)</span>
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
            <DropdownMenuItem>Log out all</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioItem: Story = {
  render: () => {
    const [sort, setSort] = React.useState("alpha")
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Sorting</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
              <DropdownMenuRadioItem value="alpha" hint="A–Z">
                Alphabetical
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
                Reverse Alphabetical
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="asc" hint="1-99">
                Created At
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithCheckboxItem: Story = {
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
          <DropdownMenuLabel>Layout</DropdownMenuLabel>
          <DropdownMenuSeparator />
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
