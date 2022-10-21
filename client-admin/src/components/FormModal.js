import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEffectCategory } from '../store/actions/categoryAction';
import { BsFillTrashFill } from "react-icons/bs";
import { addItemEffect } from '../store/actions/itemAction';

function FormModal(props) {
  const { categories } = useSelector((state) => state.category)
  const [ingredients, setIngredients] = useState([{
    name: "",
  }])
  const [inputAddItem,setInputAddItem] = useState({
    name: "",
    description: "",
    price: 0,
    CategoryId: 0,
    imgUrl: "",
  })
  const dispatch = useDispatch()

  const removeIngredients = (i, e) => {
    e.preventDefault()
    const temp = ingredients.filter((el, index) => index !== i)
    setIngredients(temp)
  }

  const handleChange= (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...inputAddItem,
    };
    newInput[name] = value;
    setInputAddItem(newInput);
  }
  const changeIngredients = (i,e) => {
    const { value } = e.target;
    const newInput = ingredients.map((_ing, index) => {
      if (i === index) {
        return { ..._ing, name: value };
      }
      return _ing;
    });
    setIngredients(newInput);
  }

  const addInputIngredients = (e) => {
    e.preventDefault()
    setIngredients([...ingredients, {}])
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch(addItemEffect({
      ...inputAddItem,
      ingredients
    }))
    props.onHide()
    setInputAddItem({
      name: "",
      description: "",
      price: 0,
      CategoryId: 0,
      imgUrl: "",
    })
    setIngredients([{
      name: "",
    }])
  }
  useEffect(() => {
    dispatch(fetchEffectCategory())
  }, [dispatch])



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="bg-white w-full">
          <div className="py-2 px-30 my-8">
            <form
              action=""
              className="space-y-6 w-1/3 mx-auto"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name"  className="text-sm font-medium text-gray-700">
                  Cake Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                    autoFocus
                    value={inputAddItem.name}
                    onChange={handleChange}
                  />
                </div>
              </div>


              <div>
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    value={inputAddItem.descripton}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={inputAddItem.price}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="categoryId"
                  className="text-sm font-medium text-slate-700"
                >
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    name="CategoryId"
                    id="categoryId"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                    value={inputAddItem.CategoryId}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Choose Category
                    </option>
                    {
                      categories?.map((category, index) => {
                        return <option key={index} value={category.id}>{category.name}</option>
                      })
                    }
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="mainImg"
                  className="text-sm font-medium text-gray-700"
                >
                  Image Url<span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="mainImg"
                    name="imgUrl"
                    value={inputAddItem.imgUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mainImg"
                  className="text-sm font-medium text-gray-700"
                >
                  Ingredients<span className="text-red-500">*</span>
                </label>
                {
                  ingredients.map((_el, index) => {
                    return <div key={index} className="mt-2">
                      <input
                        type="text"
                        name="ingredients"
                        value={ingredients.name}
                        onChange={(e) => changeIngredients(index,e) }
                        placeholder='Brownies ...'
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                      />
                      <span className='ml-2'><button onClick={(e) => removeIngredients(index, e)} className='btn btn-danger ml-4'><BsFillTrashFill /></button></span>
                    </div>
                  })
                }
              </div>
              <button
                onClick={addInputIngredients}
                className="btn btn-warning w-full justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smalt hover:bg-darkSmalt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkSmalt"
              >
                Add Ingredients
              </button>
              <Modal.Footer>
                <button
                  className="btn btn-dark w-full justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smalt hover:bg-darkSmalt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkSmalt"
                >
                  Submit
                </button>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </form>
          </div>
        </div>
      </Modal.Body>

    </Modal>
  );
}

export default FormModal