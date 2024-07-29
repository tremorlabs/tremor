import React from "react"
import {
  RiShirtLine,
  RiTShirt2Line,
  RiTShirtAirFill,
  RiTShirtLine,
} from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button.tsx"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Dialog/Dialog.tsx"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select.tsx"

const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Select>

const data1 = [
  {
    value: "dress-shirt-striped",
    label: "Striped Dress Shirt",
  },
  {
    value: "relaxed-button-down",
    label: "Relaxed Fit Button Down",
  },
  {
    value: "slim-button-down",
    label: "Slim Fit Button Down",
  },
  {
    value: "dress-shirt-solid",
    label: "Solid Dress Shirt",
    disabled: true,
  },
  {
    value: "dress-shirt-check",
    label: "Check Dress Shirt",
  },
]

const data2 = [
  {
    value: "striped-dress-shirt",
    label: "Striped Dress Shirt",
    icon: RiShirtLine,
  },
  {
    value: "relaxed-fit-shirt",
    label: "Relaxed Fit Shirt Classic",
    icon: RiTShirtLine,
  },
  {
    value: "relaxed-fit-shirt-vneck",
    label: "Relaxed Fit Shirt V-Neck",
    icon: RiTShirt2Line,
  },
  {
    value: "sport-active-solid",
    label: "Sport Active Shirt",
    icon: RiTShirtAirFill,
  },
]

const data3 = [
  {
    label: "Shirts",
    items: [
      {
        value: "dress-shirt-striped",
        label: "Striped Dress Shirt",
      },
      {
        value: "relaxed-button-down",
        label: "Relaxed Fit Button Down",
      },
      {
        value: "slim-button-down",
        label: "Slim Fit Button Down",
      },
      {
        value: "dress-shirt-solid",
        label: "Solid Dress Shirt",
      },
      {
        value: "dress-shirt-check",
        label: "Check Dress Shirt",
      },
    ],
  },
  {
    label: "T-Shirts",
    items: [
      {
        value: "v-neck",
        label: "V-Neck",
      },
      {
        value: "crew-neck",
        label: "Crew Neck",
      },
      {
        value: "henley",
        label: "Henley",
      },
      {
        value: "polo",
        label: "Polo",
      },
      {
        value: "mock-neck",
        label: "Mock Neck",
      },
      {
        value: "turtleneck",
        label: "Turtleneck",
      },
      {
        value: "scoop-neck",
        label: "Scoop Neck",
      },
    ],
  },
]

export const Default: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger className="w-96">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data1.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data2.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex items-center gap-2">
                  <item.icon className="size-4 shrink-0" aria-hidden="true" />{" "}
                  {item.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map((group) => (
              <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Select>
          <SelectTrigger disabled={true}>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map((group) => (
              <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
}

export const DisabledItem: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data1.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const HasError: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Select>
          <SelectTrigger hasError>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map((group) => (
              <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
}

export const Scrollable: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Europe & Africa</SelectGroupLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Asia</SelectGroupLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Australia & Pacific</SelectGroupLabel>
            <SelectItem value="awst">
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value="acst">
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value="aest">
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value="nzst">
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>South America</SelectGroupLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
}

export const SelectInDialog: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Select shirt size</DialogTitle>
              <DialogDescription className="text-sm leading-7">
                Shirt type
              </DialogDescription>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {data3.map((group) => (
                    <SelectGroup key={group.label}>
                      <SelectGroupLabel>{group.label}</SelectGroupLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
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

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("")
    const data = [
      {
        value: "chocolate",
        label: "🍫 Schoggi",
      },
      {
        value: "cheese",
        label: "🧀 Chäs",
      },
      {
        value: "fondue",
        label: "🫕 Fondü",
      },
      {
        value: "Milk",
        label: "🥛 Melch",
      },
    ]

    return (
      <>
        <div className="flex gap-1">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="mx-auto">
              <SelectValue placeholder="Select" aria-label={value} />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <span className="flex items-center gap-x-2">
                    {item.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className="whitespace-nowrap"
            variant="secondary"
            onClick={() => setValue("")}
          >
            Reset selection
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-500">Selected key: {value}</p>
      </>
    )
  },
}
