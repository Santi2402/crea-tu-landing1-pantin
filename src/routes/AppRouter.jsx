import { Routes, Route } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar.jsx";
import HomePage from "../pages/HomePage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRouter;
