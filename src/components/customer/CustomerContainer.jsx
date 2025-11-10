import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCostumers } from "../../store/customerSlice";
import style from "../../css/Product.module.css";
import CustomerTable from "./CustomerTable";

function ProductContainer() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.costumers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCostumers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={`${style.costumContainer}`}>
      <div className="d-flex align-items-center justify-content-between mb-3"></div>
      <h4 className="text-center pb-3">Custumers List And Details</h4>
      <div className="table-responsive">
        <CustomerTable items={items} />
      </div>
    </div>
  );
}

export default ProductContainer;
