import {actionTypes} from '../actions'
import sucessReducer from './sucessReducer'

describe('sucess reducer', () => {
  it('initial state of false', () => {
    const newState = sucessReducer()
    expect(newState).toBe(false)
  })
})