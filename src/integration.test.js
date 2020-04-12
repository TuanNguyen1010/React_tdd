import { storeFactory } from '../test/testUtils'
import {guessWord} from './actions'

describe('guess word action dispatcher', () => {
  const secretWordReducer = 'party'
  const wrong = 'train'
  const wrong2 = 'rainy'

  let store
  const initialState = { secretWordReducer };
  beforeEach(()  => {
    store = storeFactory(initialState)
  })
  it('update state when wrong  guess words', () => {
    store.dispatch(guessWord(wrong))
    const newState = store.getState()
    const expectedState = {
      ...initialState,
      successReducer: false, 
      guessedWordsReducer: [{
        guessedWord: wrong,
        letterMatchCount: 3
      }]
    }
    expect(newState).toEqual(expectedState)
  })
  it('update state when correct word guessed', () =>{
    store.dispatch(guessWord(secretWordReducer))
    const newState=store.getState()
    const expectedState ={
      ...initialState,
      successReducer: true,
      guessedWordsReducer: [{
        guessedWord: secretWordReducer,
        letterMatchCount: 5
      }]
    }
    expect(newState).toEqual(expectedState)
  })
  it('updates state when multiple wrong guesses', () => {
    store.dispatch(guessWord(wrong2))
    store.dispatch(guessWord(wrong))
    const newState = store.getState()
    const expectedState = {
      ...initialState,
      successReducer: false, 
      guessedWordsReducer: [{
        guessedWord: wrong2,
        letterMatchCount: 3
      }, {
        guessedWord: wrong,
        letterMatchCount: 3 
      }]
    }
    expect(newState).toEqual(expectedState)
  })
  it('updates state when wrong guess and correct guess', () => {
    store.dispatch(guessWord(wrong))
    store.dispatch(guessWord(secretWordReducer))
    const newState = store.getState()
    const expectedState = {
      ...initialState,
      successReducer: true,
      guessedWordsReducer: [{
        guessedWord: 'train',
        letterMatchCount: 3
      }, {
        guessedWord: 'party',
        letterMatchCount: 5
      }]
    }
    expect(newState).toEqual(expectedState)
  })
})
