import {combineReducers} from 'redux'
import { categoryReducer } from './categoryReducer'
import { itemReducer } from './itemReducer'

export const rootReducer = combineReducers({
  item : itemReducer,
  category : categoryReducer 
})