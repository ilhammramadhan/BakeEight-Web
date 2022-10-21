import {BsTrash} from "react-icons/bs"
import { Button } from "react-bootstrap"

const TableRowList = ({item,index}) => {
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
        
        <td><Button variant="dark"><BsTrash className="text-danger" size={20} /></Button></td>
      </tr>
    </>
   
  )
}

export default TableRowList