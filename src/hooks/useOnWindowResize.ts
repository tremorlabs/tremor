// Tremor Raw useOnWindowResize [v0.0.0]

import * as React from "react"

export const useOnWindowResize = (
  handler: { (): void },
  initialWindowSize?: number,
) => {
  const [windowSize, setWindowSize] = React.useState<undefined | number>(
    initialWindowSize,
  )
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
      handler()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [handler, windowSize])
}
