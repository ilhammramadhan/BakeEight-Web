import {BsTrash} from "react-icons/bs"
import { Button } from "react-bootstrap"
import { deleteEffectCategory } from "../store/actions/categoryAction";
import { useDispatch } from "react-redux";

const TableRowCategory = ({category,index}) => {
    const dispatch = useDispatch()
    const deleteHandle = (e,id) => {
      e.preventDefault();
      dispatch(deleteEffectCategory(id))
      
    }
  return (
    <>
     <tr>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>{category.createdAt}</td>
        <td>{category.updatedAt}</td>
        <td><Button variant="dark"><BsTrash className="text-danger" size={20} onClick={(e) => deleteHandle(e,category.id)} /></Button></td>
      </tr>
    </>
   
  )
}

export default TableRowCategory