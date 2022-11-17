import { Container, Table } from "react-bootstrap"
import TableRowList from "./TableRowList"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEffectItem } from "../store/actions/itemAction"
import FormModal from "./FormModal"
import PacmanLoader from "react-spinners/PacmanLoader"


const ListCakes = () => {
  const [modalShow, setModalShow] = useState(false);
  const { items,loading } = useSelector((state) => state.item)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEffectItem())
  }, [dispatch])

  return (
    <Container className="mt-4">
      <div>
        <h3 className="text-center fw-bold text-warning">List Cake</h3>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={() => setModalShow(true)} type="button" className="btn btn-dark mb-2 justify-content-center fw-bold">Add New Product</button>
      </div>

      <FormModal show={modalShow}
        onHide={() => setModalShow(false)} />
      {
        loading ? (
          <div className="d-flex justify-content-center">
            <PacmanLoader color="#36d7b7" size={30} />
          </div>
        )
          : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr >
                  <th className="fw-bold text-warning">No</th>
                  <th className="fw-bold">Name</th>
                  <th className="fw-bold text-warning">Image</th>
                  <th className="fw-bold">Price</th>
                  <th className="fw-bold text-warning">Category</th>
                  <th className="fw-bold">Ingredients</th>
                  <th className="fw-bold text-warning">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map((item, index) => {
                    return <TableRowList key={index} item={item} index={index} />
                  })
                }
              </tbody>
            </Table>
          )


      }

    </Container>

  )
}

export default ListCakes