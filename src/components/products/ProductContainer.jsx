import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewProducts } from "../../store/newproductSlice";
import { fetchFeaturedProducts } from "../../store/featuredproductSlice";
import style from "../../css/Product.module.css";
import ProductTable from "./ProductTable";

function ProductContainer() {
  const dispatch = useDispatch();
  const {
    items: newItems,
    status: newStatus,
    error: newError,
  } = useSelector((state) => state.newproducts);
  const [showModal, setShowModal] = useState(false);

  const {
    items: featuredItems,
    status: featuredStatus,
    error: featuredError,
  } = useSelector((state) => state.featuredProducts);

  useEffect(() => {
    if (newStatus === "idle") {
      dispatch(fetchNewProducts());
    }
  }, [newStatus, dispatch]);

  if (newStatus === "loading") return <p>Loading...</p>;
  if (newStatus === "failed") return <p>Error: {newError}</p>;

  useEffect(() => {
    if (featuredStatus === "idle") {
      dispatch(fetchFeaturedProducts());
    }
  }, [featuredStatus, dispatch]);

  if (featuredStatus === "loading") return <p>Loading...</p>;
  if (featuredStatus === "failed") {
    <p>Error: {featuredError}</p>;
  }

  const handleAddProduct = () => {
    setShowModal(true);
  };

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-topProducts-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-topProducts"
            type="button"
            role="tab"
            aria-controls="nav-topProducts"
            aria-selected="true"
          >
            Top Products
          </button>
          <button
            className="nav-link"
            id="nav-featured-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-featured"
            type="button"
            role="tab"
            aria-controls="nav-featured"
            aria-selected="false"
          >
            Featured Products
          </button>
          <button
            className="nav-link"
            id="nav-top-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-top"
            type="button"
            role="tab"
            aria-controls="nav-top"
            aria-selected="false"
          >
            Top
          </button>
          <button
            className="nav-link"
            id="nav-bottom-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-bottom"
            type="button"
            role="tab"
            aria-controls="nav-bottom"
            aria-selected="false"
          >
            Bottom
          </button>
          <button
            className="nav-link"
            id="nav-access-tab"
            data-bs-toggle="tab"
            data-bs-target="#access"
            type="button"
            role="tab"
            aria-controls="nav-access"
            aria-selected="false"
          >
            Accessories
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-topProducts"
          role="tabpanel"
          aria-labelledby="nav-topProducts-tab"
          tabIndex={0}
        >
          <div className={`${style.costumContainer} mt-3`}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">Products</h5>
              <button onClick={handleAddProduct} className="btn btn-primary">
                Add New Products
              </button>
            </div>

            <div className="table-responsive">
              <ProductTable
                items={newItems}
                setShowModal={setShowModal}
                show={showModal}
                source={"newproducts"}
              />
            </div>
          </div>{" "}
        </div>
        <div
          className="tab-pane fade"
          id="nav-featured"
          role="tabpanel"
          aria-labelledby="nav-featured-tab"
          tabIndex={0}
        >
          <div className={`${style.costumContainer} mt-3`}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">Products</h5>
              <button onClick={handleAddProduct} className="btn btn-primary">
                Add New Products
              </button>
            </div>

            <div className="table-responsive">
              <ProductTable
                items={featuredItems}
                source={"featuredproducts"}
                setShowModal={setShowModal}
                show={showModal}
              />
            </div>
          </div>{" "}
        </div>
        <div
          className="tab-pane fade"
          id="nav-top"
          role="tabpanel"
          aria-labelledby="nav-top-tab"
          tabIndex={0}
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-bottom"
          role="tabpanel"
          aria-labelledby="nav-bottom-tab"
          tabIndex={0}
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-access"
          role="tabpanel"
          aria-labelledby="nav-access-tab"
          tabIndex={0}
        >
          accessories
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
