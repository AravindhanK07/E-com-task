import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <ul style={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item._id} style={styles.item}>
              <img src={item.imageUrl} alt={item.name} style={styles.image} />
              <div style={styles.itemDetails}>
                <span style={styles.itemName}>{item.name}</span>
                <span style={styles.itemPrice}>${item.price}</span>
                <span style={styles.itemQty}>Qty: {item.qty}</span>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#666",
  },
  itemList: {
    listStyleType: "none",
    padding: "0",
  },
  item: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "15px",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    display: "block",
    fontSize: "16px",
    color: "#666",
  },
  itemQty: {
    display: "block",
    fontSize: "14px",
    color: "#999",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
};

export default CartScreen;
