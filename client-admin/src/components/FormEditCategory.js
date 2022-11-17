import { useEffect, useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editEffectCategory } from '../store/actions/categoryAction'




const FormEditCategory= (props) => {
  const dispatch = useDispatch()
  const {category} = useSelector((state)=> state.category)
  const [inputCategory,setInputCategory] = useState({
    name : ''
  })

  useEffect(()=> {
    if (category) {
      if (Object.keys(category).length) {
        setInputCategory({
          name : category.name
        });
      }
    }
  },[category])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editEffectCategory(inputCategory,category.id))
    props.onHide()
  }

  return (
    <>
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="category name"
                autoFocus
                value = {inputCategory.name}
                onChange={(e) =>  {setInputCategory({name:e.target.value})}}
              />
            </Form.Group>
            <Modal.Footer>
            <Button onClick={props.onHide} variant="secondary" >
          Close
        </Button>
            <Button type ="submit" variant="primary" >
          Submit
        </Button>
      </Modal.Footer>
          </Form>
      </Modal.Body>
      
    </Modal>
  </>
  )
}

export default FormEditCategory