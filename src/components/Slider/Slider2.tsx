"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cx } from "../../utils/cx"
import { focusRing } from "../../utils/focusRing"

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ariaLabelThumb?: string
  showMarks?: string
  marks?: { value: number; label: string }[]
}

const Slider2 = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      ariaLabelThumb,
      showMarks = "none",
      orientation = "horizontal",
      min = 0,
      max = 100,
      step = 1,
      marks = [],
      ...props
    },
    forwardedRef,
  ) => {
    const value = props.value || props.defaultValue
    const numberOfSteps = Math.floor((max - min) / step)
    const stepLines = Array.from(
      { length: numberOfSteps },
      (_, index) => index * step + min,
    )

    return (
      <SliderPrimitive.Root
        ref={forwardedRef}
        className={cx(
          // base
          "relative flex cursor-pointer touch-none select-none",
          // orientation
          "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
          "data-[orientation='vertical']:h-full data-[orientation='vertical']:justify-center",
          // disabled
          "data-[disabled]:pointer-events-none",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cx(
            // base
            "relative grow rounded-full bg-gray-200 dark:bg-gray-800",
            // orientation
            "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
            "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
            // disabled
            "data-[disabled]:bg-gray-100 dark:data-[disabled]:bg-gray-800",
          )}
        >
          <SliderPrimitive.Range
            className={cx(
              // base
              "absolute rounded-full bg-gray-900 dark:bg-gray-50",
              // orientation
              "data-[orientation='horizontal']:h-full",
              "data-[orientation='vertical']:w-full",
              // disabled
              "data-[disabled]:bg-gray-300 dark:data-[disabled]:bg-gray-700",
            )}
          />
          {showMarks !== "none" &&
            marks.map((mark, index) => {
              const positionPercentage =
                ((mark.value - min) / (max - min)) * 100
              const adjustedPosition = 50 + (positionPercentage - 50) * 0.995
              return (
                <div
                  key={index}
                  className={cx(
                    "relative mt-px flex rounded-full",
                    {
                      "size-1": orientation !== "vertical",
                      "size-3": orientation === "vertical",
                    },
                    "absolute bg-white",
                    {
                      "left-0":
                        orientation === "vertical" && showMarks === "full",
                      "top-0":
                        orientation !== "vertical" && showMarks === "full",
                      "-translate-x-1/2 transform": orientation !== "vertical",
                      "-translate-y-1/2 transform": orientation === "vertical",
                    },
                  )}
                  style={{
                    [orientation === "vertical" ? "bottom" : "left"]:
                      `${adjustedPosition}%`,
                  }}
                >
                  <div className="absolute left-0.5 top-3 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600">
                    {mark.label}
                  </div>
                </div>
              )
            })}
        </SliderPrimitive.Track>
        {value?.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cx(
              // base
              "block size-4 shrink-0 rounded-full border-2 shadow transition-all",
              // border color
              "border-gray-900 dark:border-gray-50",
              // background color
              "bg-white dark:bg-gray-50",
              // disabled
              "data-[disabled]:pointer-events-none data-[disabled]:bg-gray-300 dark:data-[disabled]:border-gray-500 dark:data-[disabled]:bg-gray-600",
              focusRing,
              "outline-offset-0",
            )}
            aria-label={ariaLabelThumb}
          />
        ))}
      </SliderPrimitive.Root>
    )
  },
)

Slider2.displayName = SliderPrimitive.Root.displayName

export { Slider2 }
