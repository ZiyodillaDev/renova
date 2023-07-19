let langs = document.querySelector(".langs");
let dropbtn = document.querySelectorAll(".dropbtn");
let link = document.querySelectorAll(".lang");
let lang1 = document.querySelector(".lang1");
let lang2 = document.querySelector(".lang2");
let lang3 = document.querySelector(".lang3");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");
let contentDesc1 = document.querySelector(".content__desc1");
let contentText1 = document.querySelector(".content__text1");
let contentDesc2 = document.querySelector(".content__desc2");
let contentText2 = document.querySelector(".content__text2");
let contentDesc3 = document.querySelector(".content__desc3");
let contentText3 = document.querySelector(".content__text3");
let infoBtn = document.querySelectorAll(".infoBtn");
let productBtn = document.querySelectorAll(".productBtn");
let AboutTitle = document.querySelector(".about_title");
let AboutText = document.querySelector(".about_box-pr");
let AboutHeading1 = document.querySelector(".heading1");
let AboutHeading2 = document.querySelector(".heading2");
let AboutHeading3 = document.querySelector(".heading3");
let AboutHeading4 = document.querySelector(".heading4");
let ProductTitle = document.querySelector(".product_title");
let ProductText1 = document.querySelector(".text1");
let ProductText2 = document.querySelector(".text2");
let ProductText3 = document.querySelector(".text3");
let ProductText4 = document.querySelector(".text4");
let ProductText5 = document.querySelector(".text5");
let ProductText6 = document.querySelector(".text6");
let ProductView = document.querySelectorAll(".link_portfolio");
let ServiceTitle = document.querySelector(".service_title");
let ServiceDesc = document.querySelector(".servive_dec");
let ServiceBoxDesc1 = document.querySelector(".service_box_Desc1");
let ServiceBoxText1 = document.querySelector(".service_box_Text1");
let ServiceBoxDesc2 = document.querySelector(".service_box_Desc2");
let ServiceBoxText2 = document.querySelector(".service_box_Text2");
let ServiceBoxDesc3 = document.querySelector(".service_box_Desc3");
let ServiceBoxText3 = document.querySelector(".service_box_Text3");
let ServiceBoxDesc4 = document.querySelector(".service_box_Desc4");
let ServiceBoxText4 = document.querySelector(".service_box_Text4");
let NewsTittle = document.querySelector(".news_section_title");
let CarouselDesc = document.querySelectorAll(".carousel_card_heading2");
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

// lang

const toggleToolbar = document.querySelectorAll(".toggle-toolbar");
const stickyToolbarContainer = document.querySelector(
  ".sticky-toolbar-container"
);

toggleToolbar.forEach(function (element) {
  element.addEventListener("click", function () {
    stickyToolbarContainer.classList.toggle("show-toolbar");
  });
});

const LangBtns = document.querySelectorAll(".langBtn");

LangBtns.forEach((element) => {
  element.addEventListener("click", function () {
    stickyToolbarContainer.classList.remove("show-toolbar");
  });
});


link.forEach((el) => {
  el.addEventListener("click", () => {

    let attr = el.getAttribute("language"); 
    lang1.textContent = data[attr].lang1;
    lang2.textContent = data[attr].lang2;
    lang3.textContent = data[attr].lang3;
    link1.textContent = data[attr].link1;
    link2.textContent = data[attr].link2;
    link3.textContent = data[attr].link3;
    link4.textContent = data[attr].link4;
    link5.textContent = data[attr].link5;
    contentDesc1.textContent = data[attr].contentDesc1;
    contentText1.textContent = data[attr].contentText1;
    contentDesc2.textContent = data[attr].contentDesc2;
    contentText2.textContent = data[attr].contentText2;
    contentDesc3.textContent = data[attr].contentDesc3;
    contentText3.textContent = data[attr].contentText3;
    dropbtn.forEach((element) => {
      element.textContent = data[attr].dropbtn;
    });
    infoBtn.forEach((element) => {
      element.textContent = data[attr].infoBtn;
    });
    productBtn.forEach((element) => {
      element.textContent = data[attr].productBtn;
    });
    AboutTitle.textContent = data[attr].AboutTitle;
    AboutText.textContent = data[attr].AboutText;
    AboutHeading1.textContent = data[attr].AboutHeading1;
    AboutHeading2.textContent = data[attr].AboutHeading2;
    AboutHeading3.textContent = data[attr].AboutHeading3;
    AboutHeading4.textContent = data[attr].AboutHeading4;
    ProductTitle.textContent = data[attr].ProductTitle;
    ProductText1.textContent = data[attr].ProductText1;
    ProductText2.textContent = data[attr].ProductText2;
    ProductText3.textContent = data[attr].ProductText3;
    ProductText4.textContent = data[attr].ProductText4;
    ProductText5.textContent = data[attr].ProductText5;
    ProductText6.textContent = data[attr].ProductText6;
    ProductView.forEach((element) => {
      element.textContent = data[attr].ProductView;
    });
    ServiceTitle.textContent = data[attr].ServiceTitle;
    ServiceDesc.textContent = data[attr].ServiceDesc;
    ServiceBoxDesc1.textContent = data[attr].ServiceBoxDesc1;
    ServiceBoxDesc2.textContent = data[attr].ServiceBoxDesc2;
    ServiceBoxDesc3.textContent = data[attr].ServiceBoxDesc3;
    ServiceBoxDesc4.textContent = data[attr].ServiceBoxDesc4;
    ServiceBoxText1.textContent = data[attr].ServiceBoxText1;
    ServiceBoxText2.textContent = data[attr].ServiceBoxText2;
    ServiceBoxText3.textContent = data[attr].ServiceBoxText3;
    ServiceBoxText4.textContent = data[attr].ServiceBoxText4;
    NewsTittle.textContent = data[attr].NewsTittle;
    CarouselDesc.forEach((element) => {
      element.textContent = data[attr].CarouselDesc;
    });
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
    contacts_desc.textContent = data[attr].contacts_desc;
  });
});


let data = {
  uzbek: {
    dropbtn: "UZB",
    lang1: "ING",
    lang2: "RUS",
    lang3: "O'Z",
    link1: "Asosiy",
    link2: "Haqida",
    link3: "Mahsulotlar",
    link4: "Xizmatlar",
    link5: "Yangiliklar",
    contentDesc1: "MATERIALNI QO'LLASH",
    contentText1:
      "Operatorlarga og'ir yuklarni muammosiz va xavfsiz manevr qilish imkonini beruvchi materiallarni qayta ishlash uskunalari liniyasi",
    contentDesc2: "UZOQ MUDDATLI KAFOLAT",
    contentText2:
      "Agar kafolat muddatidan oldin shikastlangan bo'lsa, yetkazib berish xizmati va bepul ta'mirlash xizmati bilan yuqori sifatli mahsulotlar",
    contentDesc3: "HAMYONBOQ NARXLAR",
    contentText3:
      "Bizdan har hafta foydali mahsulotlarni hamyonbop narxlarda va doimiy sotuvda topishingiz mumkin",
    infoBtn: "Ko'proq O'qish",
    productBtn: "Bizning Mahsulotlar",
    AboutTitle: "Biz Haqimizda",
    AboutText:
      "Biz sizga zavodimizda muhim mahsulot va xavfsizlikka yordam beramiz",
    AboutHeading1: "Renovaning tarixi",
    AboutHeading2: "Renovaning hamkorlari",
    AboutHeading3: "Renovaning sanoati",
    AboutHeading4: "Renovaning yutuqlari",
    ProductTitle: "Bizning Mahsulotlar",
    ProductText1:
      "Siz xohlagan turdagi eshiklar. Bu yerda turli materiallardan yuqori sifatli eshiklarni topishingiz mumkin",
    ProductText2:
      "Siz xohlagan daraxt turi. Bu erda siz turli xil mahsulotlardan tayyorlangan yog'ochlarni topishingiz mumkin",
    ProductText3:
      "Siz xohlagan turdagi vositalar. Bu yerda siz turli xil materiallardan yuqori sifatli asboblarni topishingiz mumkin",
    ProductText4:
      "Siz xohlagan turdagi qog'ozlar. Bu yerda siz turli xil Papers materiallarini yuqori sifatli topishingiz mumkin",
    ProductText5:
      "Siz xohlagan truba turi. Bu erda siz yuqori sifatli materiallarda turli xil trubalarni topishingiz mumkin",
    ProductText6:
      "Siz xohlagan qurilish turi. Bu erda siz yuqori sifatli materiallardan tayyorlangan turli xil qurilishlarni topishingiz mumkin",
    ProductView: "Ko'rish",
    ServiceTitle: "Bizning xizmatlar",
    ServiceDesc:
      "Biz sizga zavodimizda muhim mahsulot va xavfsizlikka yordam beramiz",
    ServiceBoxDesc1: "Xizmat ko'rsatish",
    ServiceBoxText1: "Xizmat ko'rsatish",
    ServiceBoxDesc2: "Logistika",
    ServiceBoxText2: "Logistika",
    ServiceBoxDesc3: "1 Yil Kafolat",
    ServiceBoxText3: "Kafolat",
    ServiceBoxDesc4: "Mahsulot o'rnatish",
    ServiceBoxText4: "O'rnatish",
    NewsTittle: "Yangiliklar va Bloglar",
    CarouselDesc: "Renovosning yangi mahsulotlari haqida nimalarni bilasiz?",
    pages__desc: "Sahifalar",
    pages__link1: "Asosiy",
    pages__link2: "Haqida",
    pages__link3: "Mahsulotlar",
    pages__link4: "Xizmatlar",
    pages__link5: "Yangiliklar",
    service__desc: "Xizmatlar",
    service__link1: "Xizmat ko'rsatish",
    service__link2: "Logistika",
    service__link3: "Kafolat",
    service__link4: "O'rnatish",
    contacts_desc: "Kontaktlar",
    doors: "Eshiklar",
    woods: "Yog'ochlar",
    tools: "Aslaxalar",
    paper: "Gulqog'oz",
    pipe: "Quvurlar",
    build: "Qurilish mahsulotlari",
  },
  english: {
    dropbtn: "ENG",
    lang1: "ENG",
    lang2: "RUS",
    lang3: "UZB",
    link1: "Home",
    link2: "About",
    link3: "Products",
    link4: "Services",
    link5: "News",
    contentDesc1: "MATERIAL HANDLING",
    contentText1:
      "A line of material handling equipment that allow the operators to smoothly and safely maneuver heavy loads",
    contentDesc2: "LONG TERM WARRANTY",
    contentText2:
      "High quality products with delivery service and free repairing service if it is damaged before warranty date",
    contentDesc3: "AFFORDABLE PRICES",
    contentText3:
      "You can find useful products with affordable prices and constant sales every week from us",
    infoBtn: "Read More",
    productBtn: "Our Products",
    AboutTitle: "About Us",
    AboutText: "We help you imporative product and safety in our plant",
    AboutHeading1: "RENOVA'S HISTORY",
    AboutHeading2: "RENOVA'S PARTNERS",
    AboutHeading3: "RENOVA'S INDUSTRY",
    AboutHeading4: "RENOVA'S ACHIEVEMENTS",
    ProductTitle: "OUR PRODUCTS",
    ProductText1:
      "The kind of doors you want. Here you can find doors made of different materials in high quality",
    ProductText2:
      "The kind of woods you want. Here you can find woods which is made of different products",
    ProductText3:
      "The kind of tools you want. Here you can find tools which is made of different materials in a high quality",
    ProductText4:
      "The kind of Papers you want. Here you can find different Papers materials in a high quality",
    ProductText5:
      "The kind of groove you want. Here you can find different groove in a high quality materials",
    ProductText6:
      "The kind of build you want. Here you can find build made of different in a high quality materials",
    ProductView: "View",
    ServiceTitle: "OUR SERVICE",
    ServiceDesc: "We help you imporative product and sefety in our plant",
    ServiceBoxDesc1: "Service Center",
    ServiceBoxText1: "Service Center",
    ServiceBoxDesc2: "Logistic",
    ServiceBoxText2: "Logistic",
    ServiceBoxDesc3: "1 Year Warranty",
    ServiceBoxText3: "Warranty",
    ServiceBoxDesc4: "Installation Products",
    ServiceBoxText4: "Installation",
    NewsTittle: "NEWS & BLOGS",
    CarouselDesc: "What do you know about Renovos new products? ",
    pages__desc: "Pages",
    pages__link1: "Home",
    pages__link2: "About",
    pages__link3: "Products",
    pages__link4: "Services",
    pages__link5: "News",
    service__desc: "Services",
    service__link1: "Service Center",
    service__link2: "Логистика",
    service__link3: "Warranty",
    service__link4: "Installation",
    contacts_desc: "Contacts",
    doors: "Doors",
    woods: "Woods",
    tools: "Tools",
    paper: "Wallpapers",
    pipe: "Pipes",
    build: "Building Materials",
  },
  russian: {
    dropbtn: "РУС",
    lang1: "АНГ",
    lang2: "РУС",
    lang3: "УЗБ",
    link1: "Главная",
    link2: "О компании",
    link3: "Продукты",
    link4: "Услуги",
    link5: "Новости",
    contentDesc1: "ПЕРЕРАБОТКА МАТЕРИАЛОВ",
    contentText1:
      "Линейка погрузочно-разгрузочного оборудования, позволяющая операторам плавно и безопасно перемещать тяжелые грузы.",
    contentDesc2: "ДОЛГОСРОЧНАЯ ГАРАНТИЯ",
    contentText2:
      "Высококачественные продукты с службой доставки и бесплатным ремонтом, если он поврежден до даты гарантии.",
    contentDesc3: "ДОСТУПНЫЕ ЦЕНЫ",
    contentText3:
      "У нас вы можете найти полезные товары с доступными ценами и постоянными распродажами каждую неделю.",
    infoBtn: "Читать больше",
    productBtn: "Наши продукты",
    AboutTitle: "О нас",
    AboutText:
      "Мы помогаем вам с важным продуктом и безопасностью на нашем заводе",
    AboutHeading1: "ИСТОРИЯ РЕНОВЫ",
    AboutHeading2: "ПАРТНЕРЫ РЕНОВЫ",
    AboutHeading3: "ПРОМЫШЛЕННОСТЬ РЕНОВЫ",
    AboutHeading4: "ДОСТИЖЕНИЯ РЕНОВЫ",
    ProductTitle: "НАШИ ПРОДУКТЫ",
    ProductText1:
      "Какие двери вы хотите. У нас вы можете найти двери из разных материалов в хорошем качестве",
    ProductText2:
      "Какой лес вы хотите. Здесь вы можете найти древесину, которая сделана из разных продуктов.",
    ProductText3:
      "Какие инструменты вы хотите. Здесь вы можете найти инструменты, изготовленные из различных материалов высокого качества.",
    ProductText4:
      "Тип документов, которые вы хотите. Здесь вы можете найти различные материалы Papers в высоком качестве.",
    ProductText5:
      "Какой паз вы хотите. Здесь вы можете найти различные канавки из высококачественных материалов.",
    ProductText6:
      "Тип сборки, который вы хотите. Здесь вы можете найти сборки из различных материалов высокого качества.",
    ProductView: "Cмотреть",
    ServiceTitle: "НАШ СЕРВИС",
    ServiceDesc:
      "Мы помогаем вам с важным продуктом и безопасностью на нашем заводе",
    ServiceBoxDesc1: "Сервисный центр",
    ServiceBoxText1: "Сервисный центр",
    ServiceBoxDesc2: "Логистика",
    ServiceBoxText2: "Логистика",
    ServiceBoxDesc3: "1 год гарантии",
    ServiceBoxText3: "ГАРАНТИЯ",
    ServiceBoxDesc4: "Установить продукт",
    ServiceBoxText4: "Установить",
    NewsTittle: "НОВОСТИ И БЛОГИ",
    CarouselDesc: "Что вы знаете о новинках Renovos?",
    pages__desc: "Страницы",
    pages__link1: "Главная",
    pages__link2: "О компании",
    pages__link3: "Продукты",
    pages__link4: "Услуги",
    pages__link5: "Новости",
    service__desc: "Услуги",
    service__link1: "Сервисный центр",
    service__link2: "Логистика",
    service__link3: "Гарантия",
    service__link4: "Установить",
    contacts_desc: "Контакты",
    doors: "Двери",
    woods: "Дрова",
    tools: "Инструменты",
    paper: "Обои",
    pipe: "Трубы",
    build: "Строительные материалы",
  },
};

 