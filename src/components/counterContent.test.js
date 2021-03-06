import React from 'react';
import {shallow} from 'enzyme';
import CounterContent from './counterContent';
import {findByTestAttr} from '../../test/testUtils'

describe('Testing the homepage', () => {

  let wrapper 
  beforeEach(() => {wrapper = shallow(<CounterContent/>)});

  /** 
  * Factory function to create a ShallowWrapper for the app component
  * @function setup
  * @param {object} props - components props specific to this project
  * @param {object} state - initial state for setup
  * @returns {ShallowWrapper} 
  */

  const setup = ({props={}, state=null}) => {
    const wrapper = shallow(<CounterContent />)
    if (state) wrapper.setState(state)
    return wrapper
  }
  
  it('renders increment button', () => {
    const incrementButton = findByTestAttr(wrapper, "increase-button")
    expect(incrementButton.length).toEqual(1)
  })
  it('render displays counters', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-value')
    expect(counterDisplay.length).toEqual(1)
  })
  it('starts the counter at 0', () => {
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
  })
  it('clicks on the button and counter display increase', () => {
    const initialCounterState = 10
    wrapper.setState({'counter': initialCounterState})
    const counterState = wrapper.state('counter')
    expect(counterState).toBe(initialCounterState)
    const increase = findByTestAttr(wrapper, "increase-button")
    increase.simulate('click')
    const counterDisplay = findByTestAttr(wrapper, 'counter-value')
    expect(counterDisplay.text()).toContain(counterState+1)
  })
  it('clicks the decrease button and reduce counter', () => {
    const initialCounterState = 10
    wrapper.setState({counter: initialCounterState})
    const counterState = wrapper.state('counter')
    expect(counterState).toBe(initialCounterState)
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button')
    decreaseButton.simulate('click')
    const counterDisplay = wrapper.find("[data-test='counter-value']")
    expect(counterDisplay.text()).toContain(counterState-1)
  })
  it('display an error when decrease button clicked while on 0', () => {
    const initialCounterState = 0
    wrapper.setState({counter: initialCounterState})
    const counterState = wrapper.state('counter')
    expect(counterState).toBe(initialCounterState)
    const decreaseButton = findByTestAttr(wrapper, 'decrease-button')
    decreaseButton.simulate('click')
    const App = wrapper.find("[data-test='App']")
    expect(App.text()).toContain("Error, can't go below 0")
  })
})