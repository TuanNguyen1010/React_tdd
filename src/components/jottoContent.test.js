import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Jotto from './jottoContent';
import {findByTestAttr, storeFactory} from '../../test/testUtils'
import guessedWordsReducer from '../reducers/guessedWordsReducer';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe("Jotto App", () => {
  const setup = (initialState) => {
    const store = storeFactory(initialState)
    return shallow(<Jotto store={store}/>).dive().dive()
  }

  let store
  const initialState = {};
  beforeEach(()  => {
    store = storeFactory(initialState)
  })

  it('should render properly', () => {
    const wrapper = setup()
    const Jotto = findByTestAttr(wrapper, 'Jotto-page')
    expect(Jotto.length).toEqual(1)
  })
  it('has default success reducer state of false', () => {
    const wrapper = setup()
    const sucessReducerState = wrapper.instance().props.successReducer
    expect(sucessReducerState).toEqual(false)
  })
  it('has guessWordsReducer state after wrong guess', () => {
    const wrongGuess = {guessedWordsReducer: [{guessedWord: 'apple', letterMatchCount: 4 }]}
    const wrapper = setup(wrongGuess)
    console.log(wrapper.instance().props)
    const guessedWordState = wrapper.instance().props.guessedWordsReducer
    expect(guessedWordState).toEqual(wrongGuess.guessedWordsReducer)
  })
})
