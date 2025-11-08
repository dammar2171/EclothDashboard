import { useEffect } from "react";
import { fetchNewProducts } from "../store/newproductSlice";
import { useDispatch, useSelector } from "react-redux";
function OverViewProductCard() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.newproducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={items[0]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{items[0]?.pName}</h5>
        </div>
      </div>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={items[1]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{items[1]?.pName}</h5>
        </div>
      </div>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={items[2]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{items[2]?.pName}</h5>
        </div>
      </div>
    </>
  );
}

export default OverViewProductCard;
