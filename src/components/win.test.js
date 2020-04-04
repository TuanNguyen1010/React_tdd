import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Win from './win';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Winning page', () => {
  let wrapper 
  beforeEach(() => {wrapper = shallow(<Win/>)});

  const findByTestAttr = ( wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
  }

  it('renders without error', () => {
    const win = findByTestAttr(wrapper, "win")
    expect(win.length).toEqual(1)
  })
})