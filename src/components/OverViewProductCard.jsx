import profile from "../assets/profile.png";
import { useEffect, useState } from "react";
import axios from "axios";
function OverViewProductCard() {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/newProducts")
      .then((response) => setNewProducts(response.data));
  }, []);
  console.log(newProducts);
  console.log(newProducts[0]?.pName);

  return (
    <>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={newProducts[0]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{newProducts[0]?.pName}</h5>
        </div>
      </div>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={newProducts[1]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{newProducts[1]?.pName}</h5>
        </div>
      </div>
      <div className="card mt-4" style={{ width: "10rem" }}>
        <img src={newProducts[2]?.pimage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{newProducts[2]?.pName}</h5>
        </div>
      </div>
    </>
  );
}

export default OverViewProductCard;
