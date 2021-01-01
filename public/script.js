const socket = io();

const chat = document.querySelector(".chat-form");
const Input = document.querySelector(".chat-input");

chat.addEventListener("submit", (event) => {
  event.preventDefault();
  socket.emit("chat", Input.value);
  Input.value = "";
});

socket.on("chat", (msg) => {
  const chatWindow = document.getElementsByClassName("chat-window")[0];
  const div = document.createElement("div");
  div.classList.add("render-message");
  div.innerText = msg;
  chatWindow.appendChild(div);
});
