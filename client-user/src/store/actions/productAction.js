import { FETCH_PRODUCT_SUCCESS } from "./actionType"



export function fetchProductSuccess(data) {
  return {
    type : FETCH_PRODUCT_SUCCESS,
    payload : data
  }
}

export function fetchProducts(fetchUrl) {
  return async (dispatch) => {
    try {
      const response = await fetch(fetchUrl)
      if (!response.ok) throw new Error('Something Wrong!')
      const cakes = await response.json()
      dispatch(fetchProductSuccess(cakes))
    } catch (error) {
      
    }
  }
}
