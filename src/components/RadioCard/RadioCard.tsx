// Tremor Raw Radio Card [v0.0.0]

import React from "react"
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group"

import { cx } from "../../utils/cx"
import { focusInput } from "../../utils/focusInput"
import { focusRing } from "../../utils/focusRing"

const RadioCardGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={cx("grid gap-2", className)}
      {...props}
    />
  )
})
RadioCardGroup.displayName = "RadioCardGroup"

const RadioCardGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      className={cx(
        // base
        "relative flex size-4 shrink-0  appearance-none items-center justify-center rounded-full border shadow-sm outline-none",
        // border color
        " border-gray-300 dark:border-gray-800",
        // background color
        "bg-white dark:bg-gray-950",
        // checked
        "group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500",
        // disabled
        "group-data-[disabled]:border",
        "group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400",
        "group-data-[disabled]:dark:border-gray-700 group-data-[disabled]:dark:bg-gray-800",
        // focus
        focusRing,
      )}
    >
      <RadioGroupPrimitives.Indicator
        ref={forwardedRef}
        className={cx("flex items-center justify-center", className)}
        {...props}
      >
        <div
          className={cx(
            // base
            "size size-1.5 shrink-0 rounded-full",
            // indicator
            "bg-white",
            // disabled
            "group-data-[disabled]:bg-gray-400 group-data-[disabled]:dark:bg-gray-500",
          )}
        />
      </RadioGroupPrimitives.Indicator>
    </div>
  )
})
RadioCardGroupIndicator.displayName = "RadioCardGroupIndicator"

const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={cx(
        // base
        "group relative w-full rounded-md border p-6 text-left shadow-sm focus:outline-none",
        // background color
        " bg-white dark:bg-[#090E1A]",
        // border color
        "border-gray-200 dark:border-gray-900",
        "data-[state=checked]:border-blue-500",
        "data-[state=checked]:bg-blue-50",
        focusInput,
        className,
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitives.Item>
  )
})
RadioCardItem.displayName = "RadioCardItem"

export { RadioCardGroup, RadioCardGroupIndicator, RadioCardItem }
