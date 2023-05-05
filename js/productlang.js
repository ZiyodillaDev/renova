let langs = document.querySelector(".langs");
let link = document.querySelectorAll(".lang");
let lang1 = document.querySelector(".lang1");
let lang2 = document.querySelector(".lang2");
let lang3 = document.querySelector(".lang3");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");
let doors = document.querySelector(".doors");
let woods = document.querySelector(".js-woods");
let tools = document.querySelector(".js-tools");
let paper = document.querySelector(".js-paper");
let pipe = document.querySelector(".js-pipe");
let build = document.querySelector(".js-build");
let pages__desc = document.querySelector(".pages__desc");
let service__desc = document.querySelector(".service__desc");
let contacts_desc = document.querySelector(".contacts_desc");
let pages__link1 = document.querySelector(".pages__link1");
let pages__link2 = document.querySelector(".pages__link2");
let pages__link3 = document.querySelector(".pages__link3");
let pages__link4 = document.querySelector(".pages__link4");
let pages__link5 = document.querySelector(".pages__link5");
let service__link1 = document.querySelector(".service__link1");
let service__link2 = document.querySelector(".service__link2");
let service__link3 = document.querySelector(".service__link3");
let service__link4 = document.querySelector(".service__link4");
let service__link5 = document.querySelector(".service__link5");
let clickSuccess = document.querySelectorAll(".click-success");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");
    lang1.textContent = data[attr].lang1;
    lang2.textContent = data[attr].lang2;
    lang3.textContent = data[attr].lang3;
    link1.textContent = data[attr].link1;
    link2.textContent = data[attr].link2;
    link3.textContent = data[attr].link3;
    link4.textContent = data[attr].link4;
    link5.textContent = data[attr].link5;
    pages__desc.textContent = data[attr].pages__desc;
    pages__link1.textContent = data[attr].pages__link1;
    pages__link2.textContent = data[attr].pages__link2;
    pages__link3.textContent = data[attr].pages__link3;
    pages__link4.textContent = data[attr].pages__link4;
    pages__link5.textContent = data[attr].pages__link5;
    service__desc.textContent = data[attr].service__desc;
    service__link1.textContent = data[attr].service__link1;
    service__link2.textContent = data[attr].service__link2;
    service__link3.textContent = data[attr].service__link3;
    service__link4.textContent = data[attr].service__link4;
    service__link5.textContent = data[attr].service__link5;
    contacts_desc.textContent = data[attr].contacts_desc;
    doors.textContent = data[attr].doors;
    woods.textContent = data[attr].woods;
    tools.textContent = data[attr].tools;
    paper.textContent = data[attr].paper;
    pipe.textContent = data[attr].pipe;
    build.textContent = data[attr].build;
    clickSuccess.forEach(elm => {
        elm.textContent = data[attr].clickSuccess;
    });
  });
});

let data = {
    uzbek: {
      lang1: "ING",
      lang2: "RUS",
      lang3: "O'ZB",
      link1: "Asosiy",
      link2: "Haqida",
      link3: "Mahsulotlar",
      link4: "Xizmatlar",
      link5: "Yangiliklar",
      pages__desc: "Sahifalar",
      pages__link1: "Asosiy",
      pages__link2: "Haqida",
      pages__link3: "Mahsulotlar",
      pages__link4: "Xizmatlar",
      pages__link5: "Yangiliklar",
      service__desc: "Xizmatlar",
      service__link1: "Student Viza",
      service__link2: "Immigratsiya",
      service__link3: "Turmush Viza",
      service__link4: "Mehmon Viza",
      service__link5: "Oz muddatli Viza",
      contacts_desc: "Kontaktlar",
      doors:"Eshiklar",
      woods:"Yog'ochlar",
      tools:"Aslaxalar",
      paper:"Gulqog'oz",
      pipe:"Quvurlar",
      build:"Qurilish mahsulotlari",
      clickSuccess:"Sotib olish",
    },
    english: {
      lang1: "ENG",
      lang2: "RUS",
      lang3: "UZB",
      link1: "Home",
      link2: "About",
      link3: "Products",
      link4: "Services",
      link5: "News",
      pages__desc: "Pages",
      pages__link1: "Home",
      pages__link2: "About",
      pages__link3: "Products",
      pages__link4: "Services",
      pages__link5: "News",
      service__desc: "Services",
      service__link1: "Student Visa",
      service__link2: "Immigration",
      service__link3: "Spouse visa",
      service__link4: "Visitor visa",
      service__link5: "Short term visa",
      contacts_desc: "Contacts",
      doors:"Doors",
      woods:"Woods",
      tools:"Tools",
      paper:"Wallpapers",
      pipe:"Pipes",
      build:"Building Materials",
      clickSuccess:"Buy now",
    },
    russian: {
      lang1: "АНГ",
      lang2: "РУС",
      lang3: "УЗБ",
      link1: "Главная",
      link2: "О компании",
      link3: "Продукты",
      link4: "Услуги",
      link5: "Новости",
      pages__desc: "Страницы",
      pages__link1: "Главная",
      pages__link2: "О компании",
      pages__link3: "Продукты",
      pages__link4: "Услуги",
      pages__link5: "Новости",
      service__desc: "Услуги",
      service__link1: "Студенческая виза",
      service__link2: "Иммиграция",
      service__link3: "Супружеская виза",
      service__link4: "Гостевая виза",
      service__link5: "Kpaткocpoчнaя виза",
      contacts_desc: "Контакты",
      doors:"Двери",
      woods:"Дрова",
      tools:"Инструменты",
      paper:"Обои",
      pipe:"Трубы",
      build:"Строительные материалы",
      clickSuccess:"Купить сейчас",
    },
  };





