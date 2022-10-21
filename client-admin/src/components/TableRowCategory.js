import {BsTrash} from "react-icons/bs"
import { Button } from "react-bootstrap"

const TableRowCategory = ({category,index}) => {
  return (
    <>
     <tr>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>{category.createdAt}</td>
        <td>{category.updatedAt}</td>
        
        
        <td><Button variant="dark"><BsTrash className="text-danger" size={20} /></Button></td>
      </tr>
    </>
   
  )
}

export default TableRowCategory