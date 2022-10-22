import {BsTrash,BsFillPencilFill} from "react-icons/bs"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { deleteEffectItem, fetchEffectOneItem } from "../store/actions/itemAction"
import { useState } from "react"
import FormModalEdit from "./FormModalEdit"

const TableRowList = ({item,index}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()
  const deleteHandle = (e,id) => {
    e.preventDefault();
    dispatch(deleteEffectItem(id))
  }

  const handleClickEdit = (e,id) => {
    e.preventDefault()
    setModalShow(true)
    dispatch(fetchEffectOneItem(id))
  }
  return (
    <>
     <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td><img src={item.imgUrl} width={120} height={80} alt="croissant" /></td>
        <td>{item.price}</td>
        <td>{item.Category?.name}</td>
        <td>
        {
          item.Ingredients?.map((ingredient,index)=>{
            return <> <p>- {ingredient.name}</p>
            </>
          })
        }
        </td>
        
        <td><span >
          <Button onClick={(e) => handleClickEdit(e,item.id)  } variant="dark" ><BsFillPencilFill className="text-warning" size={20} /></Button>
          {
            modalShow && <FormModalEdit show={modalShow}
            onHide={() => setModalShow(false)} id={item.id}/>
          }
         
          </span><Button variant="dark"><BsTrash className="text-danger" size={20} onClick={(e) => deleteHandle(e,item.id)} /></Button></td>
      </tr>
    </>
   
  )
}

export default TableRowList