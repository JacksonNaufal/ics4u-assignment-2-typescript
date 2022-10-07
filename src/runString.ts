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

function runCalculation(runWord: String) {
  let maxChar = ''
  let count = 0

  userInput.split('').forEach((value) => {
    let charCount = userInput.split(value).length - 1
    if (count < charCount) {
      count = charCount
      maxChar = value
    }
  })
  return maxChar
}

const prompt = promptSync()

// let userInput their string, and it checks the most
// used charactar within the text
console.log('This is a Run program!')
console.log('This program will calculate the run of STRINGS or INTEGERS!')
console.log('STRING EX. xxyyyz, this STRING has a run of 3, the letter is Y!')
console.log(
  'INTEGER EX. 001112, this INTEGER has a run of 3, the integer is 0!'
)
const userInput = prompt('Enter your run: ')
const runWord = userInput

const maxChar = runCalculation(runWord)
console.log(`The highest used charactor is ${maxChar}!`)

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
