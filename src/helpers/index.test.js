import {getLetterMatchCount} from './index'

describe('getLetterMatchCount', () => {
  it('returns 4 when guessWord "money", secretWord "onely', () => {
    expect(getLetterMatchCount('money', 'onely')).toEqual(4) 
  })
  it('returns 0 when no matching letter', () => {
    expect(getLetterMatchCount('happy', 'tried')).toEqual(0)
  })
  it('returns correct count when duplicate letter', () => {
    expect(getLetterMatchCount('happy', 'party')).toBe(3)
  })
}) 