import { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addEffectCategory } from '../store/actions/categoryAction'



const FormCategoryModal= (props) => {
  const dispatch = useDispatch()
  const [inputCategory,setInputCategory] = useState({
    name : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEffectCategory(inputCategory))
  }
  return (
    <>
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>Add new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="category name"
                autoFocus
                value = {inputCategory.name}
                onChange={(e) =>  {setInputCategory({...inputCategory,name:e.target.value})}}
              />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary" >
          Close
        </Button>
        <Button variant="primary" >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default FormCategoryModal