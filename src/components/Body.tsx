import React, { FunctionComponent } from 'react'

import words from '../words'

// generate 15 random numbers between 0 and (words.length - 1)
const randomNumbers: number[] = []

do {
  // is this legit?
  const rando = Math.floor(Math.random() * words.length) - 1
  if (!randomNumbers.includes(rando)) {
    randomNumbers.push(rando)
  }
} while (randomNumbers.length < 15)

const fifteenWords: string[] = words.filter((word, i) => {
  return randomNumbers.includes(i)
})

console.log(randomNumbers)
console.log(fifteenWords)

export const Body: FunctionComponent = () => {
  return (
    <>
      <h2>Ready?</h2>
      <p>Song time!!!</p>
      <ul>
        {fifteenWords.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
    </>
  )
}
