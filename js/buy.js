const list = document.querySelector(".buyList");
const newlist = document.createElement("li");
let data = JSON.parse(localStorage.getItem("products"));
console.log(data);
data.forEach((element) => {
  const Img = document.createElement("img");
  const Text = document.createElement("h3")
  Img.classList.add("newImg")
  Img.src = element.img;
  Text.textContent = element.name
  newlist.appendChild(Img);
  newlist.appendChild(Text);
  newlist.classList.add("newList");
  list.appendChild(newlist);
});
