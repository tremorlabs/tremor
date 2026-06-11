// Tremor Calendar [v1.0.0]

"use client"

import * as React from "react"
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react"
import { addYears, format } from "date-fns"
import {
  DayPicker,
  useDayPicker,
  type DayButtonProps,
  type Matcher,
  type MonthCaptionProps,
  type PropsBase,
  type PropsRange,
  type PropsSingle,
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
          "flex size-8 shrink-0 items-center justify-center rounded-sm border p-1 outline-hidden transition select-none sm:size-[30px]",
          // text color
          "text-gray-600 hover:text-gray-800",
          "dark:text-gray-400 dark:hover:text-gray-200",
          // border color
          "border-gray-300 dark:border-gray-800",
          // background color
          "hover:bg-gray-50 active:bg-gray-100",
          "dark:hover:bg-gray-900 dark:active:bg-gray-800",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-gray-200 dark:disabled:border-gray-800",
          "disabled:text-gray-400 dark:disabled:text-gray-600",
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

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode" | "required"

// legacy prop names (react-day-picker v8) kept for API compatibility
type LegacyProps = {
  fromDate?: Date
  toDate?: Date
  initialFocus?: boolean
  required?: boolean
}

type SingleProps = OmitKeys<PropsBase & PropsSingle, KeysToOmit> & LegacyProps
type RangeProps = OmitKeys<PropsBase & PropsRange, KeysToOmit> & LegacyProps

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
  fromDate,
  toDate,
  initialFocus,
  required,
  ...props
}: CalendarProps & { enableYearNavigation?: boolean }) => {
  const MonthCaption = ({ calendarMonth, displayIndex }: MonthCaptionProps) => {
    const { goToMonth, nextMonth, previousMonth, months } = useDayPicker()

    const currentMonth = months[0].date
    const isFirst = displayIndex === 0
    const isLast = displayIndex === months.length - 1

    const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast)
    const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst)

    const goToPreviousYear = () => {
      const targetMonth = addYears(currentMonth, -1)
      if (
        previousMonth &&
        (!fromDate || targetMonth.getTime() >= fromDate.getTime())
      ) {
        goToMonth(targetMonth)
      }
    }

    const goToNextYear = () => {
      const targetMonth = addYears(currentMonth, 1)
      if (
        nextMonth &&
        (!toDate || targetMonth.getTime() <= toDate.getTime())
      ) {
        goToMonth(targetMonth)
      }
    }

    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {enableYearNavigation && !hidePreviousButton && (
            <NavigationButton
              disabled={
                disableNavigation ||
                !previousMonth ||
                (fromDate &&
                  addYears(currentMonth, -1).getTime() < fromDate.getTime())
              }
              aria-label="Go to previous year"
              onClick={goToPreviousYear}
              icon={RiArrowLeftDoubleLine}
            />
          )}
          {!hidePreviousButton && (
            <NavigationButton
              disabled={disableNavigation || !previousMonth}
              aria-label="Go to previous month"
              onClick={() => previousMonth && goToMonth(previousMonth)}
              icon={RiArrowLeftSLine}
            />
          )}
        </div>

        <div
          aria-live="polite"
          className="text-sm font-medium text-gray-900 capitalize tabular-nums dark:text-gray-50"
        >
          {format(calendarMonth.date, "LLLL yyy", {
            locale: locale as never,
          })}
        </div>

        <div className="flex items-center gap-1">
          {!hideNextButton && (
            <NavigationButton
              disabled={disableNavigation || !nextMonth}
              aria-label="Go to next month"
              onClick={() => nextMonth && goToMonth(nextMonth)}
              icon={RiArrowRightSLine}
            />
          )}
          {enableYearNavigation && !hideNextButton && (
            <NavigationButton
              disabled={
                disableNavigation ||
                !nextMonth ||
                (toDate &&
                  addYears(currentMonth, 1).getTime() > toDate.getTime())
              }
              aria-label="Go to next year"
              onClick={goToNextYear}
              icon={RiArrowRightDoubleLine}
            />
          )}
        </div>
      </div>
    )
  }

  const CalendarDayButton = ({
    day,
    modifiers,
    className: buttonClassName,
    children,
    ...buttonProps
  }: DayButtonProps) => {
    const { selected, today, disabled, range_middle } = modifiers

    return (
      <button
        {...buttonProps}
        type="button"
        className={cx("relative", buttonClassName)}
      >
        {children}
        {today && (
          <span
            className={cx(
              "absolute inset-x-1/2 bottom-1.5 h-0.5 w-4 -translate-x-1/2 rounded-[2px]",
              {
                "bg-blue-500 dark:bg-blue-500": !selected,
                "bg-white! dark:bg-gray-950!": selected,
                "bg-gray-400! dark:bg-gray-600!": selected && range_middle,
                "bg-gray-400 text-gray-400 dark:bg-gray-400 dark:text-gray-600":
                  disabled,
              },
            )}
          />
        )}
      </button>
    )
  }

  return (
    <DayPicker
      mode={mode as never}
      required={required as never}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      startMonth={fromDate}
      endMonth={toDate}
      autoFocus={initialFocus}
      hideNavigation
      className={cx(className)}
      classNames={{
        months: "flex space-y-0",
        month: "space-y-4 p-3",
        month_caption: "w-full",
        month_grid: "w-full border-collapse space-y-1",
        weekday:
          "w-9 font-medium text-sm sm:text-xs text-center text-gray-400 dark:text-gray-600 pb-2",
        week: "w-full mt-0.5",
        day: cx(
          "relative p-0 text-center focus-within:relative",
          "text-gray-900 dark:text-gray-50",
        ),
        day_button: cx(
          "size-9 rounded-sm text-sm focus:z-10",
          "text-gray-900 dark:text-gray-50",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
          focusRing,
        ),
        today: "font-semibold",
        selected: cx(
          "rounded-sm",
          "[&>button]:bg-blue-500 [&>button]:text-white",
          "dark:[&>button]:bg-blue-500 dark:[&>button]:text-white",
        ),
        disabled:
          "text-gray-300! dark:text-gray-700! line-through [&>button]:hover:bg-transparent",
        outside: "text-gray-400 dark:text-gray-600",
        range_middle: cx(
          "rounded-none!",
          "[&>button]:rounded-none! [&>button]:bg-gray-100! [&>button]:text-gray-900!",
          "dark:[&>button]:bg-gray-900! dark:[&>button]:text-gray-50!",
        ),
        range_start: "rounded-r-none rounded-l! [&>button]:rounded-r-none",
        range_end: "rounded-l-none rounded-r! [&>button]:rounded-l-none",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        MonthCaption,
        DayButton: CalendarDayButton,
      }}
      tremor-id="tremor-raw"
      {...(props as Omit<SingleProps & RangeProps, keyof LegacyProps>)}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar, type Matcher }
