const list = document.querySelector(".buyList");
const newlist = document.createElement("li");
let data = JSON.parse(localStorage.getItem("products"));
let telegramSendInfo = [];
data.forEach((element) => {
  const Img = document.createElement("img");
  const Text = document.createElement("h3");
  Img.classList.add("newImg");
  Text.classList.add("newText");
  Img.src = `http://${element.image_url}`;
  Text.textContent = element.name;
  telegramSendInfo.push(element.name);
  newlist.appendChild(Img);
  newlist.appendChild(Text);
  newlist.classList.add("newList");
  list.appendChild(newlist);
});

const elNumber = document.getElementById("number");

// phone

const phone = document.querySelector(".phone");
[].forEach.call(document.querySelectorAll(".phone"), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+998 (__) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 2);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
  input.addEventListener("mouseup", (event) => {
    event.preventDefault();
    if (input.value.length < 4) {
      input.setSelectionRange(4, 4);
    } else {
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });
});
