  // Hide lang
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
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