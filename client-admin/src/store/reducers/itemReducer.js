import { FETCH_DETAILITEM_SUCCESS, FETCH_ITEMS_SUCCESS } from "../actions/actionType"

const initialState = {
  items : [],
  item : {}
}

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return { ...state,items : action.payload }
    case FETCH_DETAILITEM_SUCCESS:
      return { ...state,item : action.payload }
    default:
      return state
  }
}