import { Container, Table } from "react-bootstrap"
import TableRowList from "./TableRowList"
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchEffectItem } from "../store/actions/action"


const ListCakes = () =>{
  const {items} = useSelector((state) => state)
  console.log(items)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchEffectItem())
  },[])
  
  return (
    <Container className="mt-4">
      <button type="button" className="btn btn-dark mb-2 justify-content-center">Add New Product</button>
      <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Category</th>
        <th>Ingredients</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        items.map((item,index) =>{
          return <TableRowList key={index} item={item} index={index}/>
        })
      }
    </tbody>
  </Table>
    </Container>
    
  )
}

export default ListCakes