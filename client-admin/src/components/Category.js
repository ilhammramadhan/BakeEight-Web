import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchEffectCategory } from "../store/actions/categoryAction"
import FormCategoryModal from "./FormCategoryModal"
import TableRowCategory from "./TableRowCategory"

const Category = ()=>{
  const {categories} = useSelector((state)=> state.category)
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchEffectCategory())
  },[dispatch])


  return (
    <Container className="mt-4">
    <button onClick={() => setModalShow(true) } type="button" className="btn btn-dark mb-2 justify-content-center">Add New Category</button>
    <FormCategoryModal  show={modalShow}
        onHide={() => setModalShow(false)} />
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      categories.map((category,index)=> {
        return <TableRowCategory category = {category} index ={index}/>
      })
    }
  </tbody>
</Table>
  </Container>
  )
}

export default Category