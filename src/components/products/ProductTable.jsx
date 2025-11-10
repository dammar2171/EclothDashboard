import { useState } from "react";
import style from "../../css/Product.module.css";
import { removeProduct } from "../../store/newproductSlice";
import ProductModal from "./ProductModal";
import AddProductModal from "./AddProductModal";
import { useDispatch } from "react-redux";

function ProductTable({ items, source, show, setShowModal }) {
  const [myModal, setMyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setMyModal(true);
  };

  const handleDelete = (id, source) => {
    dispatch(removeProduct({ id, source }));
  };

  return (
    <>
      {" "}
      {show && <AddProductModal setShowModal={setShowModal} source={source} />}
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Id</th>
            <th>Price</th>
            <th>Creater</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={product.pimage}
                    alt={product.pName}
                    className={style.productImage}
                  />
                  <div>
                    <h6 className="mb-0">{product.pName}</h6>
                    <small className="text-muted">{product.description}</small>
                  </div>
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.id}</td>
              <td>
                <span className="fw-bold text-success">
                  Rs {product.sPrice}
                </span>
              </td>
              <td>{product.pCreater}</td>
              <td
                style={{ color: product.status === "active" ? "blue" : "red" }}
              >
                {product.status}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id, source)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {myModal && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setMyModal={setMyModal}
        />
      )}
    </>
  );
}

export default ProductTable;
