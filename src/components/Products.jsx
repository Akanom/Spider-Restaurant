import DATA from "../DATA";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products() {

  const [displayProducts, setDisplayProducts] = useState(DATA)
  const [searchValue, setSearchValue] = useState("");

  const cardItem = (item) => {
    return (
      <div className="card  my-5 py-4" key={item.id} style={{ width: "20rem" }}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">{item.price}</p>
          <NavLink
            to={`/products/${item.id}`}
            className="btn btn-outline-primary"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  useEffect(() => {
    console.log("sear", searchValue);
    let data = DATA.filter(f => f.title.toLowerCase().includes(searchValue.toLowerCase()));
    setDisplayProducts(data);
  }, [searchValue]);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Our Promotions</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row  ">
        <form className="d-flex w-75 mx-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => { setSearchValue(e.target.value) }}
          />
          <div className="btn btn-outline-success" >
            Search
          </div>
        </form>
      </div>
      <div className="container">
        {
          displayProducts.length > 0 &&
          <div className="row justify-content-around">{displayProducts.map(cardItem)}</div>
        }
        {
          displayProducts.length == 0  &&
          <div className="row justify-content-around text-muted display-5" style={{margin: "100px 0"}}>No Results for {searchValue}</div>
        }
      </div>
    </div>
  );
}
