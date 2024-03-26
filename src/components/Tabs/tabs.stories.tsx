import { RiCalculatorLine, RiMapPin2Line } from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  title: "ui/Tabs",
  component: Tabs,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof Tabs>

export const VariantLine: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Returns</TabsTrigger>
        <TabsTrigger value="tab2">Shipping</TabsTrigger>
      </TabsList>
      <div className="ml-2 mt-4">
        <TabsContent
          value="tab1"
          className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
        >
          <p>
            You have 60 days from the time we've shipped your order to return
            any part of it to us for a refund, provided it is still in its
            original, unused condition: we do not accept returns of used items.
          </p>
          <p>
            No return authorization (RMA) is required. If you are within the
            United States, a pre-paid shipping label will be generated. For
            direct returns, a flat fee of $10 is deducted from your return for
            shipping and processing costs.
          </p>
        </TabsContent>
        <TabsContent
          value="tab2"
          className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
        >
          <p>
            We ship worldwide via UPS Expedited. We offer flat rate shipping to
            customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+),
            and Australia ($65). Note that most brokerage fees are included in
            the price of UPS Expedited shipping, with the exception of a
            possible $10 fee assessed in Canada only if prior arrangements to
            pay for duties and taxes are not made (see next question and
            answer).
          </p>
          <p>
            Outside of the United States, tariffs, duties, and taxes are the
            responsibility of the customer and are usually paid at time of
            delivery.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantSolid: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="solid">
        <TabsTrigger value="tab1">Returns</TabsTrigger>
        <TabsTrigger value="tab2">Shipping</TabsTrigger>
      </TabsList>
      <div className="ml-2 mt-4">
        <TabsContent
          value="tab1"
          className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
        >
          <p>
            You have 60 days from the time we've shipped your order to return
            any part of it to us for a refund, provided it is still in its
            original, unused condition: we do not accept returns of used items.
          </p>
          <p>
            No return authorization (RMA) is required. If you are within the
            United States, a pre-paid shipping label will be generated. For
            direct returns, a flat fee of $10 is deducted from your return for
            shipping and processing costs.
          </p>
        </TabsContent>
        <TabsContent
          value="tab2"
          className="space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-500"
        >
          <p>
            We ship worldwide via UPS Expedited. We offer flat rate shipping to
            customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+),
            and Australia ($65). Note that most brokerage fees are included in
            the price of UPS Expedited shipping, with the exception of a
            possible $10 fee assessed in Canada only if prior arrangements to
            pay for duties and taxes are not made (see next question and
            answer).
          </p>
          <p>
            Outside of the United States, tariffs, duties, and taxes are the
            responsibility of the customer and are usually paid at time of
            delivery.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantSolidWithIcons: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="solid">
        <TabsTrigger value="tab1" className="gap-1.5">
          <RiMapPin2Line className="-ml-1 size-4" aria-hidden="true" />
          Location
        </TabsTrigger>
        <TabsTrigger value="tab2" className="gap-1.5">
          <RiCalculatorLine className="-ml-1 size-4" aria-hidden="true" />
          Calculation
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <p className="text-sm text-gray-500 sm:text-gray-500">Tab 1 content</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-gray-500 sm:text-gray-500">Tab 2 content</p>
      </TabsContent>
    </Tabs>
  ),
}

export const VariantLineWithIcons: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="line">
        <TabsTrigger value="tab1" className="inline-flex gap-2">
          <RiMapPin2Line className="-ml-1 size-4" aria-hidden="true" />
          Location
        </TabsTrigger>
        <TabsTrigger value="tab2" className="inline-flex gap-2">
          <RiCalculatorLine className="-ml-1 size-4" aria-hidden="true" />
          Calculation
        </TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantSolidDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="solid">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Tab 3
        </TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 3 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantLineDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="line">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Tab 3
        </TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 3 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantSolidStrechWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList className="grid w-full grid-cols-3" variant="solid">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 3 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const VariantLineStrechWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList className="grid w-full grid-cols-3" variant="line">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 3 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}
