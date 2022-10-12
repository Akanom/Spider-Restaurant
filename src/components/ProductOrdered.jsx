import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton/dist";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

export default function ProductOrdered() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (products) => {
    dispatch(addCart(products));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`./db.json/${id}`);
      setProduct(await response.json());
      setLoading(false);
      console.log(products);
      console.log(setProduct);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 20 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={150} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={products.image}
            alt={products.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{products.category}</h4>
          <h1 className="display-5">{products.title}</h1>
          <h3 className="display-6 fw-bold my-4">{products.price}</h3>
          <p className="lead">{products.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(products)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
