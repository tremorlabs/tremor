import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../Label/Label.tsx"
import { SelectNative } from "./SelectNative.tsx"

const meta: Meta<typeof SelectNative> = {
  title: "ui/SelectNative",
  component: SelectNative,
}

export default meta
type Story = StoryObj<typeof SelectNative>

export const Default: Story = {
  render: () => (
    <SelectNative>
      <option value="0-18">18 and under</option>
      <option value="19-39">19 to 39</option>
      <option value="40-64">40 to 64</option>
      <option value="65-infinity">65 and over</option>
    </SelectNative>
  ),
}

export const WithLongValues: Story = {
  render: () => (
    <SelectNative>
      <option value="gpt-3">
        GPT-3 (Generative Pre-trained Transformer 3)
      </option>
      <option value="bert">
        BERT (Bidirectional Encoder Representations from Transformers)
      </option>
      <option value="t5">T5 (Text-To-Text Transfer Transformer)</option>
    </SelectNative>
  ),
}
export const WithLabel: Story = {
  render: () => (
    <>
      <Label htmlFor="age1">Select age</Label>
      <SelectNative id="age1">
        <option value="0-18">18 and under</option>
        <option value="19-39">19 to 39</option>
        <option value="40-64">40 to 64</option>
        <option value="65-infinity">65 and over</option>
      </SelectNative>
    </>
  ),
}
export const HasError: Story = {
  render: () => (
    <SelectNative id="age-error" hasError>
      <option value="0-18">18 and under</option>
      <option value="19-39">19 to 39</option>
      <option value="40-64">40 to 64</option>
      <option value="65-infinity">65 and over</option>
    </SelectNative>
  ),
}
export const LongOption: Story = {
  render: () => (
    <>
      <Label htmlFor="model">Select model</Label>
      <SelectNative id="model">
        <option value="gpt-3">
          GPT-3 (Generative Pre-trained Transformer 3)
        </option>
        <option value="bert">
          BERT (Bidirectional Encoder Representations from Transformers)
        </option>
        <option value="t5">T5 (Text-To-Text Transfer Transformer)</option>
      </SelectNative>
    </>
  ),
}
