import { FETCH_DETAILITEM_SUCCESS, FETCH_ITEMS_SUCCESS} from "./actionType"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const urlApi = 'https://bake-eight.herokuapp.com/admin'

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
      const response = await fetch(`${urlApi}/items`,{
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
      await fetch(`${urlApi}/items/` + id, {
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
      const response = await fetch(`${urlApi}/items`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputItem)
      })
      if (!response.ok) throw await response.text()
      const data= await response.json()
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchEffectItem())
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

export const fetchEffectOneItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlApi}/items/` + id, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      if (!response.ok) throw new Error('Something Wrong!')
      const item = await response.json()
      dispatch(fetchItemDetailReducer(item))
    } catch (error) {
      console.log(error)
    } finally {
    }
  }
}

export const editEffectItem = (inputItem,id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlApi}/items/`+ id, {
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputItem)
      })
      if (!response.ok) throw await response.text()
      dispatch(fetchEffectItem())
      const data= await response.json()
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      const {message} = JSON.parse(error)
      MySwal.fire({
        icon: "warning",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    } 
  }
}