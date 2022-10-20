import { Container, Table,Button } from "react-bootstrap"
import {BsTrash} from "react-icons/bs"


const ListCakes = () =>{
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
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Croissant</td>
        <td><img src="https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/Beef-Cheese-Croissant-.jpg" width={120} height={80} alt="croissant" /></td>
        <td>15.000</td>
        <td>Breakfat</td>
        <td><Button variant="dark"><BsTrash className="text-danger" size={20} /></Button></td>
      </tr>
      <tr>
      <td>2</td>
        <td>Croissant</td>
        <td><img src="https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/Almond-Croissant-600x600.jpg" width={120} height={80} alt="croissant" /></td>
        <td>15.000</td>
        <td>Breakfat</td>
        <td><Button variant="dark"><BsTrash className="text-danger" size={20}/></Button></td>
      </tr>
    </tbody>
  </Table>
    </Container>
    
  )
}

export default ListCakes