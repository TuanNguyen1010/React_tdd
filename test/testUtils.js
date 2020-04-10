import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux'
import allReducer from '../src/reducers'

export const storeFactory = (initialState) => {
  return createStore(allReducer, initialState)
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

