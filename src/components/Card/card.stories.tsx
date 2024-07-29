import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button.tsx"
import { Checkbox } from "../Checkbox/Checkbox.tsx"
import { Divider } from "../Divider/Divider.tsx"
import { Input } from "../Input/Input.tsx"
import { Label } from "../Label/Label.tsx"
import { RadioGroup, RadioGroupItem } from "../RadioGroup/RadioGroup.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select/Select.tsx"
import { SelectNative } from "../SelectNative/SelectNative.tsx"
import { Switch } from "../Switch/Switch.tsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs/Tabs.tsx"
import { Textarea } from "../Textarea/Textarea.tsx"
import { Tooltip } from "../Tooltip/Tooltip.tsx"
import { Card } from "./Card.tsx"

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => <Card></Card>,
}

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

export const WithText: Story = {
  render: () => (
    <Card className="max-w-lg">
      <h3 className="font-semibold text-gray-900 dark:text-gray-50">
        Perseverance Rover's Latest Mars Discovery
      </h3>
      <p className="mt-2 text-sm leading-7 text-gray-900 dark:text-gray-50">
        NASA's Perseverance Rover has made an exciting discovery on Mars,
        finding evidence of ancient microbial life in rock samples. This marks a
        significant step forward in our understanding of the Red Planet's
        history and the search for extraterrestrial life.
      </p>
    </Card>
  ),
}

export const WithFullDivider: Story = {
  render: () => (
    <Card className="max-w-lg p-0">
      <h3 className="p-4 font-semibold text-gray-900 dark:text-gray-50">
        Perseverance Rover's Latest Mars Discovery
      </h3>
      <p className="border-t p-4 text-sm leading-7 text-gray-900 dark:border-gray-900 dark:text-gray-50">
        NASA's Perseverance Rover has made an exciting discovery on Mars,
        finding evidence of ancient microbial life in rock samples. This marks a
        significant step forward in our understanding of the Red Planet's
        history and the search for extraterrestrial life.
      </p>
    </Card>
  ),
}

export const AsChildList: Story = {
  render: () => (
    <ol className="flex list-none flex-col gap-4">
      <Card asChild>
        <li className="text-gray-900 dark:text-gray-50">
          This card will be turned into a {`<li>`} element{" "}
        </li>
      </Card>
      <Card asChild>
        <li className="text-gray-900 dark:text-gray-50">
          This card will also be turned into a {`<li>`} element{" "}
        </li>
      </Card>
    </ol>
  ),
}

export const WithInputs: Story = {
  render: () => (
    <Card className="mx-auto max-w-lg">
      <form>
        <div className="flex gap-3">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList variant="line" className="grid w-full grid-cols-3">
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
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Emma" />
        </div>
        <div className="mt-4 flex gap-3">
          <Checkbox checked id="r1" />
          <Label htmlFor="r1">
            I'd like to be notified by SMS when my order is ready for
            collection.
          </Label>
        </div>
        <div className="mt-4 flex gap-3">
          <div className="flex items-center space-x-4">
            <Switch checked id="r1" />
            <Label htmlFor="r1">Click this Label check the Switch</Label>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Textarea id="textarea" name="textarea" className="mt-2" />
        </div>
        <div className="mt-4 flex gap-3">
          <div className="flex justify-center">
            <RadioGroup>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem checked value="1" id="radio_1" />
                <Label htmlFor="radio_1">First come first serve (FCFS)</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="2" id="radio_2" />
                <Label htmlFor="radio_2">By appointment</Label>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioGroupItem value="3" id="radio_3" />
                <Label htmlFor="radio_3">By time window</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <SelectNative>
            <option value="0-18">18 and under</option>
            <option value="19-39">19 to 39</option>
            <option value="40-64">40 to 64</option>
            <option value="65-infinity">65 and over</option>
          </SelectNative>
        </div>
        <div className="mt-4 flex gap-3">
          <Select>
            <SelectTrigger>
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
        </div>
        <div className="mt-4 flex gap-3">
          <Input type="file" />
        </div>

        <Divider />
        <div className="flex w-full gap-2 *:w-full dark:border-gray-800">
          <Button variant="light">Clear</Button>
          <Button variant="secondary">Clear</Button>
          <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.">
            <Button className="w-full" type="submit">
              Apply
            </Button>
          </Tooltip>
        </div>
      </form>
    </Card>
  ),
}
