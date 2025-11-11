import "../../css/CostumerDetailModal.css";
const CustomerDetailModal = ({ setShowDetail, customer }) => {
  const handleCloseModal = () => {
    setShowDetail(false);
  };
  return (
    <>
      <div className="modal show d-block " tabIndex={-1}>
        <div className="modal-dialog shadow-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Costumer Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              />
            </div>
            <div className="modal-body customer-detail-modal">
              <div className="detail-card p-3">
                <div className="detail-item">
                  <span className="label">ID:</span>
                  <span className="value">{customer.id}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Name:</span>
                  <span className="value">{customer.costumerName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Email:</span>
                  <span className="value">{customer.costumerEmail}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Status:</span>
                  <span
                    className={`badge ${
                      customer.paymentStatus === "Paid"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {customer.paymentStatus}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">Address:</span>
                  <span className="value">{customer.address}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Due Date:</span>
                  <span className="value">{customer.dueDate}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Amount:</span>
                  <span className="value fw-semibold text-success">
                    Rs. {customer.tAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerDetailModal;
