function ProductModal({ selectedProduct, setSelectedProduct, setShowModal }) {
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {selectedProduct ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="productID" className="form-label">
                      Product ID
                    </label>
                    <input
                      defaultValue={`${selectedProduct.id}`}
                      type="number"
                      className="form-control"
                      id="productID"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      defaultValue={`${selectedProduct.pName}`}
                      className="form-control"
                      id="productName"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="creater" className="form-label">
                      Creater
                    </label>
                    <input
                      type="text"
                      defaultValue={`${selectedProduct.pCreater}`}
                      className="form-control"
                      id="creater"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      defaultValue={`${selectedProduct.category}`}
                      className="form-control"
                      id="category"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Price
                    </label>
                    <input
                      defaultValue={`${selectedProduct.sPrice}`}
                      type="number"
                      className="form-control"
                      id="price"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      type="text"
                      defaultValue={`${selectedProduct.description}`}
                      className="form-control"
                      id="description"
                    />
                  </div>
                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkNativeSwitch"
                      switch=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkNativeSwitch"
                    >
                      Status
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Update
                  </button>
                </form>
              ) : (
                <p>No product selected.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
