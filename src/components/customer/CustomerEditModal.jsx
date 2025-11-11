import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../../store/customerSlice";
import "../../css/CostumerDetailModal.css";

function CustomerEditModal({ customer, setEditDetail }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    customerEmail: "",
    tAmount: "",
    dueDate: "",
    address: "",
    paymentStatus: "Pending",
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        id: customer.id ?? "",
        customerName: customer.customerName ?? "",
        customerEmail: customer.customerEmail ?? "",
        tAmount: customer.tAmount ?? "",
        dueDate: customer.dueDate ?? "",
        address: customer.address ?? "",
        paymentStatus: customer.paymentStatus ?? "Pending",
      });
    }
  }, [customer]);

  const handleCloseModal = () => {
    setEditDetail(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        paymentStatus: checked ? "Paid" : "Pending",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim()) return alert("Enter customer name.");
    if (!formData.customerEmail.trim()) return alert("Enter customer email.");
    const payload = {
      ...formData,
      tAmount: formData.tAmount === "" ? 0 : Number(formData.tAmount),
    };
    dispatch(updateCustomer(payload));
    handleCloseModal();
  };

  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog shadow-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Customer</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            />
          </div>
          <div className="modal-body customer-detail-modal">
            <div className="detail-card p-3">
              <form onSubmit={handleEditForm}>
                <div className="row g-2 mb-2">
                  <div className="col">
                    <label className="form-label">Id</label>
                    <input
                      name="id"
                      value={formData.id}
                      type="number"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Name</label>
                  <input
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    name="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="row g-2 mb-2">
                  <div className="col">
                    <label className="form-label">Amount</label>
                    <input
                      name="tAmount"
                      type="number"
                      value={formData.tAmount}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Due Date</label>
                    <input
                      name="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-2 d-flex align-items-center gap-3">
                  <div>
                    <label className="form-label d-block mb-1">
                      Payment Status
                    </label>
                    <select
                      name="paymentStatus"
                      value={formData.paymentStatus}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                  <div className="ms-auto">
                    <div className="form-check form-switch mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formData.paymentStatus === "Paid"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Paid</label>
                    </div>
                  </div>
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
                    Update Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerEditModal;
