import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Spider resturant, opened its first restaurant in Berlin on
              September 27, 1977. Today, there are 37 resturants all through
              Thuringia, Hesse, Hamburg and Berlin. Spider Restaurants are well
              known with a substantial gathering of people including families,
              kids, seniors, and business experts. Our benevolent condition is
              perfect for praising unique events, facilitating a business lunch,
              or assembling for a flavorful dinner with loved ones. Open day by
              day for lunch and dinner,’ Spider resturant’ offers a choice of
              naturally arranged things utilizing just the best fixings
              accessible. Top picks incorporate Certified Burger, Doner, and
              Pizza that are prevalent top choices with our visitors.
            </p>
            <NavLink to="/contact" className="btn btn-ouline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/aboutimg.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
