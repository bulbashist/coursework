import "./App.css";
import MainPage from "./app/pages/home/main-page";
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Routes } from "react-router";
import OrdersPage from "./app/pages/orders/orders-page";
import { useEffect } from "react";
import ProductPage from "./app/pages/product/product";
import CartPage from "./app/pages/cart/cart";
import { useAppDispatch } from "./app/hooks";
import { getTokens } from "./app/services/auth";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTokens());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<Outlet />}>
            <Route index element={<ul></ul>} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
