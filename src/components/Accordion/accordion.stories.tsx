import React from "react"
import {
  RiAddCircleFill,
  RiArrowLeftRightLine,
  RiCheckboxMultipleFill,
  RiCoupon3Fill,
} from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "../Badge/Badge"
import { Button } from "../Button/Button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "ui/Accordion",
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" className="mx-auto mt-3 max-w-sm" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>In the app</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 1:
              </span>{" "}
              Tap the Inbox icon and then tap Add receipts.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 2:
              </span>{" "}
              Tap the + symbol to attach a photo or PDF of the receipt for our
              system to match.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Via browser extension</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 1:
              </span>{" "}
              <span className="underline">Download</span> the browser extension
              for Chrome or Safari. (Firefox support is coming soon.)
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 2:
              </span>{" "}
              Click the extension icon at the top of your browser. Under the
              Receipts tab, upload an image or click Screenshot current tab to
              automatically attach the receipt to the expense.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>Via email forwarding</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <h1 className="text-md font-semibold text-gray-900 dark:text-gray-50">
        Managing Your Booking Online
      </h1>
      <Accordion type="multiple" className="mt-3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCoupon3Fill className="size-4 text-blue-500" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiArrowLeftRightLine className="size-4 text-blue-500" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiAddCircleFill className="size-4 text-blue-500" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCheckboxMultipleFill className="size-4 text-blue-500" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const OneItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can you render only one item?</AccordionTrigger>
        <AccordionContent>Yes, absolutely!</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DefaultValueAndCollapsibleDisabled: Story = {
  render: () => (
    <div className="mx-auto max-w-lg">
      <h1 className="text-md font-semibold text-gray-900 dark:text-gray-50">
        Managing Your Booking Online
      </h1>
      <Accordion
        type="single"
        defaultValue="item-1"
        className="mt-3"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCoupon3Fill className="group-data-[disabled]:texdark:t-blue-200 group-data-[disabled]:t8xt-blue-200 size-4 text-blue-500" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiArrowLeftRightLine className="size-4 text-blue-500 group-data-disabled:text-blue-200 dark:group-data-disabled:text-blue-900" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" disabled>
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiAddCircleFill className="size-4 text-blue-500 group-data-disabled:text-blue-200 dark:group-data-disabled:text-blue-900" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCheckboxMultipleFill className="size-4 text-blue-500 group-data-disabled:text-blue-200 dark:group-data-disabled:text-blue-900" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const TypeMultiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Does NASA provide public access to space data?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. NASA offers open access to a wealth of space data,
          including satellite images, mission information, and scientific
          discoveries through various platforms and APIs, encouraging public
          engagement and educational use.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Are NASA's educational materials available for all age groups?
        </AccordionTrigger>
        <AccordionContent>
          Yes. NASA provides a wide range of educational materials tailored for
          different age groups, from K-12 to higher education. These resources
          include lesson plans, interactive activities, and full courses, all
          designed to inspire and educate the next generation of explorers.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can the public participate in NASA missions?
        </AccordionTrigger>
        <AccordionContent>
          Yes! Through various citizen science projects and initiatives, the
          public can contribute to NASA missions and scientific research. These
          opportunities allow individuals to analyze data, contribute to
          problem-solving, and even participate in the discovery process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DisabledAccordion: Story = {
  render: () => (
    <Accordion type="single" collapsible disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Did FutureTravel Corp. offer eco-friendly travel options?
        </AccordionTrigger>
        <AccordionContent>
          Yes. FutureTravel Corp. was dedicated to sustainable travel, offering
          a range of eco-friendly travel solutions including solar-powered
          flights and zero-emission accommodations, setting a benchmark for
          responsible tourism.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Was FutureTravel Corp. technology-driven?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. The company was at the forefront of travel technology,
          leveraging AI and machine learning to personalize travel experiences,
          optimize routes, and ensure the highest levels of efficiency and
          customer satisfaction.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DisabledAccordionItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Is it suitable for all skill levels?
        </AccordionTrigger>
        <AccordionContent>
          Yes. From beginners to experts, Swiss ski resorts offer slopes and
          facilities for every level.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Are ski passes affordable?</AccordionTrigger>
        <AccordionContent>
          Ski passes vary, offering options for every budget, including day
          passes and season-long access.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>
          <span>
            Is off-piste skiing available?
            <Badge variant="warning">Currently paused</Badge>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          Yes! Adventurous skiers can explore extensive off-piste terrain under
          proper safety measures.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("")

    return (
      <div className="flex flex-col gap-2">
        <Button
          variant="secondary"
          className="w-fit"
          onClick={() =>
            setValue((prevValue) => (prevValue === "item-2" ? "" : "item-2"))
          } // Updated to use toggle functionality
        >
          {value === "" ? "Open" : "Close"} item number two
        </Button>
        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>In the app</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold text-gray-800">Step 1:</span>
                  Tap the Inbox icon and then tap Add receipts.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Step 2:</span>
                  Tap the + symbol to attach a photo or PDF of the receipt for
                  our system to match.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Via browser extension</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold text-gray-800">Step 1:</span>
                  <span className="underline">Download</span> the browser
                  extension for Chrome or Safari. (Firefox support is coming
                  soon.)
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Step 2:</span>
                  Click the extension icon at the top of your browser. Under the
                  Receipts tab, upload an image or click Screenshot current tab
                  to automatically attach the receipt to the expense.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" disabled>
            <AccordionTrigger>
              <span>Via email forwarding</span>
            </AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  },
}
