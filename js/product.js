const elList = document.querySelector('.js-list');
const elInput = document.querySelector('.js-input');
const elBtns = document.querySelector('.js-btns');
const elDoors = document.querySelector('.js-doors');
const elWoods = document.querySelector('.js-woods');
const elTools = document.querySelector('.js-tools');
const elPaper = document.querySelector('.js-paper');
const elPipe = document.querySelector('.js-pipe');
const elBuild = document.querySelector('.js-build');
const elCount = document.querySelector('.js-count');
const elBookmarkList = document.querySelector('.js-bookmarkList');
let bookmarkList = new Set();
let sums = 0;
function fetchData() {
	fetch('http://3.123.23.189:8080/v1/product?limit=10&page=1')
		.then((respon) => respon.json())
		.then((res) => {
			if (res) {
				porducts(res, elList);
				elList.addEventListener('click', (evt) => {
					if (evt.target.matches('.js-bookmark')) {
						const productId = evt.target.dataset.productId;
						const findedProduct = res.find(
							(pokemon) => pokemon.id == productId
						);

						sums += 1;
						bookmarkList.add(findedProduct);
						renderBuyBookmark(bookmarkList, elBookmarkList);
						elCount.innerHTML = sums;
						setInterval(() => {
							if(bookmarkList.size == 0){
								elCount.innerHTML =""
								sums = 0
							}
							
						}, 1000);
					}
				});
				// renderBuyBookmark(res, elBookmarkList);

				elBookmarkList.addEventListener('click', (evt) => {
					if (evt.target.matches('.delete-bookmark')) {
						const productId = evt.target.dataset.productId;
						const findedProduct = res.find(
							(pokemon) => pokemon.id == productId
						);

						bookmarkList.delete(findedProduct);
						renderBuyBookmark(bookmarkList, elBookmarkList);
					}
				});

				elInput.addEventListener('input', (evt) => {
					evt.preventDefault();
					newArr = [];
					inputVal = elInput.value;
					res.forEach((el) => {
						if (
							el.name.toLocaleLowerCase().includes(inputVal) ||
							el.title.toLocaleLowerCase().includes(inputVal)
						) {
							newArr.push(el);
						}
					});
					porducts(newArr, elList);
				});

				elBtns.addEventListener('click', (evt) => {
					evt.preventDefault();

					if (evt.target.matches('.js-doors')) {
						elDoors.classList.add('active1');
						let filteredProduct = res.filter((el) => el.title == 'Двери');
						porducts(filteredProduct, elList);
					} else {
						elDoors.classList.remove('active1');
					}

					if (evt.target.matches('.js-woods')) {
						elWoods.classList.add('active1');
						let filteredProduct = res.filter((el) => el.title == 'Дрова');
						porducts(filteredProduct, elList);
					} else {
						elWoods.classList.remove('active1');
					}
					if (evt.target.matches('.js-tools')) {
						elTools.classList.add('active1');
						let filteredProduct = res.filter((el) => el.title == 'Инструменты');
						porducts(filteredProduct, elList);
					} else {
						elTools.classList.remove('active1');
					}
					if (evt.target.matches('.js-paper')) {
						elPaper.classList.add('active1');
						let filteredProduct = res.filter((el) => el.title == 'Обои');
						porducts(filteredProduct, elList);
					} else {
						elPaper.classList.remove('active1');
					}
					if (evt.target.matches('.js-pipe')) {
						elPipe.classList.add('active1');
						let filteredProduct = res.filter((el) => el.title == 'Трубы');
						porducts(filteredProduct, elList);
					} else {
						elPipe.classList.remove('active1');
					}
					if (evt.target.matches('.js-build')) {
						elBuild.classList.add('active1');
						let filteredProduct = res.filter(
							(el) => el.title == 'Строительные материалы'
						);
						porducts(filteredProduct, elList);
					} else {
						elBuild.classList.remove('active1');
					}
				});
				const renderBuyBookmark = (array, node) => {
					node.innerHTML = '';
					let sum = 0;
					let sumsAll = 1;

					array.forEach((item) => {
						console.log(item);
						sum += +item.price;
						const newItem = document.createElement('li');
						const newImg = document.createElement('img');
						const newText = document.createElement('p');
						const newDeleteButton = document.createElement('button');
						newItem.setAttribute('class', ' align-items-center p-1 d-flex ');
						newText.setAttribute('class', 'm-0 text-black me-3');
						newDeleteButton.setAttribute(
							'class',
							'delete-bookmark btn btn-danger ms-auto'
						);
						newItem.addEventListener('click', (evt) => {
							evt.preventDefault();
							if (evt.target.matches('.plus')) {
								sumsAll += 1;
								console.log(...bookmarkList);
							}
							if (evt.target.matches('.minus')) {
								if (sumsAll > 0) {
									sumsAll -= 1;
								}
							}
						});
						newImg.src = `http://${item.image_url}`;
						newImg.setAttribute('class', 'newIMG');
						newText.textContent = item.name + ' - ' + item.price + '$';
						newDeleteButton.innerHTML = '&times;';
						newDeleteButton.dataset.productId = item.id;
						newItem.appendChild(newImg);
						newItem.appendChild(newText);
						newItem.appendChild(newDeleteButton);
						node.appendChild(newItem);
					});
					newSum = document.createElement('b');
					node.appendChild(newSum);
					newSum.textContent = 'All price = ' + sum + '$';
				};
			}
		});
}
fetchData();
function porducts(arr, node) {
	node.innerHTML = '';
	for (i of arr) {
		const cardBox = document.createElement('div');
		cardBox.setAttribute('class', 'card');
		node.appendChild(cardBox);

		const cardContent = document.createElement('div');
		cardContent.setAttribute('class', 'card-content');
		cardBox.appendChild(cardContent);

		var createImg = document.createElement('img');
		createImg.setAttribute('src', ` http://${i.image_url}`);
		createImg.setAttribute('class', 'card-img');
		createImg.innerHTML = i.image_url;
		cardContent.appendChild(createImg);

		const createH1 = document.createElement('h1');
		createH1.setAttribute('class', 'card-title');
		createH1.innerHTML = i.name;
		cardContent.appendChild(createH1);

		const createH5 = document.createElement('h5');
		createH5.setAttribute('class', 'card-title');
		createH5.innerHTML = i.title;
		cardContent.appendChild(createH5);

		const cardBody = document.createElement('div');
		cardBody.setAttribute('class', 'card-body');
		cardContent.appendChild(cardBody);

		const cardStart = document.createElement('div');
		cardStart.setAttribute('class', 'card-star');
		cardBody.appendChild(cardStart);

		const createSpan = document.createElement('span');
		createSpan.setAttribute('class', 'rating-value');
		createSpan.innerHTML = i.mark;
		cardStart.appendChild(createSpan);

		const createSpan2 = document.createElement('span');
		createSpan2.setAttribute('class', 'star');
		createSpan2.innerHTML = '&#9733;';
		cardStart.appendChild(createSpan2);

		const createPrice = document.createElement('p');
		createPrice.setAttribute('class', 'card-price');
		createPrice.innerHTML = i.price + '$';
		cardBody.appendChild(createPrice);

		const createFooter = document.createElement('div');
		createFooter.setAttribute('class', 'card-footer');
		cardContent.appendChild(createFooter);

		const createBuy = document.createElement('button');
		createBuy.innerHTML = 'Купить сейчас';
		createBuy.dataset.productId = i.id;
		createBuy.setAttribute('class', 'btn js-bookmark click-success');
		createFooter.appendChild(createBuy);
	}
}

const buyBtn = document.querySelector('.buy');
const buy = document.querySelector('.shop');
buy.addEventListener('click', () => {
	data = [...bookmarkList];
	if (!bookmarkList.size) {
		buyBtn.disabled = true;
	} else {
		buyBtn.disabled = false;
	}
	buyBtn.addEventListener('click', () => {
		location.replace('buy.html');
		localStorage.setItem('products', JSON.stringify(data));
		localStorage.setItem('allsum', JSON.stringify(sum));
	});
});



