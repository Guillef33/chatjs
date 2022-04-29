let chatContainer = document.getElementById("chat-container");

let chatInput = document.getElementById("chat-input");
let chatButton = document.getElementById("chat-button");

let ul = document.querySelector("ul");

const empty = document.getElementById("chat-empty");

chatButton.addEventListener("click", (e) => {
  e.preventDefault();

  const textChat = chatInput.value;

  if (textChat !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const profile = document.createElement("p");
    const img = new Image(50, 50);

    img.classList.add = "chat-image-profile";
    img.src = "https://picsum.photos/200/301";

    img.addEventListener("click", function (e) {
      li.appendChild(profile);
      li.style.fontSize = "12px";
    });

    p.textContent = textChat;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(img);

    chatInput.value = "";

    chatContainer.setAttribute("style", "overflow:auto;");
  }
});

let emojiButton = document.getElementById("chat-emoji");
let emojiModal = document.getElementById("chat-emoji-modal");
let chatFile = document.getElementById("chat-file");
let chatModal = document.getElementById("chat-file-modal");

// Two similar functions to create one

emojiButton.addEventListener("click", function () {
  if (emojiModal.style.display === "none") {
    emojiModal.style.display = "block";
  } else {
    emojiModal.style.display = "none";
  }
});

chatFile.addEventListener("click", function (event) {
  if (chatModal.style.display === "none") {
    chatModal.style.display = "block";
  } else {
    chatModal.style.display = "none";
  }
});

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
