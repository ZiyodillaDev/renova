
  const submitForm = document.querySelector(".js-form")
console.log(submitForm ,"form");

  submitForm.addEventListener("submit", ()=>{
    Toastify({
      text: "Muvaffaqqiyatli Jonatildi",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#4BB543",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  })