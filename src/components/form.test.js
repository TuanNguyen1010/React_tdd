import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from '../../test/testUtils'
import Form from './form';

describe('Form', () => {

  const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Form store={store}/>).dive().dive()
    return wrapper
  }

  it('render component when no guess have been made', () => { 
    const wrapper = setup()
    const guessForm = findByTestAttr(wrapper, 'inputComponent')
    expect(guessForm.length).toBe(1)
  })
  it('render a form when no guess have been made', () => { 
    const wrapper = setup()
    const guessForm = findByTestAttr(wrapper, 'input')
    expect(guessForm.length).toBe(1)
  })
  it('render a submit button when no wrong guess made', () => {
    const wrapper = setup()
    const guessForm = findByTestAttr(wrapper, 'submit')
    expect(guessForm.length).toBe(1)
  })
})