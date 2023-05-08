let elForm = document.querySelector(".js-form");
let elNameInput = document.querySelector(".js-name");
let elDescInput = document.querySelector(".js-desc");
let elMark = document.querySelector(".js-mark");
let elFileInput = document.querySelector(".js-file");
let elPriceInput = document.querySelector(".js-price");
let elBtnNew = document.querySelector(".js-newsBtn");
let elProductNew = document.querySelector(".js-productsBtn");
let elBtnAll = document.querySelector(".allBtn");
let elList = document.querySelector(".js-list");
let elListNews = document.querySelector(".js-listNews");
const localData = localStorage.getItem("token");
if (!localData) {
  location.replace("login.html");
}

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
        <button data-todo-id=${product.id} class="btn d-flex align-items-center product-edit text-white btn-warning"> <img src="./images/edit.png" alt="edit">Edit</a>
        <button data-todo-id=${product.id} class="btn product-delete d-flex align-items-center btn-danger">
        <img src="./images/delete.png" alt="delete">
        Delete
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
    <img src="${news.image_url}" alt="">
    </div>
    <div class="card_carousel_body">

        <h4 class="carousel_card_heading2"> ${news.title}
        </h4>
        <p class="carousel_card_pr ">${news.description }</p>
        <div class="card_bottom">
            <p>#Renovo</p>

            <span> 14:45
                22/02/23</span>

        </div>
     <div class="mt-3">
     <button class="btn btn-warning product-edit"><img src="./images/edit.png" alt="edit">
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
// news started
async function  getNews() {
  const res = await fetch("https://burxondv.jprq.live/v1/news?limit=10&page=2", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
  });
  const data = await res.json();
  console.log(data);
  renderNews(data, elListNews);
}

getNews();


const elPostForm =document.querySelector(".admin_newsForm")
const postTitle =document.querySelector(".post_title")
const postDesc =document.querySelector(".post_desc")
const postFile =document.querySelector(".post_img")
let url = "";
const uoload = () =>{
const data = new FormData()

data.append("file", postFile.files[0])
  fetch("https://burxondv.jprq.live/v1/file-upload", {
  method: "POST",
  headers: {
    Authorization: localData, 
  },
  body: data
})
  .then((res) => res.json())
  .then((data) => {
   if(data.filename){
    // console.log(data.filename);
    url = data.filename
    return url
   }
  })
  return url
}


elPostForm.addEventListener("submit" , function (evt) {
  evt.preventDefault()
  // https://burxondv.jprq.live/v1/file-upload

  console.log({
    title:postTitle.value,
    description:postDesc.value,
    image_url:uoload(),
  });
 
console.log('uoload' ,uoload());
fetch("https://burxondv.jprq.live/v1/news", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: localData,
  },
  body: JSON.stringify({
    title:postTitle.value,
    description:postDesc.value,
    image_url:uoload(),
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data) {
      getProducts();
    }
    // renderProduct(data, elList);
  })
  .catch((err) => console.log(err));
})

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault(elForm);

  const formData = new FormData();
  formData.append("name", elNameInput.value);
  formData.append("title", elDescInput.value);
  formData.append("image_url", elFileInput.files[0]);
  formData.append("mark", elMark.value);
  formData.append("price", elPriceInput.value);
  console.log(formData);

  fetch("https://burxondv.jprq.live/v1/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderProduct(data, elList);
    })
    .catch((err) => console.log(err));
  console.log({
    name: elNameInput.value,
    title: elDescInput.value,
    image_url: elFileInput.files[0],
    mark: elMark.value,
    price: elPriceInput.value,
  });
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

  // fetch(`http://10.10.0.224:5000/product/${product_id}`, {
  //   method: "PUT",
  //   headers: {
  //     //   "Content-Type": "application/json",
  //     Authorization: localData,
  //   },
  //   body: formData,
  // });
};

let elBody = document.querySelector("body");

const elAdmin = document.querySelector(".product-edit");
const elOverlay = document.querySelector(".overlay");
const elClose = document.querySelector(".js_close");

elList.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log(531531531);
  if (evt.target.matches(".product-delete")) {
    const productId = evt.target.dataset.todoId;
    deleteProduct(productId);
  }
  // if (evt.target.matches(".product-edit")) {
  //   const productId = evt.target.dataset.todoId;
  //   console.log(productId);
  //   elModal.style.display="flex"
  //   edit(productId);
  // }

  if (evt.target.matches(".product-edit")) {
    elBody.classList.add("modalbtn");
    const productId = evt.target.dataset.todoId;

    elOverlay.style.display = "flex";

    edit(productId);
  }
});
// elListNews.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   console.log(531531531);
//   if (evt.target.matches(".product-delete")) {
//     const productId = evt.target.dataset.todoId;
//     deleteProduct(productId);
//   }
//   // if (evt.target.matches(".product-edit")) {
//   //   const productId = evt.target.dataset.todoId;
//   //   console.log(productId);
//   //   elModal.style.display="flex"
//   //   edit(productId);
//   // }

//   if (evt.target.matches(".product-edit")) {
//     elBody.classList.add("modalbtn");
//     const productId = evt.target.dataset.todoId;

//     elOverlay.style.display = "flex";

//     edit(productId);
//   }
// });

// admin \\
// modal

elClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  elOverlay.style.display = "none";
});

const elAdminLogin = document.querySelector(".modal_admin");

elAdminLogin.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log({
    name: elNameInput.value,
    text: elDescInput.value,
    file: elFileInput.value,
    price: elPriceInput.value,
  });

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
    })
    .catch((err) => console.log(err));
});
