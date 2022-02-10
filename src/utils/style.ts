import { useCssModule } from '@vue/runtime-dom'

export function $mc(...args: (string | boolean)[]) {
  const styles = useCssModule()
  const classes = []

  let prevClass = ""
  let shouldPush = false

  for (let argument of args) {
    if (typeof argument !== 'string') {
      shouldPush = argument

      continue
    }

    if (shouldPush) {
      classes.push(prevClass)
    }

    prevClass = styles[argument]
    shouldPush = true
  }

  if (shouldPush) {
    classes.push(prevClass)
  }

  return classes
}