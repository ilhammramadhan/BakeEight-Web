import { FETCH_CATEGORY_SUCCESS } from "./actionType"



export const fetchCategoryReducer = (data) =>{
  return {
    type : FETCH_CATEGORY_SUCCESS,
    payload : data
  }
}

export const fetchEffectCategory = () =>{
  return async (dispatch) =>{
    try {
      const response = await fetch(`http://localhost:3000/admin/items`,{
        headers : {
          access_token : localStorage.getItem('access_token')
        }
      })
      if (!response.ok) throw new Error('Something Wrong!')
      const categories = await response.json()
      dispatch(fetchCategoryReducer(categories))
    } catch (error) {
      console.log(error)
    }finally {
    }
  }
}