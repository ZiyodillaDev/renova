let elForm = document.querySelector(".add_productForm");
let elNameInput = document.querySelector(".js-namepr");
let elDescInput = document.querySelector(".js-descpr");
let elMark = document.querySelector(".js-markpr");
let elFileInput = document.querySelector(".js-filepr");
let elPriceInput = document.querySelector(".js-pricepr");

let elBtnNew = document.querySelector(".js-newsBtn");
let elProductNew = document.querySelector(".js-productsBtn");
let elBtnAll = document.querySelector(".allBtn");
let elList = document.querySelector(".js-list");
let elListNews = document.querySelector(".js-listNews");
const localData = localStorage.getItem("token");
if (!localData) {
  location.replace("index.html");
}

const renderProduct = (array, node) => {
  node.innerHTML = "";
  array.forEach((product) => {
    console.log(product);
    node.innerHTML += `
    <div class="card mt-5 shadow" style="width: 18rem; height:370px;">

    <div class="card-content">
        <img src="https://${product.image_url}" alt="" class="card-img w-50">
        <h1 class="card-title ">${product.name}</h1>
        <h5 class="card-title ">${product.title}</h5>
        <div class="card-body">
            <div class="card-star">
                <span class="rating-value ">${product.mark}</span>
                <span class="star">&#9733;</span>
            </div>
            <p class="card-price ">${product.price}$</p>
        </div>
        <div class="card-footer d-flex gap-3">
        <a data-todo-id=${product.id} class="product-edit button touch edit"></a>
        <a data-todo-id=${product.id} class="product-delete button touch delete">
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
    <div class="wrapper mt-5 adminCard">
    <div class="carousel_top_img news_bg4">
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
     <div class="mt-3 d-flex gap-3 justify-content-center">
	 
     <button data-todo-id=${
       news.id
     } class="btn d-flex align-items-center news-edit text-white btn-warning"> <img data-todo-id=${
      news.id
    }  class="news-edit " src="./images/edit.png" alt="edit"></a>

     <button data-todo-id=${
       news.id
     } class="btn btn-danger news_delete"> <img data-todo-id=${
      news.id
    } class="news_delete" src="./images/delete.png" alt="delete"></button>
     </div>
    </div>
</div>
          `;
  });
};

async function getProducts() {
  const res = await fetch(
    "https://renova.jprq.live/v1/product?limit=10&page=1",
    {
      headers: {
        Authorization: localData,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  renderProduct(data, elList);
}

getProducts();
// get news
async function getNews() {
  const res = await fetch("https://renova.jprq.live/v1/news?limit=10&page=1", {
    headers: {
      Authorization: localData,
    },
  });
  const data = await res.json();
  renderNews(data, elListNews);
}
getNews();

const elPostForm = document.querySelector(".admin_newsForm");
const postTitle = document.querySelector(".post_title");
const postDesc = document.querySelector(".post_desc");
const postFile = document.querySelector(".post_img");
let url = "";
const upload = () => {
  const data = new FormData();

  data.append("file", postFile.files[0]);
  fetch("https://renova.jprq.live/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.filename) {
        // console.log(data.filename);
        url = data.filename;
        return url;
      }
    });
  return url;
};

let urlpr = "";
const uploadpr = () => {
  const data = new FormData();
  data.append("file", elFileInput.files[0]);
  fetch("https://renova.jprq.live/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.filename) {
        // console.log(data.filename);
        urlpr = data.filename;
        console.log("ichki", urlpr);
        return urlpr;
      }
    });
  return urlpr;
};

elPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  // https://renova.jprq.live/v1/file-upload

  fetch("https://renova.jprq.live/v1/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
    body: JSON.stringify({
      title: postTitle.value,
      description: postDesc.value,
      image_url: upload(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) {
        getNews();
        console.log(data);
        document.querySelector(".newsModal").style.display = "none";
      }
    })
    .catch((err) => console.log(err));
  postTitle.value = "";
  postDesc.value = "";
});

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log({
    name: elNameInput.value,
    title: elDescInput.value,
    price: +elPriceInput.value,
    image_url: uploadpr(),
    mark: elMark.value,
  });

  fetch("https://renova.jprq.live/v1/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
    body: JSON.stringify({
      name: elNameInput.value,
      title: elDescInput.value,
      price: +elPriceInput.value,
      image_url: uploadpr(),
      mark: elMark.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) {
        getProducts();
      }
    })
    .catch((err) => console.log(err));
  elNameInput.value = "";
  elDescInput.value = "";
  elPriceInput.value = "";
  elMark.value = "";
});

const deleteProduct = (product_id) => {
  fetch(`https://renova.jprq.live/v1/product/${product_id}`, {
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
const elAdminLogin = document.querySelector(".modal_admin");

let elNameInputEdit = document.querySelector(".js-name");
let elTitleInputEdit = document.querySelector(".js-title");

let elMarkEdit = document.querySelector(".js-mark");
let elFileInputEdit = document.querySelector(".js-file");
let elPriceInputEdit = document.querySelector(".js-price");

let urleditProduct = "";
const uploadPrEdit = () => {
  const data = new FormData();

  data.append("file", elFileInputEdit.files[0]);
  console.log(data);
  fetch("https://renova.jprq.live/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.filename) {
        urleditProduct = data.filename;
        return urleditProduct;
      }
    });
  return urleditProduct;
};
const editProduct = (product_id) => {
  elAdminLogin.addEventListener("submit", (evt) => {
    evt.preventDefault();

    fetch(`https://renova.jprq.live/v1/product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localData,
      },
      body: JSON.stringify({
        name: elNameInputEdit.value,
        mark: elMarkEdit.value,
        title: elTitleInputEdit.value,
        id: product_id,
        price: +elPriceInputEdit.value,
        image_url: uploadPrEdit(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          elOverlay.style.display = "none";
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  });
};

// delete news
const deleteNews = (product_id) => {
  fetch(`https://renova.jprq.live/v1/news/${product_id}`, {
    method: "DELETE",
    headers: {
      Authorization: localData,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getNews();
      if (data) {
        getNews();
      }
    })
    .catch((err) => console.log(err));
};

const editPostTitle = document.querySelector(".post_title_edit");
const editPostDesc = document.querySelector(".post_desc_edit");
const editPostFile = document.querySelector(".post_img_edit");

let url2 = "";
const upload2 = () => {
  const data = new FormData();

  data.append("file", editPostFile.files[0]);
  console.log(data);
  fetch("https://renova.jprq.live/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.filename) {
        url2 = data.filename;
        return url2;
      }
    });
  return url2;
};
const editNews = (product_id) => {
  newsFormedit.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log({
      title: editPostTitle.value,
      description: editPostDesc.value,
      id: product_id,
      image_url: upload2(),
    });
    fetch(`https://renova.jprq.live/v1/news`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localData,
      },
      body: JSON.stringify({
        title: editPostTitle.value,
        description: editPostDesc.value,
        id: product_id,
        image_url: upload2(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          elNewsOverlay.style.display = "none";
          getNews();
        }
      })
      .catch((err) => console.log(err));
    (editPostTitle.value = ""), (editPostDesc.value = "");
  });
};

// edite news

let elBody = document.querySelector("body");

const elAdmin = document.querySelector(".product-edit");
const elOverlay = document.querySelector(".overlay");

const elNewsOverlay = document.querySelector(".news_overlay");
const elClose = document.getElementById("product_edit");
const elNewsClose = document.getElementById("news_edit");
const newsFormedit = document.querySelector(".newsForm_edit");

elList.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.matches(".product-delete")) {
    const productId = evt.target.dataset.todoId;
    deleteProduct(productId);
  }

  if (evt.target.matches(".product-edit")) {
    elBody.classList.add("modalbtn");
    const productId = evt.target.dataset.todoId;
    console.log(productId);
    elOverlay.style.display = "flex";
    editProduct(productId);
  }
  console.log(evt.target);
});

elListNews.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.matches(".news_delete")) {
    const productId = evt.target.dataset.todoId;
    deleteNews(productId);
  }

  if (evt.target.matches(".news-edit")) {
    const productId = evt.target.dataset.todoId;
    console.log("productId", productId);
    elNewsOverlay.style.display = "flex";
    editNews(productId);
  } else {
    elNewsOverlay.style.display = "none";
  }
});

elClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  elOverlay.style.display = "none";
  elNewsOverlay.style.display = "none";
});

elNewsClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("asdfgnm");
  elNewsOverlay.style.display = "none";
});
// elListNews
