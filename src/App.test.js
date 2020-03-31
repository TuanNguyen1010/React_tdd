import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Testing the homepage', () => {

  let wrapper 

  beforeEach(() => wrapper = shallow(<App/>));

  it('renders wrapper', () => {
    expect(wrapper.find("[data-test='App']").length).toBe(1)

    // const div = document.createElement('div')
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/Hello World/i);
    // expect(linkElement).toBeInTheDocument();
  });
  it('renders increment button', () => {
    expect(wrapper.find("[data-type='button']").length).toEqual(1)
  })
})