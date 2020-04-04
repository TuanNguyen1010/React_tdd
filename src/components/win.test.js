import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Win from './win';
import {findByTestAttr} from '../../test/testUtils'
import checkPropTypes from 'check-prop-types';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Winning page', () => {
  let wrapper 
  beforeEach(() => {wrapper = shallow(<Win/>)});

  const setup = (props={}) => {
    return shallow(<Win{...props}/>)
  }

  it('renders without error', () => {
    const win = findByTestAttr(wrapper, 'win-component')
    expect(win.length).toEqual(1)
  })
  it('renders error when win props is false', () => {
    const wrapper = setup({win: false})
    const lose = findByTestAttr(wrapper,'win-component')
    expect(lose.text()).toContain('error')
  })
  it('render message when win condition is true', () => {
    const wrapper = setup({win: true})
    const win = findByTestAttr(wrapper,'win-component')
    expect(win.text()).not.toContain('error')
  })
  it('does not throw warning with expected props', () => {
    const expectedProp = {win: false}
    const propError = checkPropTypes(Win.prototype, expectedProp, 'prop', Win.name)
    expect(propError).toBeUndefined()
  })
})