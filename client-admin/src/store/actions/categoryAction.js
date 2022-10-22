import { FETCH_CATEGORY_SUCCESS, FETCH_ONECATEGORY_SUCCESS } from "./actionType"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const urlApi = 'https://bake-eight.herokuapp.com/admin'


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
      const response = await fetch(`${urlApi}/category`, {
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
      const response = await fetch(`${urlApi}/category`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputCategory)
      })
      if (!response.ok) throw await response.text()
      const data = await response.json()
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchEffectCategory())
    } catch (error) {
      const {message} = JSON.parse(error)
      MySwal.fire({
        icon: "warning",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
    }
  }
}

export const deleteEffectCategory = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${urlApi}/category/` + id, {
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
      const response = await fetch(`${urlApi}/category/` + id, {
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
      const response = await fetch(`${urlApi}/category/`+ id, {
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputCategory)
      })
      if (!response.ok) throw await response.text()
      const data = await response.json()
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchEffectCategory())
    } catch (error) {
      const {message} = JSON.parse(error)
      MySwal.fire({
        icon: "warning",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
    }
  }
}