import { Container, Table } from "react-bootstrap"
import TableRowList from "./TableRowList"
import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchEffectItem } from "../store/actions/itemAction"
import FormModal from "./FormModal"


const ListCakes = () =>{
  const [modalShow, setModalShow] = useState(false);
  const {items} = useSelector((state) => state.item)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchEffectItem())
  },[dispatch])
  
  return (
    <Container className="mt-4">
     
      <button onClick={() => setModalShow(true) } type="button" className="btn btn-dark mb-2 justify-content-center">Add New Product</button>
      <FormModal show={modalShow}
        onHide={() => setModalShow(false)} />
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