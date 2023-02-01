import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            arial-label="Close"
          ></button>
          <div className="row justify-content-center">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              height="180px"
              width="150px"
            />
          </div>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className="lead fw-bold">${cartItem.price}</p>
            <h3>Quantity: {cartItem.quantity}</h3>
            <h4>Total Price</h4>
            <h5>${parseFloat(cartItem.price)*parseInt(cartItem.quantity)}</h5>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4"></div>
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}
