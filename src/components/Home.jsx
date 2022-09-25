import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              It is time to order your food
            </h5>
            <p class="card-text lead fs-2">Find a resturant near you</p>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
