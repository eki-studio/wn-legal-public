/**
 * Replaces variables in a string based on the provided context.
 * @param c The context object containing the variables.
 * @param value The string value to replace variables in.
 * @returns The string with variables replaced.
 */

/* eslint-disable */

function replaceVars(c: gsap.Context, value: string): string {
  return typeof value === 'string' && value.includes('||')
    ? c?.conditions?.desktop
      ? value.split('||')[0].trim()
      : value.split('||')[1].trim()
    : value
}

/**
 * Recursively creates context variables by replacing variables in the provided animation variables object.
 * @param c The context object containing the variables.
 * @param animVars The animation variables object to replace variables in.
 * @returns The animation variables object with variables replaced.
 */
function createContextVars(
  c: gsap.Context,
  animVars?: gsap.TweenVars
): gsap.TweenVars {
  if (!animVars) return {}
  const replacedVars: gsap.TweenVars = { ...animVars }

  for (const key in replacedVars) {
    replacedVars[key] = replaceVars(c, replacedVars[key])

    if (typeof replacedVars[key] === 'object') {
      replacedVars[key] = createContextVars(
        c,
        replacedVars[key] as gsap.TweenVars
      )
    }
  }

  return replacedVars
}

export default createContextVars
