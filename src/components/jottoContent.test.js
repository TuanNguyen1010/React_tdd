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
  it('should render properly', () => {
    const wrapper = setup()
    const Jotto = findByTestAttr(wrapper, 'Jotto-page')
    expect(Jotto.length).toEqual(1)
  })
})
