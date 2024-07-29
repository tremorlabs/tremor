// Tremor Raw Toaster [v0.0.0]

"use client"

import { useToast } from "../../hooks/useToast.ts"
import { Toast, ToastProvider, ToastViewport } from "../Toast/Toast.tsx"

const Toaster = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, ...props }) => {
        return <Toast key={id} {...props} />
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export { Toaster }
