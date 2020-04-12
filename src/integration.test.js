import { storeFactory } from '../test/testUtils'
import {guessWord} from './actions'

describe('guess word action dispatcher', () => {
  const secretWordReducer = 'party'
  const wrong = 'train'

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
    console.log(newState)
    expect(newState).toEqual(expectedState)
  })
})
