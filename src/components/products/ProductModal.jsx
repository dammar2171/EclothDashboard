import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/newproductSlice";

function ProductModal({
  selectedProduct,
  setSelectedProduct,
  setMyModal,
  source,
}) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...selectedProduct });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({ ...selectedProduct });
    }
  }, [selectedProduct]);

  const handleCloseModal = () => {
    setMyModal(false);
    setSelectedProduct(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? (checked ? "active" : "inactive") : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...formData,
      savedPrice: formData.mPrice - formData.sPrice,
    };
    dispatch(updateProduct({ product: updatedProduct, source }));
    handleCloseModal();
  };

  return (
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
            {formData ? (
              <form onSubmit={handleEditForm}>
                <input
                  name="id"
                  value={formData.id}
                  type="number"
                  className="form-control mb-2"
                  disabled
                />

                <input
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Type"
                />
                <input
                  name="pCreater"
                  value={formData.pCreater}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Creator"
                />
                <input
                  name="pName"
                  value={formData.pName}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Product Name"
                />
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-control mb-2"
                  placeholder="Category"
                />

                <div className="row g-2 mb-2">
                  <div className="col">
                    <input
                      name="mPrice"
                      type="number"
                      value={formData.mPrice}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="MRP"
                    />
                  </div>
                  <div className="col">
                    <input
                      name="sPrice"
                      type="number"
                      value={formData.sPrice}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Selling Price"
                    />
                  </div>
                  <div className="col">
                    <input
                      name="savedPrice"
                      type="number"
                      value={formData.savedPrice}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Saved Price"
                    />
                  </div>
                </div>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-control mb-2"
                  rows={3}
                  placeholder="Description"
                />

                <div className="d-flex gap-2 mb-2">
                  <input
                    name="size.first"
                    value={formData.size?.first || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Size 1"
                  />
                  <input
                    name="size.second"
                    value={formData.size?.second || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Size 2"
                  />
                  <input
                    name="size.third"
                    value={formData.size?.third || ""}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Size 3"
                  />
                </div>

                <div className="form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkNativeSwitch"
                    checked={formData.status === "active"}
                    onChange={handleChange}
                    name="status"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkNativeSwitch"
                  >
                    Status
                  </label>
                </div>

                <input
                  name="pimage"
                  value={formData.pimage}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Image URL"
                />

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
  );
}

export default ProductModal;
