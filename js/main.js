// backTop
const toTop = document.querySelector(".toTop");
const elIcons = document.querySelector(".media-icons");
const elllogo = document.querySelectorAll(".fab");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    toTop.classList.add("backactive");
  } else {
    toTop.classList.remove("backactive");
  }
});
// admin js

const elOverlay = document.querySelectorAll(".overlay");
const elClose = document.querySelectorAll(".js_close");
const elAdmin = document.querySelectorAll(".js_admin");

elAdmin.forEach((element) => {
  let token = localStorage.getItem("token");
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (!token) {
      elOverlay.forEach((el) => {
        el.style.display = "flex";
      });
    } else {
      location.replace("productAdd.html");
    }
  });
});

elClose.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();
    elOverlay.forEach((el) => {
      el.style.display = "none";
    });
  });
});

// Login

const elAdminLogin = document.querySelector(".modal_admin");
const adminName = document.querySelector(".admin_name");
const adminParol = document.querySelector(".admin_parol");

elAdminLogin.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let admin = {
    email: adminName.value,
    password: adminParol.value,
  };

  fetch(`https://renova.uz/v1/login/${adminName.value}/${adminParol.value}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        location.replace("productAdd.html");
      }
    })
    .catch((err) => console.log(err));
});

// loader
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 2000);
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dissapear");
}

const pass = document.querySelector(".admin_parol");
const eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});

// lang

const DropBtn = document.querySelector(".dropbtn");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  DropBtn.classList.toggle("activeDropDownImg");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  DropBtn.classList.toggle("activeDropDownImg");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        DropBtn.classList.remove("activeDropDownImg");
      }
    }
  }
};

const allProd = document.querySelectorAll(".allProd");
const productTab1 = document.querySelector(".firstProd");
const productTab2 = document.querySelector(".secondProd");
const productTab3 = document.querySelector(".thirdProd");
const productTab4 = document.querySelector(".fifthProd");
const productTab5 = document.querySelector(".fourthProd");
const productTab6 = document.querySelector(".sixthProd");

productTab1.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "doors");
});
productTab2.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "woods");
});
productTab3.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "tools");
});
productTab4.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "pipes");
});
productTab5.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "wallpapers");
});
productTab6.addEventListener("click", () => {
  localStorage.setItem("activeProduction", "buildings");
});

allProd.forEach((element) => {
  element.addEventListener("click", () => {
    localStorage.setItem("activeProduction", "alls");
  });
});
