// Tremor Textarea [v1.0.0]

import React from "react"

import { cx } from "../../utils/cx"
import { focusInput } from "../../utils/focusInput"
import { hasErrorInput } from "../../utils/hasErrorInput"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }: TextareaProps, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={cx(
          // base
          "flex min-h-[4rem] w-full rounded-md border px-3 py-1.5 shadow-xs outline-hidden transition-colors sm:text-sm",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-300 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
          // placeholder color
          "placeholder-gray-400 dark:placeholder-gray-500",
          // disabled
          "disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-300",
          "dark:disabled:border-gray-700 dark:disabled:bg-gray-800 dark:disabled:text-gray-500",
          // focus
          focusInput,
          // error
          hasError ? hasErrorInput : "",
          // invalid (optional)
          // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
          className,
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  },
)

Textarea.displayName = "Textarea"

export { Textarea, type TextareaProps }
