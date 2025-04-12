// Tremor SelectNative [v1.0.0]

import React from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cx } from "../../utils/cx"
import { focusInput } from "../../utils/focusInput"
import { hasErrorInput } from "../../utils/hasErrorInput"

const selectNativeStyles = tv({
  base: [
    // base
    "peer w-full cursor-pointer appearance-none truncate rounded-md border py-2 pl-3 pr-7 shadow-xs outline-hidden transition-all sm:text-sm",
    // background color
    "bg-white dark:bg-gray-950",
    // border color
    "border-gray-300 dark:border-gray-800",
    // text color
    "text-gray-900 dark:text-gray-50",
    // placeholder color
    "placeholder-gray-400 dark:placeholder-gray-500",
    // hover
    "hover:bg-gray-50 dark:hover:bg-gray-950/50",
    // disabled
    "disabled:pointer-events-none",
    "disabled:bg-gray-100 disabled:text-gray-400",
    "dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:text-gray-500",
    // focus
    focusInput,
    // invalid (optional)
    // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
  },
})

interface SelectNativeProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectNativeStyles> {}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, hasError, ...props }: SelectNativeProps, forwardedRef) => {
    return (
      <select
        ref={forwardedRef}
        className={cx(selectNativeStyles({ hasError }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  },
)

SelectNative.displayName = "SelectNative"

export { SelectNative, selectNativeStyles, type SelectNativeProps }
