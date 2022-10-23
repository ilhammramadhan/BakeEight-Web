import { FETCH_PRODUCT_SUCCESS, LOADING_WATCHER } from "./actionType"



export function fetchProductSuccess(data) {
  return {
    type : FETCH_PRODUCT_SUCCESS,
    payload : data
  }
}



export function setLoadingFetch(loading){
  return {
    type : LOADING_WATCHER,
    loading : loading
  }
}

export function fetchProducts(fetchUrl) {
  return async (dispatch) => {
    dispatch(setLoadingFetch(true))
    try {
      const response = await fetch('https://bake-eight.herokuapp.com/customer/items')
      if (!response.ok) throw new Error('Something Wrong!')
      const cakes = await response.json()
      dispatch(fetchProductSuccess(cakes))
    } catch (error) {
      console.log(error)
    }finally {
      dispatch(setLoadingFetch(false))
    }
  }
}



