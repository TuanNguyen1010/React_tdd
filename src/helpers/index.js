export function getLetterMatchCount(guessWord, secretWord) {
  var count = 0
  const guessWordSet = [...new Set(guessWord.split(''))]
  guessWordSet.map((letter) => {
    if (secretWord.includes(letter)) {count ++}
  })
  return count
}  