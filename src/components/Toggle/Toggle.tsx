// Tremor Toggle [v0.0.0]
"use client"

import React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

import { cx } from "../../utils/cx"
import { focusRing } from "../../utils/focusRing"

const toggleStyles = [
  // base
  "group inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md border px-2 text-sm font-medium shadow-sm transition-all duration-100 ease-in-out",
  "border-gray-300 dark:border-gray-800",
  // text color
  "text-gray-700 dark:text-gray-300",
  // background color
  "bg-white dark:bg-gray-950",
  //hover color
  "hover:bg-gray-50 dark:hover:bg-gray-900/60",
  // disabled
  "disabled:pointer-events-none disabled:text-gray-400 disabled:dark:text-gray-600",
  "data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-gray-50",
  focusRing,
]

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cx(toggleStyles, className)}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cx("flex items-center justify-center gap-1 flex-nowrap", className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cx(toggleStyles, className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
))

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
