import {actionTypes} from '../actions'
import sucessReducer from './sucessReducer'

describe('sucess reducer', () => {
  it('initial state of false', () => {
    expect(sucessReducer(undefined, {})).toBe(false)
  })
  it('return true when CORRECT_GUESS action received through', () => {
    const newState = sucessReducer(undefined, {type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
  })
})