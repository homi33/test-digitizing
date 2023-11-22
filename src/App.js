import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "./Components/Products";
import StyledModal from "./Components/Modal/index";

export default function App() {
  const [originalData, setOriginalData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://fakestoreapi.com/products";
      const filtersUrl = "https://fakestoreapi.com/products/categories";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setOriginalData(data);
        setProducts(data);

        const filtersResponse = await fetch(filtersUrl);
        const filters = await filtersResponse.json();
        setFilterCategories(filters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);

    const filteredData = originalData.filter(
      (product) => product.category.toLowerCase() === value.toLowerCase()
    );
    setProducts(filteredData);
  };

  const getProductDetails = async (id) => {
    try {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch product details. Status: ${response.status}`
        );
      }

      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error.message);
    }
  };

  const handleCardClick = (id) => {
    setShowModal(true);
    getProductDetails(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <select onChange={handleFilter} value={selectedFilter}>
        {filterCategories.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Products
        products={products}
        handleCardClick={handleCardClick}
        showModal={showModal}
      />
      <StyledModal
        productDetails={productDetails}
        showModal={showModal}
        handleClose={handleClose}
      />
    </div>
  );
}
