import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
