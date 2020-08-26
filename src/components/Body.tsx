import React, { FunctionComponent, useState } from 'react'

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
  const [score, setScore] = useState(0)
  const [currentWord, setCurrentWord] = useState<string | null>(fifteenWords[0])
  const [isReady, setIsReady] = useState(false)

  const showNextWord = () => {
    if (
      typeof currentWord === 'string' &&
      fifteenWords.indexOf(currentWord) < 14
    ) {
      setCurrentWord(fifteenWords[fifteenWords.indexOf(currentWord) + 1])
    } else {
      setCurrentWord(null)
    }
  }

  return (
    <>
      <h2>Ready?</h2>
      <p>Song time!!!</p>
      <ul>
        {fifteenWords.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
      {isReady && currentWord ? (
        <>
          <p>{currentWord}</p>
          <button
            onClick={() => {
              setScore(score + 1)
              showNextWord()
            }}
          >
            yes
          </button>
          <button onClick={showNextWord}>no</button>
          <aside>{score}/15</aside>
        </>
      ) : (
        <button onClick={() => setIsReady(true)}>go</button>
      )}
      {currentWord === null && (
        <>
          <p>nice, well done</p>
          <p>{score}/15</p>
        </>
      )}
    </>
  )
}
