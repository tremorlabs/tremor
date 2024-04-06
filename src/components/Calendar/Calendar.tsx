"use client"

import * as React from "react"
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react"
import { addYears, format, isSameMonth } from "date-fns"
import {
  DayPicker,
  useDayPicker,
  useDayRender,
  useNavigation,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
} from "react-day-picker"

import { cx } from "../../utils/cx"
import { focusRing } from "../../utils/focusRing"

interface NavigationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  icon: React.ElementType
  disabled?: boolean
}

const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(
  (
    { onClick, icon, disabled, ...props }: NavigationButtonProps,
    forwardedRef,
  ) => {
    const Icon = icon
    return (
      <button
        ref={forwardedRef}
        type="button"
        disabled={disabled}
        className={cx(
          "flex size-8 shrink-0 select-none items-center justify-center rounded border p-1 outline-none transition sm:size-7",
          // text color
          "text-gray-600 hover:text-gray-800",
          "dark:text-gray-400 hover:dark:text-gray-200",
          // border color
          "border-gray-300 dark:border-gray-700",
          // background color
          "hover:bg-gray-50 active:bg-gray-100",
          "hover:dark:bg-gray-900 active:dark:bg-gray-800",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-gray-200 disabled:dark:border-gray-800",
          "disabled:text-gray-400 disabled:dark:text-gray-600",
          focusRing,
        )}
        onClick={onClick}
        {...props}
      >
        <Icon className="size-full shrink-0" />
      </button>
    )
  },
)

NavigationButton.displayName = "NavigationButton"

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode"

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>

type CalendarProps =
  | ({
      mode: "single"
    } & SingleProps)
  | ({
      mode?: undefined
    } & SingleProps)
  | ({
      mode: "range"
    } & RangeProps)

const Calendar = ({
  mode = "single",
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation,
  locale,
  className,
  classNames,
  ...props
}: CalendarProps & { enableYearNavigation?: boolean }) => {
  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1 ? true : false}
      className={cx(className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-0",
        month: "space-y-4 p-2",
        nav: "gap-1 flex items-center rounded-full size-full justify-between p-4",
        table: "w-full border-collapse space-y-1",
        head_cell:
          "w-9 font-normal text-center text-gray-400 dark:text-gray-600 pb-1",
        row: "w-full mt-0.5",
        cell: cx(
          "relative p-0 text-center focus-within:relative",
          "text-gray-900 dark:text-gray-50",
        ),
        day: cx(
          "size-9 rounded p-0",
          "hover:bg-gray-200 hover:dark:bg-gray-700",
          focusRing,
        ),
        day_today: "font-semibold",
        day_selected: cx(
          " rounded",
          "aria-selected:bg-gray-900 aria-selected:text-white",
          "dark:aria-selected:bg-gray-50 dark:aria-selected:text-gray-900",
        ),
        day_disabled:
          "!text-gray-300 dark:!text-gray-700 line-through disabled:hover:bg-transparent",
        day_outside: "text-gray-400 dark:text-gray-600",
        day_range_middle: cx(
          "!rounded-none",
          "aria-selected:!bg-gray-100 aria-selected:!text-gray-400",
          "dark:aria-selected:!bg-gray-800 dark:aria-selected:!text-gray-600",
        ),
        day_range_start: "rounded-r-none !rounded-l",
        day_range_end: "rounded-l-none !rounded-r",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <RiArrowLeftSLine className="size-4" />,
        IconRight: () => <RiArrowRightSLine className="size-4" />,
        Caption: ({ ...props }) => {
          const {
            goToMonth,
            nextMonth,
            previousMonth,
            currentMonth,
            displayMonths,
          } = useNavigation()

          const displayIndex = displayMonths.findIndex((month) =>
            isSameMonth(props.displayMonth, month),
          )
          const { numberOfMonths, fromDate, toDate } = useDayPicker()
          const isFirst = displayIndex === 0
          const isLast = displayIndex === displayMonths.length - 1
          const hideNext = numberOfMonths > 1 && (isFirst || !isLast)
          const hidePrevious = numberOfMonths > 1 && (isLast || !isFirst)

          return (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {enableYearNavigation && !hidePrevious && (
                  <NavigationButton
                    disabled={disableNavigation || !previousMonth || (fromDate && addYears(currentMonth, -1).getTime() < fromDate?.getTime())}
                    aria-label="Go to previous year"
                    onClick={() =>
                      previousMonth && (!fromDate || addYears(currentMonth, -1).getTime() >= fromDate?.getTime()) && goToMonth(addYears(currentMonth, -1))
                    }
                    icon={RiArrowLeftDoubleLine}
                  />
                )}
                {!hidePrevious && (
                  <NavigationButton
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous month"
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                    icon={RiArrowLeftSLine}
                  />
                )}
              </div>

              <div
                role="presentation"
                aria-live="polite"
                className="text-sm font-medium capitalize tabular-nums text-gray-900 dark:text-gray-50"
              >
                {format(props.displayMonth, "LLLL yyy", { locale })}
              </div>

              <div className="flex items-center gap-1">
                {!hideNext && (
                  <NavigationButton
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next month"
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                    icon={RiArrowRightSLine}
                  />
                )}
                {enableYearNavigation && !hideNext && (
                  <NavigationButton
                    disabled={disableNavigation || !nextMonth || (toDate && addYears(currentMonth, 1).getTime() > toDate?.getTime())}
                    aria-label="Go to next year"
                    onClick={() =>
                      nextMonth && (!toDate || addYears(currentMonth, 1).getTime() <= toDate?.getTime()) && goToMonth(addYears(currentMonth, 1))
                    }
                    icon={RiArrowRightDoubleLine}
                  />
                )}
              </div>
            </div>
          )
        },
        Day: ({ date, displayMonth }: DayProps) => {
          const ref = React.useRef<HTMLButtonElement>(null)
          const { activeModifiers, buttonProps, divProps, isButton, isHidden } =
            useDayRender(date, displayMonth, ref)

          const { selected, today, disabled, range_middle } = activeModifiers

          React.useEffect(() => {
            if (selected) {
              ref.current?.focus()
            }
          }, [selected])

          if (isHidden) {
            return <></>
          }

          if (!isButton) {
            return (
              <div
                {...divProps}
                className={cx(
                  "flex items-center justify-center",
                  divProps.className,
                )}
              />
            )
          }

          const {
            children: buttonChildren,
            className: buttonClassName,
            ...buttonPropsRest
          } = buttonProps

          return (
            <button
              ref={ref}
              {...buttonPropsRest}
              type="button"
              className={cx("relative", buttonClassName)}
            >
              {buttonChildren}
              {today && (
                <span
                  className={cx(
                    "absolute inset-x-1/2 bottom-1.5 h-0.5 w-4 -translate-x-1/2 rounded-[2px]",
                    {
                      "bg-blue-500": !selected,
                      "!bg-white dark:!bg-gray-950": selected,
                      "!bg-gray-400 dark:!bg-gray-600":
                        selected && range_middle,
                      "text-gray-400 dark:text-gray-600": disabled,
                    },
                  )}
                />
              )}
            </button>
          )
        },
      }}
      {...(props as SingleProps & RangeProps)}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
