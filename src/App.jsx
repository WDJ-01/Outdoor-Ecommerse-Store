import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Account } from "./pages/account/account";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Regsiter } from "./pages/login/register";
import { ProductPage } from "./components/product/productPage";
import { ProductDisplay } from "./components/product/productDisplay";
import { products } from "./resources/data/data";
import { useSelector } from "react-redux";


const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/regsiter" element={<Regsiter />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDisplay/>} />
          </Routes>

          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  );
};
export default App;
