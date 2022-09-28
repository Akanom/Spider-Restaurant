import React from "react";

export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row ">
          <div class="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="aboutus.html">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="contactus.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-5 text-center">
            <h5>Follow Us</h5>
            <a
              class="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              class="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              class="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              class="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i class="fa fa-youtube"></i>
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <a role="button" class="btn btn-link" href="###">
              <i class="fa fa-phone"></i> 08088811113
            </a>
            <br />
            <a role="button" class="btn btn-link" href="##">
              <i class="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
