import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from '../../test/testUtils'
import Form from './form';

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Form store={store}/>).dive().dive()
  return wrapper
}

describe('Form', () => {

  it('render component when no guess have been made', () => { 
    const wrapper = setup()
    const inputComponent = findByTestAttr(wrapper, 'inputComponent')
    expect(inputComponent.length).toBe(1)
  })
  it('render a form when no guess have been made', () => { 
    const wrapper = setup()
    const inputForm = findByTestAttr(wrapper, 'input')
    expect(inputForm.length).toBe(1)
  })
  it('render a submit button when no wrong guess made', () => {
    const wrapper = setup()
    const submitButton = findByTestAttr(wrapper, 'submit')
    expect(submitButton.length).toBe(1)
  })
  it('does not render form when win condition has been met', () => {
    const wrapper = setup({ successReducer: true })
    const inputForm = findByTestAttr(wrapper, 'input')
    expect(inputForm.length).toBe(0)
  })
  it('does not render a submit button when win condition met', () => {
    const wrapper = setup({ successReducer: true })
    const submitButton = findByTestAttr(wrapper, 'submit')
    expect(submitButton.length).toBe(0)
  })
})