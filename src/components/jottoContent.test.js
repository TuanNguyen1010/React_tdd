import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import JottoContent, { Jotto } from './jottoContent';
import {findByTestAttr, storeFactory} from '../../test/testUtils'
import guessedWordsReducer from '../reducers/guessedWordsReducer';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe("Jotto App", () => {
  const setup = (initialState) => {
    const store = storeFactory(initialState)
    return shallow(<JottoContent store={store}/>).dive().dive()
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
    const successReducerState = wrapper.instance().props.successReducer
    expect(successReducerState).toEqual(false)
  })
  it('has guessWordsReducer state after wrong guess', () => {
    const wrongGuess = [{guessedWord: 'apple', letterMatchCount: 4 }]
    const wrapper = setup({guessedWordsReducer: wrongGuess})
    const guessedWordState = wrapper.instance().props.guessedWordsReducer
    expect(guessedWordState).toEqual(wrongGuess)
  })
  it('has SecretWord state', () => {
    const secretWord = 'happy'
    const wrapper = setup({secretWordReducer: secretWord})
    const secretWordState = wrapper.instance().props.secretWordReducer
    expect(secretWordState).toEqual(secretWord)
  })
  it('has a getSecretWord action creator function', () => {
    const wrapper = setup()
    const getSecretWordFunction = wrapper.instance().props.getSecretWord
    expect(typeof getSecretWordFunction).toEqual('function')
  })
  it('calls getSecretWord action when mounted', () => {
    const getSecretWordMock = jest.fn()
    const props = {
      getSecretWord: getSecretWordMock,
      successReducer: false,
      guessedWordsReducer: [{guessedWord: 'happy', letterMatchCount: 2}],
    }
    const wrapper = shallow(<Jotto {...props} />)
    wrapper.instance().componentDidMount()
    const getSecretWordMockCount = getSecretWordMock.mock.calls.length
    expect(getSecretWordMockCount).toBe(1) 
  })
})

