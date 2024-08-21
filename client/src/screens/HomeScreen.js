import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Products</h1>

      <div style={styles.productContainer}>
        {products.map((product) => (
          <div key={product._id} style={styles.productCard}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={styles.image}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <button onClick={() => addToCart(product)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  link: {
    display: "block",
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
    textDecoration: "none",
    fontSize: "16px",
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    padding: "15px",
    width: "200px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productName: {
    fontSize: "18px",
    margin: "10px 0",
  },
  productDescription: {
    fontSize: "14px",
    color: "#666",
  },
  productPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default HomeScreen;
