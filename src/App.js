import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Product from "./components/Product";
// import ProductOrdered from "./components/OLD PAGES/ProductOrdered";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Redirect } from "react-router-dom";
import ProductOrdered from "./components/ProductOrdered";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products/:id" component={ProductOrdered} />
         {/* <Redirect exact path= "/"/> */}
        {/* {<Route exact path="products/:id" component={ProductDetail} />} */}
        
       
      </Switch>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
