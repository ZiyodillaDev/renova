let elForm = document.querySelector('.js-form');
let elNameInput = document.querySelector('.js-name');
let elDescInput = document.querySelector('.js-desc');
let elMark = document.querySelector('.js-mark');
let elFileInput = document.querySelector('.js-file');
let elPriceInput = document.querySelector('.js-price');
let elBtnNew = document.querySelector('.js-newsBtn');
let elProductNew = document.querySelector('.js-productsBtn');
let elBtnAll = document.querySelector('.allBtn');
let elList = document.querySelector('.js-list');
let elListNews = document.querySelector('.js-listNews');
const localData = localStorage.getItem('token');
if (!localData) {
	location.replace('login.html');
}

const renderProduct = (array, node) => {
	node.innerHTML = '';
	array.forEach((product) => {
		node.innerHTML += `
    <div class="card mt-5 shadow" style="width: 18rem; height:370px;">

    <div class="card-content">
        <img src="${product.image_url}" alt="" class="card-img w-50">
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
	node.innerHTML = '';
	array.forEach((news) => {
		node.innerHTML += `
    <div class="wrapper mt-5">
    <div class="carousel_top_img news_bg4">
    <img class="becend_img" src="${news.image_url}" alt="">
    </div>
    <div class="card_carousel_body">

        <h4 class="carousel_card_heading2"> ${news.title}
        </h4>
        <p class="carousel_card_pr ">${news.description}</p>
        <div class="card_bottom">
            <p>#Renovo</p>

            <span> ${
							news.created_at.split('T')[1].slice(0, 5) +
							' ' +
							news.created_at.split('T')[0]
						}</span>

        </div>
     <div class="mt-3 d-flex gap-3 ">
     <button data-todo-id=${
				news.id
			} class="btn d-flex align-items-center news-edit text-white btn-warning"> <img src="./images/edit.png" alt="edit">Edit</a>

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
		'https://ahrorbekolimjonov.jprq.live/v1/product?limit=10&page=1',
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
// news started
async function getNews() {
	const res = await fetch(
		'https://ahrorbekolimjonov.jprq.live/v1/news?limit=10&page=1',
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: localData,
			},
		}
	);
	const data = await res.json();
	renderNews(data, elListNews);
}

getNews();

const elPostForm = document.querySelector('.admin_newsForm');
const postTitle = document.querySelector('.post_title');
const postDesc = document.querySelector('.post_desc');
const postFile = document.querySelector('.post_img');
let url = '';
const upload = () => {
	const data = new FormData();

	data.append('file', postFile.files[0]);
	fetch('https://ahrorbekolimjonov.jprq.live/v1/file-upload', {
		method: 'POST',
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



const date = '2023-05-08T13:56:33.123614Z';
const time = date.split('T')[1].slice(0, 5);
const localdate = date.split('T')[0];
console.log(time);
console.log(localdate);

elPostForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	// https://ahrorbekolimjonov.jprq.live/v1/file-upload


	fetch('https://ahrorbekolimjonov.jprq.live/v1/news', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
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
				getProducts();
			}
			// renderProduct(data, elList);
		})
		.catch((err) => console.log(err));
});

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault(elForm);

	const formData = new FormData();
	formData.append('name', elNameInput.value);
	formData.append('title', elDescInput.value);
	formData.append('image_url', elFileInput.files[0]);
	formData.append('mark', elMark.value);
	formData.append('price', elPriceInput.value);
	console.log(formData);

	fetch('https://ahrorbekolimjonov.jprq.live/v1/product', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
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
		method: 'DELETE',
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
const editProduct = (product_id) => {
	const formData = new FormData();
	formData.append('product_name', elNameInput.value);
	formData.append('product_desc', elDescInput.value);
	formData.append('product_img', elFileInput.files[0]);
	formData.append('product_price', elPriceInput.value);

	fetch(`https://ahrorbekolimjonov.jprq.live/v1/news/${product_id}`, {
		method: 'PUT',
		headers: {
			//   "Content-Type": "application/json",
			Authorization: localData,
		},
		body: formData,
	});
};
// delete news
const deleteNews = (product_id) => {
	fetch(`https://ahrorbekolimjonov.jprq.live/v1/news/${product_id}`, {
		method: 'DELETE',
		headers: {
			Authorization: localData,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				getNews();
			}
		})
		.catch((err) => console.log(err));
};

const editPostTitle = document.querySelector('.post_title_edit');
const editPostDesc = document.querySelector('.post_desc_edit');
const editPostFile = document.querySelector('.post_img_edit');

let url2 = '';
const upload2 = () => {
	const data = new FormData();

	data.append('file', postFile.files[0]);
  console.log(data);
	fetch('https://ahrorbekolimjonov.jprq.live/v1/file-upload', {
		method: 'POST',
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
				url2 = data.filename;
				return url2;
			}
		});
	return url2;
};
const editNews = (product_id) => {

  newsFormedit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log({
      title: editPostTitle.value,
      description: editPostDesc.value,
      id: product_id,
      image_url: upload2(),
    });
    fetch(`https://ahrorbekolimjonov.jprq.live/v1/news`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localData,
      },
      body: JSON.stringify({
        title: editPostTitle.value,
        description: editPostDesc.value,
        id: product_id,
        image_url: upload2(),
      }),
    }).then(res=>res.json()).then(data=>console.log(data)).catch(err =>console.log(err));
  });
};

// edite news

let elBody = document.querySelector('body');

const elAdmin = document.querySelector('.product-edit');
const elOverlay = document.querySelector('.overlay');

const elNewsOverlay = document.querySelector('.news_overlay');
const elClose = document.getElementById('product_edit');
const elNewsClose = document.getElementById('news_edit');
const newsFormedit = document.querySelector('.newsForm_edit');


elList.addEventListener('click', (evt) => {
	evt.preventDefault();
	console.log(531531531);
	if (evt.target.matches('.product-delete')) {
		const productId = evt.target.dataset.todoId;
		deleteProduct(productId);
	}

	// if (evt.target.matches(".product-edit")) {
	//   const productId = evt.target.dataset.todoId;
	//   console.log(productId);
	//   elModal.style.display="flex"
	//   edit(productId);
	// }

	if (evt.target.matches('.product-edit')) {
		elBody.classList.add('modalbtn');
		const productId = evt.target.dataset.todoId;

		elOverlay.style.display = 'flex';

		edit(productId);
	}
	console.log(evt.target);
});
elListNews.addEventListener('click', (evt) => {
	evt.preventDefault();
	if (evt.target.matches('.news_delete')) {
		console.dir(evt.target);
		console.log(evt.target);
		const productId = evt.target.dataset.todoId;
		deleteNews(productId);
	}
	// if (evt.target.matches(".product-edit")) {
	//   const productId = evt.target.dataset.todoId;
	//   console.log(productId);
	//   elModal.style.display="flex"
	//   edit(productId);
	// }

	if (evt.target.matches('.news-edit')) {
		const productId = evt.target.dataset.todoId;
		console.log('productId', productId);
		elNewsOverlay.style.display = 'flex';
		editNews(productId);
	} else {
		elNewsOverlay.style.display = 'none';
	}
});

// admin \\
// modal

const elAdminLogin = document.querySelector('.modal_admin');

elAdminLogin.addEventListener('submit', (evt) => {
	evt.preventDefault();
	console.log({
		name: elNameInput.value,
		text: elDescInput.value,
		file: elFileInput.value,
		price: elPriceInput.value,
	});

	fetch('http://95.130.227.84:8075/api/v1/auth/sign-in', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(adminObj),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log('data', data);
		})
		.catch((err) => console.log(err));
});

elClose.addEventListener('click', (evt) => {
	evt.preventDefault();
	elOverlay.style.display = 'none';
	elNewsOverlay.style.display = 'none';
});

elNewsClose.addEventListener('click', (evt) => {
	evt.preventDefault();
	console.log('asdfgnm');
	elNewsOverlay.style.display = 'none';
});
// elListNews
