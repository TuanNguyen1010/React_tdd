import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import allReducer from './reducers'

export const middlewares = [ReduxThunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default createStoreWithMiddleware(allReducer) 