import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEffectCategory } from '../store/actions/categoryAction';
import { editEffectItem } from '../store/actions/itemAction';

function FormModalEdit(props) {
  const { item } = useSelector((state) => state.item)
  const { categories } = useSelector((state) => state.category)

  const [inputEditItem,setEditItem] = useState({
    name: "",
    description: "",
    price: 0,
    CategoryId: 0,
    imgUrl: "",
  })
  const dispatch = useDispatch()

  const handleChange= (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...inputEditItem,
    };
    newInput[name] = value;
    setEditItem(newInput);
  }

  useEffect(() => {
    dispatch(fetchEffectCategory())
    if (item) {
      if (Object.keys(item).length) {
        setEditItem({
          name: item.name,
          description: item.description,
          price: item.price,
          CategoryId: item.CategoryId,
          imgUrl: item.imgUrl,
        });
      }
    }
  }, [dispatch,item])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editEffectItem(inputEditItem,item.id))
    props.onHide()
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Product
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
                    value={inputEditItem.name}
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
                    value={inputEditItem.description}
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
                    value={inputEditItem.price}
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
                    value={inputEditItem.CategoryId}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Choose Category
                    </option>
                    {
                      categories?.map((category, index) => {
                        return <option key={index} value={category.id} className={category.id === item.CategoryId ? 'selected' : ''}>{category.name}</option>
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
                    value={inputEditItem.imgUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                  />
                </div>
              </div>
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

export default FormModalEdit