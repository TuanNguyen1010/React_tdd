import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import guessWords from './guessWords';
import {findByTestAttr, checkProps} from '../../test/testUtils'

describe('Guess words', () => {
  it('should have functionatilty', () => {
    expect(typeof guessWords).toBe('function')
  })
})