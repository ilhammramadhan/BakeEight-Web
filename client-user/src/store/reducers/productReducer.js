import { FETCH_PRODUCT_SUCCESS } from "../actions/actionType"

const initialState = { data: [] }


function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return { data: action.payload }
    default:
      return state
  }
}

export default productReducer




