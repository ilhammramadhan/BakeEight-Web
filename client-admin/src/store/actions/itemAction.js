import { FETCH_DETAILITEM_SUCCESS, FETCH_ITEMS_SUCCESS } from "./actionType"


export const fetchSuccessReducer= (data)=> {
  return {
    type : FETCH_ITEMS_SUCCESS,
    payload : data
  }
}

export const fetchItemDetailReducer = (data) => {
  return {
    type : FETCH_DETAILITEM_SUCCESS,
    payload : data
  }
}

export const fetchEffectItem = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/items`,{
        headers : {
          access_token : localStorage.getItem('access_token')
        }
      })
      if (!response.ok) throw new Error('Something Wrong!')
      const items = await response.json()
      dispatch(fetchSuccessReducer(items))
    } catch (error) {
      console.log(error)
    }finally {
    }
  }
}

export const deleteEffectItem = (id) => {
  return async (dispatch) => {
    try {
      await fetch('http://localhost:3000/admin/items/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
      })
      dispatch(fetchEffectItem())
    } catch (error) {
      console.log(error);
    }
  }
}

export const addItemEffect = (inputItem) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/items`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputItem)
      })
      if (!response.ok) throw new Error('Something Wrong!')
      dispatch(fetchEffectItem())
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}