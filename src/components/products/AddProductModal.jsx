import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/newproductSlice";

function AddProductModal({ setShowModal, source }) {
  const dispatch = useDispatch();

  const pCreaterRef = useRef();
  const pNameRef = useRef();
  const categoryRef = useRef();
  const mPriceRef = useRef();
  const sPriceRef = useRef();
  const savedPriceRef = useRef();
  const descriptionRef = useRef();
  const sizeFirstRef = useRef();
  const sizeSecondRef = useRef();
  const sizeThirdRef = useRef();
  const statusRef = useRef();
  const pimageRef = useRef();
  const typeRef = useRef();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pCreater = pCreaterRef.current?.value?.trim() ?? "";
    const pName = pNameRef.current?.value?.trim() ?? "";
    const category = categoryRef.current?.value?.trim() ?? "";
    const mPriceRaw = mPriceRef.current?.value ?? "";
    const sPriceRaw = sPriceRef.current?.value ?? "";
    const savedPriceRaw = savedPriceRef.current?.value ?? "";
    const description = descriptionRef.current?.value?.trim() ?? "";
    const sizeFirst = sizeFirstRef.current?.value?.trim() ?? "";
    const sizeSecond = sizeSecondRef.current?.value?.trim() ?? "";
    const sizeThird = sizeThirdRef.current?.value?.trim() ?? "";
    const isActive = !!statusRef.current?.checked;
    const pimage = pimageRef.current?.value?.trim() ?? "";
    const type = typeRef.current?.value?.trim() || "Featured";

    const mPrice = Number(mPriceRaw) || 0;
    const sPrice = Number(sPriceRaw) || 0;
    const savedPrice =
      savedPriceRaw !== "" ? Number(savedPriceRaw) : mPrice - sPrice;

    const id = Date.now();

    const product = {
      id,
      type,
      pCreater,
      pName,
      category,
      description,
      status: isActive ? "active" : "inactive",
      mPrice,
      sPrice,
      savedPrice,
      size: {
        first: sizeFirst,
        second: sizeSecond,
        third: sizeThird,
      },
      pimage,
    };

    dispatch(addProduct({ product, source }));
    setShowModal(false);
  };

  return (
    <>
      <div className="modal show d-block " tabIndex={-1}>
        <div className="modal-dialog shadow-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label">Type</label>
                  <input
                    ref={typeRef}
                    defaultValue="Featured"
                    className="form-control"
                    placeholder="Featured"
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Creator (pCreater)</label>
                  <input ref={pCreaterRef} className="form-control" />
                </div>

                <div className="mb-2">
                  <label className="form-label">Product Name (pName)</label>
                  <input ref={pNameRef} className="form-control" />
                </div>

                <div className="mb-2">
                  <label className="form-label">Category</label>
                  <input ref={categoryRef} className="form-control" />
                </div>

                <div className="row g-2 mb-2">
                  <div className="col">
                    <label className="form-label">MRP (mPrice)</label>
                    <input
                      ref={mPriceRef}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Selling Price (sPrice)</label>
                    <input
                      ref={sPriceRef}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Saved Price</label>
                    <input
                      ref={savedPriceRef}
                      type="number"
                      className="form-control"
                      placeholder="optional (auto calc = mPrice - sPrice)"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Description</label>
                  <textarea
                    ref={descriptionRef}
                    className="form-control"
                    rows={3}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Sizes</label>
                  <div className="d-flex gap-2">
                    <input
                      ref={sizeFirstRef}
                      placeholder="first (e.g. L size)"
                      className="form-control"
                    />
                    <input
                      ref={sizeSecondRef}
                      placeholder="second (e.g. XL size)"
                      className="form-control"
                    />
                    <input
                      ref={sizeThirdRef}
                      placeholder="third (e.g. XXL size)"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-check form-switch mb-3">
                  <input
                    ref={statusRef}
                    className="form-check-input"
                    type="checkbox"
                    id="activeSwitch"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="activeSwitch">
                    Active
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Product Image URL (pimage)
                  </label>
                  <input
                    ref={pimageRef}
                    className="form-control"
                    placeholder="https://..."
                  />
                </div>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-secondary flex-grow-1"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary flex-grow-1">
                    Submit Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductModal;
