import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import jottoContent from './jottoContent';

Enzyme.configure({adapter: new EnzymeAdaptor() })
