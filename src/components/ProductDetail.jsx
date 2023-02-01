import DATA from "../DATA";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addItem, delItem } from "../redux/actions/index";


export default function ProductDetail() {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [qty, setQty] = useState(1);

  const location = useLocation();
  const prodDetail = DATA.find(p => p.id == location.pathname.split("/")[2]);


  const dispatch = useDispatch();

  const handleCart = (product) => {
    let prod = {...product, quantity: qty};
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(prod));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(prod));
      setCartBtn("Add to Cart");
    }
  };

  const divStyle = {
    height: '400px',
    backgroundImage: 'url(' + prodDetail.image + ')',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div className="container my-5 p-3">
        <div className="row">
          <div className="bg-image col-md-6 d-flex flex-basis-70 justify-content-center mx-auto product"
            style={divStyle} >
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{prodDetail.title}</h1>
            <hr />
            <h2 className="my-4">${parseFloat(prodDetail.price)*parseInt(qty)}</h2>
            <p className="lead">{prodDetail.description}</p>
            <h3>Quantity</h3>
            <div className="qty-con">
              <div onClick={()=>{if(qty>1)(setQty(parseInt(qty)-1))}}>-</div>
              <input type="number" min={1} name="" id="" value={qty} onChange={(e) => setQty(e.target.value)} />
              <div onClick={()=>{setQty(parseInt(qty)+1)}}>+</div>
            </div>
            <button
              onClick={() => handleCart(prodDetail)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
