const user = localStorage.getItem("user");
if (!user) window.location.href = "index.html";

document.getElementById("user").innerText = "Logged in as: " + user;

const socket = io();
let subscribed = [];

function subscribe() {
  const stock = document.getElementById("stock").value;
  if (!subscribed.includes(stock)) subscribed.push(stock);
}

socket.on("priceUpdate", prices => {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  subscribed.forEach(s => {
    const li = document.createElement("li");
    li.innerText = `${s} : ₹${prices[s]}`;
    ul.appendChild(li);
  });
});

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
