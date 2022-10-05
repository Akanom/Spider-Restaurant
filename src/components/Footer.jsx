import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row ">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="col-6 col-sm-5 text-center">
            <h5>Follow Us</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="###">
              <i className="fa fa-phone"></i> 08088811113
            </a>
            <br />
            <a role="button" className="btn btn-link" href="name@example.com">
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
