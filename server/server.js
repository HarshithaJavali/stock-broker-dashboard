const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static("../client"));

/* ---------------- USERS (In-Memory DB) ---------------- */
let users = []; // { email, password }

/* ---------------- SIGNUP ---------------- */
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ email, password });
  res.json({ success: true });
});

/* ---------------- LOGIN ---------------- */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) res.json({ success: true });
  else res.json({ success: false, message: "Invalid credentials" });
});

/* ---------------- STOCK LOGIC ---------------- */
const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let prices = {};

STOCKS.forEach(s => prices[s] = Math.floor(Math.random() * 1000) + 100);

setInterval(() => {
  STOCKS.forEach(s => {
    prices[s] += Math.floor(Math.random() * 20 - 10);
  });
  io.emit("priceUpdate", prices);
}, 1000);

io.on("connection", socket => {
  socket.emit("priceUpdate", prices);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
