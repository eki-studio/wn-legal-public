import { gsap } from '@/animations/config'
import clsx from 'clsx'

/**
 * Generates a random identifier with a fixed prefix and a custom suffix.
 *
 * @param {number} length - The desired length of the random string.
 * @param {string} suffix - A custom suffix to append to the random string.
 * @returns {string} - A random string of characters with the specified length, prefix, and suffix.
 */

interface CreateID {
  length?: number
  suffix?: string
}

export default function createID({ length, suffix }: CreateID): string {
  length = length || 4
  const composeSuffix = clsx(suffix ? `${suffix}_` : '')

  // Define a string containing all possible characters for the random string.
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  // Initialize the random string with the "eki_" prefix and the provided suffix.
  let randomString = `eki_${composeSuffix}`

  // Generate random characters and append them to the random string.
  for (let i = 0; i < length; i++) {
    // Generate a random index within the valid range of characters.
    const randomIndex = gsap.utils.random(0, characters.length - 1)

    // Append the randomly selected character to the random string.
    randomString += characters.charAt(randomIndex)
  }

  // Return the generated random string.
  return randomString
}
