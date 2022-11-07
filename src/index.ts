/**
 * The program reverses the string
 * using recursion.
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * reverseString
 *
 * @param {string} str accepts a string
 * @returns {string} the string backwards, using recursion.
 */
function reverseString(str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

// Input
const stringInput = prompt('Enter a string: ')

// Process and Output
console.log()
console.log(`The original string is: ${stringInput}`)
console.log(`The reversed string is: ${reverseString(stringInput)}`)

console.log('\nDone.')
