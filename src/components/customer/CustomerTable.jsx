function CustomerTable({ items }) {
  return (
    <table className="table table-bordered table-hover align-middle">
      <thead className="table-light">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.costumerName}</td>
            <td>{customer.costumerEmail}</td>
            <td>{customer.paymentStatus}</td>
            <td>{customer.tAmount}</td>
            <td>{customer.dueDate}</td>
            <td>{customer.address}</td>
            <td>
              <button className="btn btn-sm btn-success w-100 mb-2">
                Edit
              </button>
              <button className="btn btn-sm w-100 btn-info mb-2">Detail</button>
              <button className="btn btn-sm w-100 btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
