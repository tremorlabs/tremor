// Tremor Raw Tracker [v0.0.0]

import React from "react"
import * as HoverCardPrimitives from "@radix-ui/react-hover-card"

import { cx } from "../../utils/cx"

interface TrackerBlockProps {
  key?: string | number
  color?: string
  tooltip?: string
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
}: TrackerBlockProps & {
  defaultBackgroundColor?: string
}) => {
  return (
    <HoverCardPrimitives.Root openDelay={0} closeDelay={0}>
      <HoverCardPrimitives.Trigger asChild>
        <div
          className={cx(
            "h-full w-full rounded-[1px] first:rounded-l-[4px] last:rounded-r-[4px]",
            color || defaultBackgroundColor,
          )}
        />
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            // base
            "w-auto rounded-md px-2 py-1 text-sm shadow-md",
            // text color
            "text-white dark:text-gray-900",
            // background color
            "bg-gray-900 dark:bg-gray-50",
          )}
        >
          {tooltip}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
  defaultBackgroundColor?: string
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx(
          "flex h-10 w-full items-center gap-px sm:gap-0.5",
          className,
        )}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            {...props}
          />
        ))}
      </div>
    )
  },
)

Block.displayName = "Tracker"

export { Tracker, type TrackerBlockProps }
