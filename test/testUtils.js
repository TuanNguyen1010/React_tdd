import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from 'redux'
import allReducer from '../src/reducers'
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware (allReducer, initialState)
}
 /**
   * Return ShallowWrapper containing node(s) with the given data-test value.
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within 
   * @param {string} value - Value of data-test attributed for search
   * @returns {ShallowWrapper}
   */

export const findByTestAttr = ( wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
  }

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}

