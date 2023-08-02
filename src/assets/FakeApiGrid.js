import { words } from "./words"
import { getRandomArbitrary, shuffleArray } from "../utils/utils"

export const wordList = () => {
  let wordsLabels = words

  const wordLabelsList = Array.apply(null, Array(25)).map(() => {
    const randomNumber = getRandomArbitrary(0, wordsLabels.length)
    const label = wordsLabels[randomNumber]
    wordsLabels = wordsLabels.filter((value) => value !== label)

    return label
  })

  const pinkList = wordLabelsList
    .filter((_, index) => index < 9)
    .map((label) => {
      return {
        label: label,
        teamColor: "pink",
      }
    })
  const blueList = wordLabelsList
    .filter((_, index) => index > 8 && index < 17)
    .map((label) => {
      return {
        label: label,
        teamColor: "blue",
      }
    })

  const whiteList = wordLabelsList
    .filter((_, index) => index > 16 && index < 24)
    .map((label) => {
      return {
        label: label,
        teamColor: "white",
      }
    })

  const blackList = wordLabelsList
    .filter((_, index) => index > 23)
    .map((label) => {
      return {
        label: label,
        teamColor: "black",
      }
    })
  return {
    pinkList: pinkList,
    blueList: blueList,
    whiteList: whiteList,
    blackList: blackList,
    shuffle: shuffleArray([
      ...pinkList,
      ...blueList,
      ...whiteList,
      ...blackList,
    ]),
  }
}
