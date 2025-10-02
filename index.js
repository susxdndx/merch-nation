// Example: Fetch products
fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    console.log(data); // render items dynamically
  });

// Example: Add to cart
fetch("http://localhost:5000/api/cart/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, name: "Premium T-Shirt", price: 999, img: "url" })
})
.then(res => res.json())
.then(data => console.log(data));


const express = require("express");
const router = express.Router();

let cart = [];

// GET cart
router.get("/", (req, res) => {
  res.json({ cart, total: cart.reduce((acc, item) => acc + item.price, 0) });
});

// ADD to cart
router.post("/add", (req, res) => {
  const { id, name, price, img } = req.body;
  cart.push({ id, name, price, img });
  res.json({ message: "Item added to cart", cart });
});

// REMOVE from cart
router.post("/remove", (req, res) => {
  const { id } = req.body;
  cart = cart.filter(item => item.id !== id);
  res.json({ message: "Item removed", cart });
});

// CLEAR cart
router.post("/clear", (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
});

module.exports = router;

const express = require("express");
const router = express.Router();

let status = "Safe"; // could also be "Threat Detected"

// GET security status
router.get("/", (req, res) => {
  res.json({ status });
});

// Trigger alert
router.post("/alert", (req, res) => {
  status = "Threat Detected";
  res.json({ message: "🚨 Alert triggered!", status });
});

// Reset status
router.post("/reset", (req, res) => {
  status = "Safe";
  res.json({ message: "✅ Security reset", status });
});

module.exports = router;


