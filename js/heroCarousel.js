const navigation = document.querySelector(".navigation");

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


window.onload = function(){
      addActive = function(slide) {slide.classList.add('active')},
      removeActive = function(slide) {slide.classList.remove('active')};
      addActiveBtn = function(slide) {slide.classList.add('active')},
      removeActiveBtn = function(slide) {slide.classList.remove('active')};
      addActiveContent = function(slide) {slide.classList.add('active')},
      removeActiveContent = function(slide) {slide.classList.remove('active')};
  addActive(slides[0]);
  addActiveBtn(btns[0]);
  addActiveContent(contents[0]);
  
  
  setInterval(function (){
    for (var i = 0; i < slides.length; i++){
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 200, slides[i]); //Doesn't be worked in IE-9
        break;
      }
      if (slides[i].classList.contains('active')) { 
        slides[i].removeAttribute('style');
        setTimeout(removeActive, 0, slides[i]); //Doesn't be worked in IE-9
        addActive(slides[i + 1]);
        break;
      }
    } 
    for (var i = 0; i < btns.length; i++){
      if (i + 1 == btns.length) {
        addActive(btns[0]);
        setTimeout(removeActiveBtn, 550, btns[i]); //Doesn't be worked in IE-9
        break;
      }
      if (btns[i].classList.contains('active')) { 
        btns[i].removeAttribute('style');
        setTimeout(removeActiveBtn, 0, btns[i]); //Doesn't be worked in IE-9
        addActive(btns[i + 1]);
        break;
      }
    } 
    for (var i = 0; i < contents.length; i++){
      if (i + 1 == contents.length) {
        addActive(contents[0]);
        setTimeout(removeActiveContent, 300, contents[i]); //Doesn't be worked in IE-9
        // break;
      }
      if (contents[i].classList.contains('active')) { 
        contents[i].removeAttribute('style');
        setTimeout(removeActiveContent, 0, contents[i]); //Doesn't be worked in IE-9
        addActive(contents[i + 1]);
        break;
      }
    } 
  }, 6000);
}
  