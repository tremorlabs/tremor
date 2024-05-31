import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Label } from "../Label/Label"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "ui/Input",
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input />,
}

export const Disabled: Story = {
  render: () => <Input disabled />,
}

export const WithPlaceholder: Story = {
  render: () => <Input placeholder="With Placeholder" />,
}

export const TypePassword: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="password">Password</Label>
      <Input
        placeholder="Enter password"
        id="password"
        name="password"
        type="password"
      />
    </div>
  ),
}

export const TypeSearchDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search">Search</Label>
      <Input
        disabled
        placeholder="Enter search"
        id="search"
        name="search"
        type="search"
      />{" "}
    </div>
  ),
}

export const RequiredAndPattern: Story = {
  render: () => (
    <form className="flex flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input
        required
        id="secret"
        name="secret"
        type="text"
        placeholder="Non-capitalized only"
        pattern="[a-z]+"
      />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
  ),
}

export const TypeFile: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="upload">Search</Label>
      <Input id="upload" name="upload" type="file" />
    </div>
  ),
}

export const TypeNumber: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
  ),
}

export const HasError: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input
        hasError
        placeholder="Enter full name"
        id="full_name"
        name="full_name"
        type="text"
      />
    </div>
  ),
}
export const InputWithButton: Story = {
  render: () => (
    <form className="inline-flex items-center gap-1">
      <Button>Submit</Button>
      <Input
        required
        id="secret"
        name="secret"
        type="text"
        placeholder="Non-capitalized only"
        pattern="[a-z]+"
      />
      <Button variant="secondary">Submit</Button>
    </form>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [search, setSearch] = React.useState("")
    return (
      <form className="flex flex-col gap-2">
        <Label htmlFor="File">Search</Label>
        <Input
          placeholder="Enter search"
          id="search"
          name="search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button type="submit" variant="secondary">
          Submit
        </Button>
        <p>{search}</p>
      </form>
    )
  },
}
