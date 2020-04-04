import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Win from './win';
import {findByTestAttr} from '../../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Winning page', () => {
  let wrapper 
  beforeEach(() => {wrapper = shallow(<Win/>)});

  it('renders without error', () => {
    const win = findByTestAttr(wrapper, "win")
    expect(win.length).toEqual(1)
  })
})