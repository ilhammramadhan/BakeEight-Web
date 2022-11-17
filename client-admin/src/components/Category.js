import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchEffectCategory } from "../store/actions/categoryAction"
import FormCategoryModal from "./FormCategoryModal"
import TableRowCategory from "./TableRowCategory"
import PacmanLoader from "react-spinners/PacmanLoader"

const Category = () => {
  const { categories,loading } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchEffectCategory())
  }, [dispatch])


  return (
    <Container className="mt-4">
      <div>
        <h3 className="text-center fw-bold text-warning">Category List</h3>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={() => setModalShow(true)} type="button" className="btn btn-dark mb-2 justify-content-center fw-bold">Add New Category</button>
      </div>

      <FormCategoryModal show={modalShow}
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
                <tr>
                  <th className="fw-bold text-warning">No</th>
                  <th className="fw-bold ">Name</th>
                  <th className="fw-bold text-warning">Created At</th>
                  <th className="fw-bold ">Updated At</th>
                  <th className="fw-bold text-warning">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  categories.map((category, index) => {
                    return <TableRowCategory key={index} category={category} index={index} />
                  })
                }
              </tbody>
            </Table>
          )

      }

    </Container>
  )
}

export default Category