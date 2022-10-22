import {BsTrash,BsFillPencilFill} from "react-icons/bs"
import { Button } from "react-bootstrap"
import { deleteEffectCategory, fetchEffectOneCategory } from "../store/actions/categoryAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import FormEditCategory from "./FormEditCategory";

const TableRowCategory = ({category,index}) => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const deleteHandle = (e,id) => {
      e.preventDefault();
      dispatch(deleteEffectCategory(id))
    }

    const handleClickEdit = (e,id) => {
      e.preventDefault()
      setModalShow(true)
      dispatch(fetchEffectOneCategory(id))
    }

  return (
    <>
     <tr>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>{category.createdAt}</td>
        <td>{category.updatedAt}</td>
        <td><span >
          <Button onClick={(e) => handleClickEdit(e,category.id)  } variant="dark" ><BsFillPencilFill className="text-warning" size={20} /></Button>
          {
            modalShow && <FormEditCategory show={modalShow}
            onHide={() => setModalShow(false)} id={category.id}/>
          }
          </span>
        <Button className="ml-4" variant="dark"><BsTrash className="text-danger" size={20} onClick={(e) => deleteHandle(e,category.id)} /></Button></td>
      </tr>
    </>
   
  )
}

export default TableRowCategory