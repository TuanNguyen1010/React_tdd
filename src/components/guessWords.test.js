import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../test/testUtils'
import GuessWords from './guessWords';

const MockProps = {
  guessedWords: [
  {guessedWord: 'happy',
  letterMatch: 3
  }]
}

const setup = (props={}) => {
  const setupProps = {...MockProps, ...props}
  return shallow(<GuessWords{...setupProps}/>)
}

describe('Guess words', () => {
  it('should have functionatilty', () => {
    expect(typeof GuessWords).toBe('function')
  })
  it('does not throw error when valid props passed through', () => {
    checkProps(GuessWords, MockProps)
  })
})