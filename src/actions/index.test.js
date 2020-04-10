import {actionTypes, correct_guess} from './index'

describe('actionTypes', () => {
  it('should equal same', () => {
    expect(correct_guess()).toEqual({type: actionTypes.CORRECT_GUESS })
  })
}) 