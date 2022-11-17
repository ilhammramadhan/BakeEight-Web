import { FETCH_CATEGORY_SUCCESS, FETCH_ONECATEGORY_SUCCESS, LOADING_FETCH_CATEGORY } from "../actions/actionType"

const initialState = {
  categories : [],
  category : {},
  loading:false
}

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return { ...state,categories : action.payload }
    case FETCH_ONECATEGORY_SUCCESS:
      return { ...state,category : action.payload }
    case LOADING_FETCH_CATEGORY: 
      return { ...state,loading: action.loading }
    default:
      return state
  }
}