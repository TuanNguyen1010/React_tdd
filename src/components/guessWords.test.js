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

  it('should have functionatilty', () => {
    expect(typeof GuessWords).toBe('function')
  })
  it('does not throw error when valid props passed through', () => {
    checkProps(GuessWords, MockProps)
  })
  it('renders without any errors', () => {
    const wrapper = setup({guessedWords:[]})
    const component = findByTestAttr(wrapper, 'guessing')
    expect(component.length).toEqual(1)
  })
})