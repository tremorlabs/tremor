// Tremor Raw Divider [v0.0.1]

import React from "react"

import { cx } from "../../utils/cx"

interface DividerProps extends React.ComponentPropsWithoutRef<"div"> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cx(
        // base
        "mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm",
        // text color
        "text-gray-500 dark:text-gray-500",
        className,
      )}
      {...props}
    >
      {children ? (
        <>
          <div
            className={cx(
              // base
              "h-[1px] w-full",
              // background color
              "bg-gray-200 dark:bg-gray-800",
            )}
          />
          <div className="whitespace-nowrap text-inherit">{children}</div>
          <div
            className={cx(
              // base
              "h-[1px] w-full",
              // background color
              "bg-gray-200 dark:bg-gray-800",
            )}
          />
        </>
      ) : (
        <div
          className={cx(
            // base
            "h-[1px] w-full",
            // background color
            "bg-gray-200 dark:bg-gray-800",
          )}
        />
      )}
    </div>
  ),
)

Divider.displayName = "Divider"

export { Divider }
