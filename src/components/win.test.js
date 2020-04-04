import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Win from './win';
import {findByTestAttr} from '../../test/testUtils'

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
  it('renders error when "win-component" props is false', () => {
    const wrapper = setup({win: false})
    const lose = findByTestAttr(wrapper,'win-component')
    expect(lose.text()).toContain('error')
  })
})