import { FETCH_PRODUCTDETAIL_SUCCESS, FETCH_PRODUCT_SUCCESS, LOADING_WATCHER } from "../actions/actionType"

const initialState = { data: [] , detail : {} , loading:false }



function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return { ...state,data: action.payload }
    case FETCH_PRODUCTDETAIL_SUCCESS:
      return { ...state,detail: action.payload }
    case LOADING_WATCHER:
      return { ...state,loading: action.loading }
    default:
      return state
  }
}

export default productReducer




