import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiExchange2Line,
  RiHome2Line,
} from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { TabNavigation, TabNavigationLink } from "./TabNavigation"

const meta: Meta<typeof TabNavigation> = {
  title: "ui/TabNavigation",
  component: TabNavigation,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof TabNavigation>

export const Default: Story = {
  render: () => (
    <TabNavigation>
      <TabNavigationLink href="#" active>
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#">Balances</TabNavigationLink>
      <TabNavigationLink href="#">Transactions</TabNavigationLink>
      <TabNavigationLink href="#" disabled>
        Customers
      </TabNavigationLink>
    </TabNavigation>
  ),
}

export const Icons: Story = {
  render: () => (
    <TabNavigation>
      <TabNavigationLink href="#" active className="inline-flex gap-2">
        <RiHome2Line className="size-4" aria-hidden="true" />
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiBankCard2Line className="-ml-1 size-4" aria-hidden="true" />
        Balances
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiExchange2Line className="-ml-1 size-4" aria-hidden="true" />
        Transactions
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiCustomerService2Fill className="-ml-1 size-4" aria-hidden="true" />
        Customers
      </TabNavigationLink>
    </TabNavigation>
  ),
}
