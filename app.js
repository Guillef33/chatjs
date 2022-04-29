// Picsum random images / https://picsum.photos/200
const messages = [
  {
    text: "Hola como estas",
    title: "Primer mensaje",
    author: 1,
    id: 1,
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    text: "Todo bien, vos?",
    title: "Segundo mensaje",
    author: 2,
    id: 2,
    image: "https://picsum.photos/200",
  },
];

console.log(messages);

function addChats(chats) {
  let newChat = chats[0];
  console.log("Esta es addChats", newChat);
}

function addEventListener() {
  let formChats = document.getElementById("chat-form");

  formChats.addEventListener("submit", function (event) {
    event.preventDefault();
    let newChat = document.getElementById("chat-input").value;
    let newPushChat = { text: newChat };
    console.log(newPushChat);
    messages.push(newPushChat);
    console.log(messages);
  });
}

function renderTheMessages() {
  console.log(messages);
  messages.map((item) =>
    document.write(`
      <div class="chat-row">
          <img src=${item.image} alt="chat-image-profile" class="chat-image-profile" />
          <p>${item.text}</p>
      </div>
      `)
  );
}

function inputWrapper() {
  document.write(`
    <form class="chat-input" id="chat-form">
        <input type="text" id="chat-input"/> 
        <button type="submit"  > Comentar </button>
    </form>
    `);
}

renderTheMessages();
inputWrapper();
addEventListener();
