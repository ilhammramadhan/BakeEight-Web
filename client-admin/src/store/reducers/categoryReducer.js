import { FETCH_CATEGORY_SUCCESS, FETCH_ONECATEGORY_SUCCESS } from "../actions/actionType"

const initialState = {
  categories : [],
  category : {}
}

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return { ...state,categories : action.payload }
    case FETCH_ONECATEGORY_SUCCESS:
      return { ...state,category : action.payload }
    default:
      return state
  }
}