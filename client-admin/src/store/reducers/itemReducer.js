import { FETCH_DETAILITEM_SUCCESS, FETCH_ITEMS_SUCCESS, LOADING_FETCH_ITEM } from "../actions/actionType"

const initialState = {
  items : [],
  item : {},
  loading:false
}

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return { ...state,items : action.payload }
    case FETCH_DETAILITEM_SUCCESS:
      return { ...state,item : action.payload }
    case LOADING_FETCH_ITEM: 
      return { ...state,loading: action.loading }
    default:
      return state
  }
}