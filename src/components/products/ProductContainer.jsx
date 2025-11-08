import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewProducts } from "../../store/productSlice";
import style from "../../css/Product.module.css";

function ProductContainer() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={`${style.costumContainer}`}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0">Top Products</h5>
        <button className="btn btn-primary">Add New Products</button>
      </div>

      <div className="table-responsive">
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
            {items.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={product.pimage}
                      alt={product.pName}
                      className={style.productImage}
                    />
                    <div>
                      <h6 className="mb-0">{product.pName}</h6>
                      <small className="text-muted">
                        {product.description}
                      </small>
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
                <td>Sucess</td>
                <td>
                  <button className="btn btn-sm btn-success me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductContainer;
