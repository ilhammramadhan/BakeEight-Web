import { useState, useEffect } from 'react'

const useFetch = (fetchUrl) => {
  const [data, setData] = useState([])
  // const [loading,setLoading] = useState(false)

  useEffect(()=>{
   fetchCake() 
  },[])
  async function fetchCake() {
    try {
      const response = await fetch(fetchUrl)
      if (!response.ok) throw new Error('Something Wrong!')
      const cakes = await response.json()
      setData(cakes)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    data
  }
}

export default useFetch