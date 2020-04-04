import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import CounterContent from './counterContent';

Enzyme.configure({adapter: new EnzymeAdaptor() })

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

  /**
   * Return ShallowWrapper containing node(s) with the given data-test value.
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within 
   * @param {string} value - Value of data-test attributed for search
   * @returns {ShallowWrapper}
   */
  const findByTestAttr = ( wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
  }

  it('renders wrapper', () => {
    const appComponent = findByTestAttr(wrapper, "App")
    expect(appComponent.length).toBe(1)

    // const div = document.createElement('div')
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/Hello World/i);
    // expect(linkElement).toBeInTheDocument();
  });
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