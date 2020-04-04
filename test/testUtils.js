  /**
   * Return ShallowWrapper containing node(s) with the given data-test value.
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within 
   * @param {string} value - Value of data-test attributed for search
   * @returns {ShallowWrapper}
   */

export const findByTestAttr = ( wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
  }