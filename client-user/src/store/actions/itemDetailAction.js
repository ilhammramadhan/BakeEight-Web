import { FETCH_PRODUCTDETAIL_SUCCESS, LOADING_WATCHER_DETAIL } from "./actionType"




export function fetchDetailSuccess(data) {
  return {
    type : FETCH_PRODUCTDETAIL_SUCCESS,
    payload : data
  }
}

export function setLoadingFetch(loading){
  return {
    type : LOADING_WATCHER_DETAIL,
    loading : loading
  }
}

export function fetchProductsDetail(id) {
  return async (dispatch) => {
    dispatch(setLoadingFetch(true))
    try {
      const response = await fetch('https://bake-eight.herokuapp.com/customer/items/' + id)
      if (!response.ok) throw new Error('Something Wrong!')
      const cakes = await response.json()
      dispatch(fetchDetailSuccess(cakes))
    } catch (error) {
      console.log(error)
    } finally{
      dispatch(setLoadingFetch(false))
    }
  }
}

