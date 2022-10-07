/**
 *
 * The program is a run program that splits an
 * array and finds the most used charactor.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-07
 */

import promptSync from 'prompt-sync'

<<<<<<< HEAD
function runCalculation(runWord: String) {
  let maxChar = ''
  let count = 0

  userInput.split('').forEach((value) => {
    let charCount = userInput.split(value).length - 1
    if (count < charCount) {
      count = charCount
      maxChar = value
=======
// paramaters for my runCalculation function
/**
 * This function finds the run in the userInput
 *
 * @param {string} runWord is the userInput.
 * @returns {number} maxChar max charactor in string.
 */
function runCalculation(runWord: string): number {
  // variable holders for run
  // calculation
  let maxChar = 0
  let count = 0

  // This function is where the max run is calculated
  // the userInput is split, it find the highest string value
  // than it counts the amounts of charactors and returns it.
  userInput.split('').forEach((value) => {
    const charCount = userInput.split(value).length - 1
    if (count < charCount) {
      count = charCount
      maxChar = count
>>>>>>> ce46c7c (fixes)
    }
  })
  return maxChar
}

const prompt = promptSync()

// program description text
console.log('This is a Run program!')
console.log('This program will calculate the run of STRINGS!')
console.log('STRING EX. xxyyyz, this STRING has a run of 3, the letter is Y!')
<<<<<<< HEAD
console.log(
  'INTEGER EX. 001112, this INTEGER has a run of 3, the integer is 0!'
)
const userInput = prompt('Enter your run: ')
const runWord = userInput
=======

// let userInput their string, and it checks the most
// used charactor within the text!
const userInput = prompt('Enter your run: ')
>>>>>>> ce46c7c (fixes)

// this is where the userInput gets passed
// to the function
const runWord = userInput

// this is the max charactor
// within the program
const maxChar = runCalculation(runWord)

<<<<<<< HEAD
console.log('\nDone!')

// checks if input is valid
//if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
// bot gets random number from 1 - 3.
//const MAX = 3
//const MIN = 1

// generates random number
//const randomNumber = Math.floor(Math.random() * MAX) + MIN
//let botPlayer = String(randomNumber)

// program converts number to rock, paper, scissors.
//if (randomNumber === 1) {
//botPlayer = 'rock'
//} else if (randomNumber === 2) {
//botPlayer = 'paper'
//} else {
//botPlayer = 'scissors'
//}

// program goes through combinations, and checks if the userInput
// wins, loses, or ties the botPlayer.
//if (botPlayer === userInput) {
//  console.log('It was a tie! ${botPlayer} equals ${userInput}!')
//} else if (
// (botPlayer === 'paper' && userInput === 'rock') ||
//(botPlayer === 'scissors' && userInput === 'paper') ||
//  (botPlayer === 'rock' && userInput === 'scissors')
//) {
//  console.log('botPlayer wins! ${botPlayer} beats ${userInput}!')
//} else {
//  console.log('User wins! ${userInput} beats ${botPlayer}!')
//}
//} else {
// catch if an input is invalid
//console.log('Invalid Input')
//}
//console.log('\nDone.')
=======
// this outputs what the highest number is
console.log('Calculating ...')
console.log(`The highest run is ${maxChar}!`)

// program end.
console.log('\nDone!')
>>>>>>> ce46c7c (fixes)
