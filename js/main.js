// Hide lang
const elTop = document.querySelector(".top");
const elIcons = document.querySelector(".media-icons");

var prevScrollpos = window.pageYOffset;
elTop.style.display = "none";
const num = 686;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset >= num) {
    elTop.style.display = "flex";
    elIcons.style.top = "20%";
  } else {
    elTop.style.display = "none";
    elIcons.style.top = "50%";
  }
  if (prevScrollpos > currentScrollPos) {
    let hide = document.querySelectorAll(".header-top");
    let header = document.querySelectorAll("header");

    hide.forEach((el) => {
      el.style.top = "0";
    });
    header.forEach((el) => {
      el.style.top = "47px";
    });
  } else {
    let hide = document.querySelectorAll(".header-top");
    let header = document.querySelectorAll("header");
    hide.forEach((el) => {
      el.style.top = "-80px";
    });
    header.forEach((el) => {
      el.style.top = "0";
    });
  }
  prevScrollpos = currentScrollPos;
};

// admin js

const elOverlay = document.querySelector(".overlay");
const elClose = document.querySelector(".js_close");
const elAdmin = document.querySelector(".js_admin");


elAdmin.addEventListener("click", (evt) => {
  evt.preventDefault();
  elOverlay.style.display = "flex";
});
elClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  elOverlay.style.display = "none";
});

const elAdminLogin = document.querySelector(".modal_admin");
const adminName = document.querySelector(".admin_name");
const adminParol = document.querySelector(".admin_parol");

elAdminLogin.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const adName = adminName.value;
  const adPas = adminParol.value;
  const adminObj = {
    name: adminName.value,
    password: adminParol.value,
  };
  console.log(adminObj);
  location.replace("admin.html");

  fetch("http://95.130.227.84:8075/api/v1/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adminObj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      if (data.data) {
        if (adName == "turgunboyev791@gmail.com" && adPas == "asad7167") {
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.refreshToken);
          location.replace("admin.html");
        }
      }
    })
    .catch((err) => console.log(err));
});
