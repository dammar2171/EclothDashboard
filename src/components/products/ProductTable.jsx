import style from "../../css/Product.module.css";
function ProductTable({ items }) {
  return (
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
                  <small className="text-muted">{product.description}</small>
                </div>
              </div>
            </td>
            <td>{product.category}</td>
            <td>{product.id}</td>
            <td>
              <span className="fw-bold text-success">Rs {product.sPrice}</span>
            </td>
            <td>{product.pCreater}</td>
            <td
              style={
                product.status == "active"
                  ? { color: "blue" }
                  : { color: "red" }
              }
            >
              {product.status}
            </td>
            <td>
              <button className="btn btn-sm btn-success me-2">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
