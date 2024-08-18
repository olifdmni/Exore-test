import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;
