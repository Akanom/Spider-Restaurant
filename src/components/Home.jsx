import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container ">
            <h5 className="card-title display-3 fw-bolder mb-0 text-center">
              It is time to order your food
            </h5>
            <p className="card-text lead fs-2 text-center">
              Find a resturant near you
            </p>
            <div className="row  ">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Product/>
      
      <div className="container">
        <div className="row">
          <p className="display-6 fw-bolder text-center">How to order</p>
          <div className="row row-no-margin">
          <hr />
            <div className="col">
              <img
                src="/assets/location.jpg"
                className="card-img"
                alt="Background"
                height="150px"
              />
              <p className="text-center ">Provide your location</p>
            </div>
            <div className="col">
              <img
                src="/assets/order.png"
                className="card-img"
                alt="Background"
                height="150px"
              />
              <p className="text-center ">Order</p>
            </div>
            <div className="col">
              <div className="w-75">
                <img
                  src="/assets/pay.png"
                  className="card-img"
                  alt="Background"
                  height="150px"
                />
              </div>
              <p className="text-center ">Pay</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
