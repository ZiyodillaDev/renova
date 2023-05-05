let elForm = document.querySelector(".js-form");
let elNameInput = document.querySelector(".js-name");
let elDescInput = document.querySelector(".js-desc");
let elFileInput = document.querySelector(".js-file");
let elPriceInput = document.querySelector(".js-price");
let elBtnNew = document.querySelector(".js-newsBtn");
let elProductNew = document.querySelector(".js-productsBtn");
let elBtnAll = document.querySelector(".allBtn");
let elList = document.querySelector(".js-list");
let elListNews = document.querySelector(".js-listNews");

const localData = localStorage.getItem("token");

// if (!localData) {
//   location.replace("login.html");
// }

const renderProduct = (array, node) => {
  node.innerHTML = "";
  array.forEach((product) => {
    node.innerHTML += `
    <div class="card mt-5 shadow" style="width: 18rem; height:370px;">

    <div class="card-content">
        <img src="${product.img}" alt="" class="card-img w-50">
        <h1 class="card-title ">${product.name}</h1>
        <h5 class="card-title ">${product.title}</h5>
        <div class="card-body">
            <div class="card-star">
                <span class="rating-value ">${product.mark}</span>
                <span class="star">&#9733;</span>
            </div>
            <p class="card-price ">${product.price}</p>
        </div>
        <div class="card-footer">
        <button data-todo-id=${product.id} class="btn product-edit text-white btn-warning"> <img src="./images/edit.png" alt="edit"></a>
        <button data-todo-id=${product.id} class="btn product-delete btn-danger">
        <img src="./images/delete.png" alt="delete">
        </a>
        </div>
</div>
</div>

          `;
  });
};
const renderNews = (array, node) => {
  node.innerHTML = "";
  array.forEach((news) => {
    node.innerHTML += `
    <div class="wrapper mt-5">
    <div class="carousel_top_img news_bg4">

    </div>
    <div class="card_carousel_body">

        <h4 class="carousel_card_heading2">Что вы знаете о новинках Renovos?
        </h4>
        <p class="carousel_card_pr ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus quos corporis aut quia temporibus, amet ab, quisquam dolorum at iusto
            officiis velit voluptatibus eum accusamus aspernatur.</p>
        <div class="card_bottom">
            <p>#Renovo</p>

            <span> 14:45
                22/02/23</span>

        </div>
     <div class="mt-3">
     <button class="btn btn-warning"><img src="./images/edit.png" alt="edit">
     </button>
     <button class="btn btn-danger"> <img src="./images/delete.png" alt="delete"></button>
     </div>
    </div>
</div>
          `;
  });
};

function getProducts() {
  // const res = await fetch("http://10.10.0.224:5000/product", {
  //   headers: {
  //     Authorization: localData,
  //   },
  // });
  // const data = await res.json();
  // console.log(data);
  renderProduct(productWood, elList);
}

getProducts();
function getNews() {
  // const res = await fetch("http://10.10.0.224:5000/product", {
  //   headers: {
  //     Authorization: localData,
  //   },
  // });
  // const data = await res.json();
  // console.log(data);
  renderNews(productWood, elListNews);
}

getNews();

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault(elForm);

  const formData = new FormData();
  formData.append("product_name", elNameInput.value);
  formData.append("product_desc", elDescInput.value);
  formData.append("product_img", elFileInput.files[0]);
  formData.append("product_price", elPriceInput.value);

  fetch("http://10.10.0.224:5000/product", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      Authorization: localData,
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getProducts();
      }
      renderProduct(data, elList);
    })
    .catch((err) => console.log(err));
});

const deleteProduct = (product_id) => {
  fetch(`http://10.10.0.224:5000/product/${product_id}`, {
    method: "DELETE",
    headers: {
      Authorization: localData,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getProducts();
      }
    })
    .catch((err) => console.log(err));
};

const edit = (product_id) => {
  const formData = new FormData();
  formData.append("product_name", elNameInput.value);
  formData.append("product_desc", elDescInput.value);
  formData.append("product_img", elFileInput.files[0]);
  formData.append("product_price", elPriceInput.value);

  fetch(`http://10.10.0.224:5000/product/${product_id}`, {
    method: "PUT",
    headers: {
      //   "Content-Type": "application/json",
      Authorization: localData,
    },
    body: formData,
  });
};

elList.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.matches(".product-delete")) {
    const productId = evt.target.dataset.todoId;
    console.log(productId);
    deleteProduct(productId);
  }
  if (evt.target.matches(".product-edit")) {
    const productId = evt.target.dataset.todoId;
    edit(productId);
  }
});

elBtnAll.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.matches(".js-newsBtn")) {
    elList.classList.add("d-none");
  } else {
    elList.classList.remove("d-none");
  }
  if (evt.target.matches(".js-productsBtn")) {
    elListNews.classList.add("d-none");
  } else {
    elListNews.classList.remove("d-none");
  }
});
