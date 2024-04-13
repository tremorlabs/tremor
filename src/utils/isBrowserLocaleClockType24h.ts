export const isBrowserLocaleClockType24h = () => {
  const language =
    typeof window !== "undefined" ? window.navigator.language : "en-US"

  const hr = new Intl.DateTimeFormat(language, {
    hour: "numeric",
  }).format()

  return Number.isInteger(Number(hr))
}
