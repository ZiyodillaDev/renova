const list = document.querySelector(".buyList");
const newlist = document.createElement("li");
let data = JSON.parse(localStorage.getItem("products"));
let telegramSendInfo = []
data.forEach((element) => {
  const Img = document.createElement("img");
  const Text = document.createElement("h3")
  Img.classList.add("newImg")
  Img.src = `http://${element.image_url}`;
  Text.textContent = element.name
   telegramSendInfo.push(element.name);
  newlist.appendChild(Img);
  newlist.appendChild(Text);
  newlist.classList.add("newList");
  list.appendChild(newlist);
});

console.log(telegramSendInfo);
