import { FETCH_CATEGORY_SUCCESS, FETCH_ONECATEGORY_SUCCESS } from "./actionType"



export const fetchCategoryReducer = (data) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: data
  }
}

export const fetchOneCategoryReducer = (data) => {
  return {
    type: FETCH_ONECATEGORY_SUCCESS,
    payload: data
  }
}

export const fetchEffectCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/category`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      if (!response.ok) throw new Error('Something Wrong!')
      const categories = await response.json()
      dispatch(fetchCategoryReducer(categories))
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}

export const addEffectCategory = (inputCategory) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/category`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputCategory)
      })
      if (!response.ok) throw new Error('Something Wrong!')
      dispatch(fetchEffectCategory())
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}

export const deleteEffectCategory = (id) => {
  return async (dispatch) => {
    try {
      await fetch('http://localhost:3000/admin/category/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
      })
      dispatch(fetchEffectCategory())
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchEffectOneCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/category/` + id, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      if (!response.ok) throw new Error('Something Wrong!')
      const category = await response.json()
      dispatch(fetchOneCategoryReducer(category))
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}

export const editEffectCategory = (inputCategory,id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/category/`+ id, {
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputCategory)
      })
      if (!response.ok) throw new Error('Something Wrong!')
      dispatch(fetchEffectCategory())
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}