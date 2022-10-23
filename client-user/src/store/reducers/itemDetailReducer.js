import { FETCH_PRODUCTDETAIL_SUCCESS, LOADING_WATCHER_DETAIL } from "../actions/actionType"

const initialState = { detail : {} , loading:false }



function itemDetailReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PRODUCTDETAIL_SUCCESS:
      return { ...state,detail: action.payload }
    case LOADING_WATCHER_DETAIL:
      return { ...state,loading: action.loading }
    default:
      return state
  }
}

export default itemDetailReducer




