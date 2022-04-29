let chatContainer = document.getElementById("chat-container");

let chatInput = document.getElementById("chat-input");
let chatButton = document.getElementById("chat-button");

let ul = document.querySelector("ul");

const empty = document.getElementById("chat-empty");

let body = document.querySelector("body");

let emojiButton = document.getElementById("chat-emoji");
let emojiModal = document.getElementById("chat-emoji-modal");

let chatFile = document.getElementById("chat-file");
let chatModal = document.getElementById("chat-file-modal");

// const imagenDePerfil = new Image(50, 50);
const imagenDePerfil = document.createElement('img')


imagenDePerfil.classList.add = "chat-image-profile";
imagenDePerfil.src = "https://picsum.photos/200/301";

// Modificar los dos mensajes consecutivos para que parezcan de personas disintas, uno a la izq y otro a la derecha
// Imagen de perfil esta creada con createElement, esta bien eso? DEmora la imagen por el llamado externo

function crearTextoDeChat(event) {
  event.preventDefault();

  const textChat = chatInput.value;

  if (textChat !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const profile = document.createElement("p");

    p.textContent = textChat;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(imagenDePerfil);

    chatInput.value = "";

    chatContainer.setAttribute("style", "overflow:auto;");
  }
}


function handleModal(event, modal) {
  console.log("entro");
  event.stopPropagation();

  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function closeModal() {
  console.log("Closed");
  emojiModal.style.display = "none";
  chatModal.style.display = "none";
}

// Add Event Listeners

chatButton.addEventListener("click", (event) => crearTextoDeChat(event));

emojiButton.addEventListener("click", (event) =>
  handleModal(event, emojiModal)
);
chatFile.addEventListener("click", (event) => handleModal(event, chatModal));
body.addEventListener("click", closeModal);
// SELECCIONAR UN EMOJI

// function getTheSelectedEmoji () {
var emojiList = document.querySelectorAll(".emoji-modal");

console.log(emojiList);

emojiList.forEach((item, index) => {
  item.addEventListener("click", async function () {
    let selected = item.innerHTML;
    await navigator.clipboard.writeText(selected);
    const copied = await navigator.clipboard.readText();
    console.log(copied);
    chatInput.value += copied;
  });
});
