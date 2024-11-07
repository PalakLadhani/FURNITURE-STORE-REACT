import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./pages/PrivateRoute";
import ProductDetails from "./components/ProductDetails"; // Import ProductDetails component

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        {/* Update the product details route to use ProductDetails instead of SingleProduct */}
        <Route path="/product/:id">
          <ProductDetails /> {/* Use ProductDetails component here */}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
