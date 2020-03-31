import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('Testing the homepage', () => {

  let wrapper 

  beforeEach(() => wrapper = shallow(<App/>));

  it('renders wrapper', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("[data-test='App']").length).toBe(1)

    // const div = document.createElement('div')
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/Hello World/i);
    // expect(linkElement).toBeInTheDocument();
  });
  it('renders increment button', () => {

  })

  it('render display counters', () => {

  })

  it('countere state starts at 0', () => {

  })

  it('increases display when button presses', () => {

  })
})