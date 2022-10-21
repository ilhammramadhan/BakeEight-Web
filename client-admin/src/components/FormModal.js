import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormModal(props) {
  
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
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Product Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                autoFocus


              />
            </div>
          </div>

          <div>
            <label
              htmlFor="overview"
              className="text-sm font-medium text-gray-700"
            >
              Overview <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="overview"
                name="overview"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"


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
                name="categoryId"
                id="categoryId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"


              >
                <option value="" disabled>
                  Choose Category
                </option>

                    <option >
                      
                    </option>

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
                name="mainImg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"


              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-dark w-full justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smalt hover:bg-darkSmalt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkSmalt"
            >
              Submit
            </button>

          </div>
        </form>
      </div>
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal