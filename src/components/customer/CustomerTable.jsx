import { useDispatch } from "react-redux";
import { removeCustomer } from "../../store/customerSlice";
import { useState } from "react";
import CustomerDetailModal from "./CustomerDetailModal";
import CustomerEditModal from "../../components/customer/CustomerEditModal";

function CustomerTable({ items }) {
  const [showDetail, setShowDetail] = useState(false);
  const [editDetail, setEditDetail] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const dispatch = useDispatch();
  const handleDeleteCustomer = (id) => {
    dispatch(removeCustomer(id));
  };

  const handleViewDetail = (customer) => {
    setSelectedCustomer(customer);
    setShowDetail(true);
  };

  const handleEditDetail = (customer) => {
    setSelectedCustomer(customer);
    setEditDetail(true);
  };
  return (
    <>
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
          {items.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.costumerName}</td>
              <td>{customer.costumerEmail}</td>
              <td>{customer.paymentStatus}</td>
              <td>{customer.tAmount}</td>
              <td>{customer.dueDate}</td>
              <td>{customer.address}</td>
              <td>
                <button
                  onClick={() => handleEditDetail(customer)}
                  className="btn btn-sm btn-success w-100 mb-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleViewDetail(customer)}
                  className="btn btn-sm w-100 btn-info mb-2"
                >
                  Detail
                </button>
                <button
                  onClick={() => {
                    handleDeleteCustomer(customer.id);
                  }}
                  className="btn btn-sm w-100 btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDetail && (
        <CustomerDetailModal
          setShowDetail={setShowDetail}
          customer={selectedCustomer}
        />
      )}
      {editDetail && (
        <CustomerEditModal
          setEditDetail={setEditDetail}
          customer={selectedCustomer}
        />
      )}
    </>
  );
}

export default CustomerTable;
