import {actionTypes} from '../actions'
import successReducer from './successReducer'

describe('success reducer', () => {
  it('initial state of false', () => {
    expect(successReducer(undefined, {})).toBe(false)
  })
  it('return true when CORRECT_GUESS action received through', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
  })
})