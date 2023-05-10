// backTop
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
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
      location.replace("admin.html");
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

  fetch(
    `https://renova.jprq.live/v1/login/${adminName.value}/${adminParol.value}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        location.replace("admin.html");
      }
    })
    .catch((err) => console.log(err));
});

