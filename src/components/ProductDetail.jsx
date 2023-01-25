import { useParams } from "react-router";
import DATA from "../DATA";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";


export default function ProductDetail() {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const proIdent = useParams();
  const prodDetail = DATA.filter((prod) => String(prod === proIdent.id ));
  const product = prodDetail[0];
  console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 p-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">{product.price}</h2>
            <p className="lead">{product.description}</p>
            <button
              onClick={() => handleCart(product)}
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
