import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Win from './win';
import {findByTestAttr, checkProps} from '../../test/testUtils'

describe('Winning', () => {
  const setup = (props={}) => {
    return shallow(<Win{...props}/>)
  }

  it('renders without error', () => {
    const wrapper = setup({successReducer: false})
    const win = findByTestAttr(wrapper, 'win-component')
    expect(win.length).toEqual(1)
  })
  it('renders error when win props is false', () => {
    const wrapper = setup({successReducer: false})
    const lose = findByTestAttr(wrapper,'win-component')
    expect(lose.text()).toContain('Game still on-going')
  })
  it('render message when win condition is true', () => {
    const wrapper = setup({successReducer: true})
    const win = findByTestAttr(wrapper,'win-component')
    expect(win.text()).not.toContain('Game still on-going')
  })
  it('does not throw warning with valid props', () => {
    const expectedProp = {successReducer: false}
    checkProps(Win, expectedProp)
  })
})