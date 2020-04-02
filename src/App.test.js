import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Testing the homepage', () => {

  let wrapper 
  beforeEach(() => {wrapper = shallow(<App/>)});

  /** 
  * Factory function to create a ShallowWrapper for the app component
  * @function setup
  * @param {object} props - components props specific to this project
  * @param {any} state - initial state for setup
  * @returns {ShallowWrapper} 
  */

  const setup = ({props={}, state=null}) => {
    return shallow(<App />)
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
})