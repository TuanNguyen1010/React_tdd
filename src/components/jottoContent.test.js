import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Jotto from './jottoContent';
import {findByTestAttr, storeFactory} from '../../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe("Jotto App", () => {
  const setup = (initialState) => {
    const store = storeFactory(initialState)
    return shallow(<Jotto store={store}/>).dive().dive()
  }

  let store
  const initialState = {};
  beforeEach(()  => {
    store = storeFactory(initialState)
  })

  it('should render properly', () => {
    const wrapper = setup()
    const Jotto = findByTestAttr(wrapper, 'Jotto-page')
    expect(Jotto.length).toEqual(1)
  })
  it('has default success reducer state of false', () => {
    const wrapper = setup()
    const newState = store.getState()
    expect(newState.successReducer).toEqual(false)
  })
})
