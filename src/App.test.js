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
  * @param {object} state - initial state for setup
  * @returns {ShallowWrapper} 
  */

  const setup = ({props={}, state=null}) => {
    const wrapper = shallow(<App />)
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
  })
})