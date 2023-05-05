// Header
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});



// admin js

const elAdmin = document.querySelector('.js_admin');
const elOverlay = document.querySelector('.overlay');
const elClose =document.querySelector(".js_close")

elAdmin.addEventListener('click', (evt) => {
	evt.preventDefault();
	console.log(elOverlay.style.display ="flex");
});

elClose.addEventListener("click",(evt)=>{
evt.preventDefault()
elOverlay.style.display ="none"
})

const elAdminLogin =document.querySelector(".modal_admin")
const adminName = document.querySelector(".admin_name")
const adminParol = document.querySelector(".admin_parol")

elAdminLogin.addEventListener("submit" ,(evt)=>{
  evt.preventDefault()
  
  const adName =adminName.value
  const adPas =adminParol.value
  const adminObj = {
      'name':adminName.value,
     'password':adminParol.value
  }
  console.log(adminObj);
  location.replace("admin.html")

  fetch("http://95.130.227.84:8075/api/v1/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminObj),
    }).then(res =>res.json()).then((data)=>{
      console.log('data' ,data);
      if(data.data){
        
          if(adName == "turgunboyev791@gmail.com" && adPas =="asad7167"){
            localStorage.setItem("accessToken" ,data.data.accessToken)
            localStorage.setItem("refreshToken" ,data.data.refreshToken)
              location.replace("admin.html")
          }

      }
  }).catch(err =>console.log(err))

})