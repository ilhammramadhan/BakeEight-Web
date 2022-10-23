import {combineReducers} from 'redux'

import itemDetailReducer from './itemDetailReducer'
import itemReducer from './itemReducer'



export const rootReducer = combineReducers({
  item : itemReducer,
  itemDetail : itemDetailReducer
})