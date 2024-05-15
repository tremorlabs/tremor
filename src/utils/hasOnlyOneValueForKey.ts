// Tremor Raw hasOnlyOneValueForKey [v0.0.0]

export function hasOnlyOneValueForKey(
  array: any[],
  keyToCheck: string,
): boolean {
  let value: any = undefined
  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      if (value === undefined) {
        value = obj[keyToCheck]
      } else if (value !== obj[keyToCheck]) {
        return false
      }
    }
  }
  return true
}
