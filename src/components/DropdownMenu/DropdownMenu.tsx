// Tremor Raw Dropdown Menu [v0.0.0]

"use client"

import * as React from "react"
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu"
import {
  RiArrowRightSLine,
  RiCheckLine,
  RiRadioButtonFill,
} from "@remixicon/react"

import { cx } from "../../utils/cx"

const DropdownMenu = DropdownMenuPrimitives.Root
DropdownMenu.displayName = "DropdownMenu"

const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuGroup = DropdownMenuPrimitives.Group
DropdownMenuGroup.displayName = "DropdownMenuGroup"

const DropdownMenuSubMenu = DropdownMenuPrimitives.Sub
DropdownMenuSubMenu.displayName = "DropdownMenuSubMenu"

const DropdownMenuRadioGroup = DropdownMenuPrimitives.RadioGroup
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

const DropdownMenuSubMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubTrigger>
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.SubTrigger
    ref={forwardedRef}
    className={cx(
      // base
      "relative flex cursor-default select-none items-center gap-x-2 rounded px-3 py-1.5 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 data-[state=open]:bg-gray-100  focus-visible:dark:bg-gray-900 data-[state=open]:dark:bg-gray-900",
      // hover
      "hover:bg-gray-100 hover:dark:bg-gray-900",
      //
      className,
    )}
    {...props}
  >
    {children}
    <RiArrowRightSLine className="ml-auto size-4 shrink-0 " />
  </DropdownMenuPrimitives.SubTrigger>
))
DropdownMenuSubMenuTrigger.displayName = "DropdownMenuSubMenuTrigger"

const DropdownMenuSubMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubContent>
>(({ className, collisionPadding = 8, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Portal>
    <DropdownMenuPrimitives.SubContent
      ref={forwardedRef}
      collisionPadding={collisionPadding}
      className={cx(
        // base
        "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
        // widths
        "min-w-fit",
        // heights
        "max-h-[var(--radix-popper-available-height)]",
        // background color
        "bg-white dark:bg-gray-950",
        // text color
        "text-gray-900 dark:text-gray-50",
        // border color
        "border-gray-300 dark:border-gray-800",
        // transition
        "will-change-[transform,opacity]",
        // "data-[state=open]:animate-slideDownAndFade",
        "data-[state=closed]:animate-hide",
        "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitives.Portal>
))
DropdownMenuSubMenuContent.displayName = "DropdownMenuSubMenuContent"

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Content>
>(
  (
    {
      className,
      sideOffset = 8,
      collisionPadding = 8,
      align = "center",
      loop = true,
      ...props
    },
    forwardedRef,
  ) => (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        ref={forwardedRef}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "min-w-[calc(var(--radix-dropdown-menu-trigger-height))]",
          // heights
          "max-h-[var(--radix-popper-available-height)]",
          // background color
          "bg-white dark:bg-gray-950",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-300 dark:border-gray-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className,
        )}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        loop={loop}
        {...props}
      />
    </DropdownMenuPrimitives.Portal>
  ),
)
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Item> & {
    shortcut?: string
    hint?: string
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "group/DropdownMenuItem relative flex cursor-pointer select-none items-center gap-x-2 rounded px-3 py-1.5 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
      // hover
      "hover:bg-gray-100 hover:dark:bg-gray-900",
      className,
    )}
    {...props}
  >
    {children}
    {hint && (
      <span className={cx("ml-auto text-gray-400 sm:text-sm")}>{hint}</span>
    )}
    {shortcut && (
      <span
        className={cx(
          "ml-auto rounded border border-gray-200 px-1 py-0.5 text-xs font-medium tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-400",
        )}
      >
        {shortcut}
      </span>
    )}
  </DropdownMenuPrimitives.Item>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.CheckboxItem> & {
    shortcut?: string
    hint?: string
  }
>(
  (
    { className, hint, shortcut, children, checked, ...props },
    forwardedRef,
  ) => (
    <DropdownMenuPrimitives.CheckboxItem
      ref={forwardedRef}
      className={cx(
        // base
        "relative flex cursor-pointer select-none items-center gap-x-2 rounded px-3 py-1.5 pl-9 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:pointer-events-none  data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
        // focus
        "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
        // hover
        "hover:bg-gray-100 hover:dark:bg-gray-900",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-3 flex size-4 items-center justify-center">
        <DropdownMenuPrimitives.ItemIndicator>
          <RiCheckLine className="size-full shrink-0 text-blue-500 dark:text-blue-500" />
        </DropdownMenuPrimitives.ItemIndicator>
      </span>
      {children}
      {hint && (
        <span className={cx("ml-auto text-gray-400 sm:text-sm")}>{hint}</span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto rounded border border-gray-200 px-1 py-0.5 text-xs font-medium tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-400",
          )}
        >
          {shortcut}
        </span>
      )}
    </DropdownMenuPrimitives.CheckboxItem>
  ),
)
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.RadioItem> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.RadioItem
    ref={forwardedRef}
    className={cx(
      // base
      "relative flex cursor-pointer select-none items-center gap-x-2 rounded px-3 py-1.5 pl-9 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-[disabled]:pointer-events-none  data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
      // hover
      "hover:bg-gray-100 hover:dark:bg-gray-900",
      className,
    )}
    {...props}
  >
    <span className="absolute left-3 flex size-4 items-center justify-center">
      <DropdownMenuPrimitives.ItemIndicator>
        <RiRadioButtonFill className="size-full shrink-0 text-blue-500 dark:text-blue-500" />
      </DropdownMenuPrimitives.ItemIndicator>
    </span>
    {children}
    {hint && (
      <span className={cx("ml-auto text-gray-400 sm:text-sm")}>{hint}</span>
    )}
    {shortcut && (
      <span
        className={cx(
          "ml-auto rounded border border-gray-200 px-1 py-0.5 text-xs font-medium tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-400",
        )}
      >
        {shortcut}
      </span>
    )}
  </DropdownMenuPrimitives.RadioItem>
))
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Label>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Label
    ref={forwardedRef}
    className={cx(
      // base
      "px-3 py-2 text-xs font-medium tracking-wide",
      // text color
      " text-gray-500 dark:text-gray-500",
      className,
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Separator
    ref={forwardedRef}
    className={cx(
      "-mx-1 my-1 h-px border-t border-gray-300 dark:border-gray-800",
      className,
    )}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

// @sev kick out?
const DropdownMenuIconWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cx(
        // text color
        "text-gray-600 dark:text-gray-400",
        // disabled
        "group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700",
        className,
      )}
      {...props}
    />
  )
}
DropdownMenuIconWrapper.displayName = "DropdownMenuIconWrapper"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuIconWrapper,
  DropdownMenuLabel,
  DropdownMenuSeparator,
}