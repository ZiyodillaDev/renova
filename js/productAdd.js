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
// http://3.123.23.189:8080/media/65e3cd20-d1d0-4e96-a663-08c103adb095.jpg
// 3.123.23.189:8080/media/65e3cd20-d1d0-4e96-a663-08c103adb095.jpg
const renderProduct = (array, node) => {
  node.innerHTML = "";
  array.forEach((product) => {
    node.innerHTML += `
    <div class="card mt-5 shadow" style="width: 18rem; height:370px;">

    <div class="card-content">
        <img src="http://${product.image_url}" alt="" class="card-img w-50">
        <h1 class="card-title ">${product.name}</h1>
        <h5 class="card-title ">${product.title}</h5>
        <div class="card-body">
            <div class="card-star">
                <span class="rating-value ">${product.mark}</span>
                <span class="star">&#9733;</span>
            </div>
            <p class="card-price "> ${product.price}$</p>
            
        </div>
        <div class="card-footer d-flex gap-3">
        <button data-todo-id=${product.id} class="product-edit button btn btn-warning touch edit "></button>
        <button data-todo-id=${product.id} class="product-delete button touch btn btn-danger delete">
        </button>
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
    <img class="becend_img" src="http://${news.image_url}" alt="">
    </div>
    <div class="card_carousel_body">

        <h4 class="carousel_card_heading2"> ${news.title}
        </h4>
        <p class="carousel_card_pr ">${news.description}</p>
     <div class="mt-3 d-flex gap-3 justify-content-center news-navigators">
	 
     <button data-todo-id=${
       news.id
     } class="btn d-flex align-items-center justify-content-center news-edit text-white btn-warning"> <img data-todo-id=${
      news.id
    }  class=" " src="./images/edit.png" alt="edit"></button>

     <button data-todo-id=${
       news.id
     } class="btn btn-danger news_delete d-flex align-items-center justify-content-center"> <img data-todo-id=${
      news.id
    } class="" src="./images/delete.png" alt="delete"></button>
     </div>
    </div>
</div>
          `;
  });
};

async function getProducts() {
  const res = await fetch("https://renova.uz/v1/product?limit=10&page=1", {
    headers: {
      Authorization: localData,
    },
  });
  const data = await res.json();
  renderProduct(data, elList);
}

getProducts();
// get news
async function getNews() {
  const res = await fetch("https://renova.uz/v1/news?limit=10&page=1", {
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
  fetch("https://renova.uz/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.filename) {
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
  fetch("https://renova.uz/v1/file-upload", {
    method: "POST",
    headers: {
      Authorization: localData,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.filename) {
        urlpr = data.filename;
        return urlpr;
      }
    });
  return urlpr;
};
// const elm =document.querySelector('.newsModal')
// console.log(elm.classList ,"ts");

elPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  // https://renova.uz/v1/file-upload
  // https://renova.uz/v1/news
  fetch("https://renova.uz/v1/news", {
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
      if (data) {
        getNews();
        location.reload();
        // console.log(elm.classList.remove("show") ,"ichk");

        // elm.style.display = 'none';

      }
    })
    .catch((err) => console.log(err));
  // postTitle.value = '';
  // postDesc.value = '';
  Toastify({
    text: "Muvaffaqqiyatli Qo'shildi",
    duration: 3000,
    newWindow: false,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#4BB543",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  fetch("https://renova.uz/v1/product", {
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
  fetch(`https://renova.uz/v1/product/${product_id}`, {
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
  fetch("https://renova.uz/v1/file-upload", {
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
  let oldurl2;
  fetch(`https://renova.uz/v1/product/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      elNameInputEdit.value = data?.name;
      elMarkEdit.value = data?.mark;
      elTitleInputEdit.value = data?.title;
      elPriceInputEdit.value = data?.price;
      oldurl2 = data?.image_url;
    })
    .catch((err) => {
      console.log(err);
    });

  elAdminLogin.addEventListener("submit", (evt) => {
    evt.preventDefault();
    fetch(`https://renova.uz/v1/product`, {
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
        image_url: uploadPrEdit() || oldurl2,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  });
};

// delete news
const deleteNews = (product_id) => {
  fetch(`https://renova.uz/v1/news/${product_id}`, {
    method: "DELETE",
    headers: {
      Authorization: localData,
    },
  })
    .then((res) => res.json())
    .then((data) => {
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
  fetch("https://renova.uz/v1/file-upload", {
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
const oldurl = (str) => {
  return str;
};
const editNews = (product_id) => {
  let oldUrl = "";

  fetch(`https://renova.uz/v1/news/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      editPostTitle.value = data?.title;
      editPostDesc.value = data?.description;
      oldUrl = data?.image_url;
      // editPostFile.value = data?.image_url
      newsFormedit.addEventListener("submit", (evt) => {
        evt.preventDefault();
        fetch(`https://renova.uz/v1/news`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localData,
          },

          body: JSON.stringify({
            title: editPostTitle.value,
            description: editPostDesc.value,
            id: product_id,
            image_url: upload2() || oldUrl,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              elNewsOverlay.style.display = "none";
              getNews();
              location.reload();
              //   News
            }
          })
          .catch((err) => console.log(err));
        (editPostTitle.value = ""), (editPostDesc.value = "");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// edite news

let elBody = document.querySelector("body");

const elAdminDelete = document.querySelector(".product-delete");
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
    elOverlay.style.display = "flex";
    editProduct(productId);
  }
});

elListNews.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.matches(".news_delete")) {
    const productId = evt.target.dataset.todoId;
    deleteNews(productId);
  }

  if (evt.target.matches(".news-edit")) {
    const productId = evt.target.dataset.todoId;
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
  elNewsOverlay.style.display = "none";
});
// elListNews

const newTabBtn = document.querySelector(".newsTab");
newTabBtn.addEventListener("click", () => {
  location.replace("newsAdd.html");
});
