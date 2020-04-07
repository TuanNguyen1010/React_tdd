import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../test/testUtils'
import GuessWords from './guessWords';

describe('Guess words', () => {
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

  let wrapperWithoutGuess
  let wrapperWithOneGuess
  beforeEach(() => {
    wrapperWithoutGuess = setup({guessedWords:[]})
    wrapperWithOneGuess = setup(MockProps)
  })

  it('should have functionatilty', () => {
    expect(typeof GuessWords).toBe('function')
  })
  it('does not throw error when valid props passed through', () => {
    checkProps(GuessWords, MockProps)
  })
  it('renders without any errors', () => {
    const component = findByTestAttr(wrapperWithoutGuess, 'guess_component')
    expect(component.length).toEqual(1)
  })
  it('renders instruction to guess words', () => {
    const component = findByTestAttr(wrapperWithoutGuess, 'guess_instructions')
    expect(component.text().length).not.toBe(0)
  })
  it('render without error when words are guessed', () => {
    const component = findByTestAttr(wrapperWithOneGuess, 'guess_component')
    expect(component.length).toEqual(1)
  })
  it('renders previous guess word section', () => {
    const component = findByTestAttr(wrapperWithOneGuess, 'previous_guess')
    expect(component.length).toEqual(1)
  })
})