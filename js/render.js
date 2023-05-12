let token = localStorage.getItem("token");

const slicklist =document.querySelector(".slick-list ")
const slicktrack =document.querySelector(".slick-track ")

const flexer = document.querySelector(".flexer");
const ul =document.createElement("ul");
ul.setAttribute("class", "carousel_list")
flexer.appendChild(ul)

const renderNews = (array, node) => {
  // node.innerHTML = "";
  array.forEach((news) => {
    ul.innerHTML += `
    <li class=" last_slick_item">
    <div class="wrapper">
        <div class="carousel_top_img news_bg1">
        <img class="becend_img" src="https://${news.image_url}" alt="">
        </div>
        <div class="card_carousel_body">
        <h4 class="carousel_card_heading2"> ${news.title}
        </h4>
        <p class="carousel_card_pr ">${news.description}</p>
            <div class="card_bottom">
                <p>#Renovo</p> 
                <span> ${
                  news.created_at.split("T")[1].slice(0, 5) +
                  " " +
                  news.created_at.split("T")[0]
                }</span>
            </div>
        </div>
    </div>

</li>
          `;
  });
};
const eltitle =document.querySelector(".myheading")

async function getNews() {
    const res = await fetch("https://renova.jprq.live/v1/news?limit=10&page=1", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    renderNews(data, flexer);
  }
  getNews();

  flexer.children.length > 1 ?  (eltitle.style.display ="none"):eltitle.style.display ="block"
  










  