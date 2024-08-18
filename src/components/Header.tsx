import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">
          <Link to="/">My Store</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/products"
              className="hover:text-blue-200 transition duration-300 transform hover:-translate-y-1"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/add-product"
              className="hover:text-blue-200 transition duration-300 transform hover:-translate-y-1"
            >
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
