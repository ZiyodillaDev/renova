// Dropdown

const dropdown = document.querySelector('.selected');
const item = document.querySelector('.dropdown-content2');
dropdown.addEventListener('click', (evt) => {
	if (evt.target === dropdown) {
		console.log(true);
		item.style.display = 'block';
	} else if (item.style.display == 'block') {
		item.style.display = 'none';
		console.log(false);
	}
});

// admin js

const elOverlay = document.querySelector('.overlay');
const elClose = document.querySelector('.js_close');
const elAdmin = document.querySelector('.js_admin');

elAdmin.addEventListener('click', (evt) => {
	evt.preventDefault();
	elOverlay.style.display = 'flex';
});
elClose.addEventListener('click', (evt) => {
	evt.preventDefault();
	elOverlay.style.display = 'none';
});

const elAdminLogin = document.querySelector('.modal_admin');
const adminName = document.querySelector('.admin_name');
const adminParol = document.querySelector('.admin_parol');

elAdminLogin.addEventListener('submit', (evt) => {
	evt.preventDefault();
	let admin = {
		email: adminName.value,
		password: adminParol.value,
	};

	fetch(
		`https://ahrorbekolimjonov.jprq.live/v1/login/${adminName.value}/${adminParol.value}`,
		{
			method: 'GET',
			// Param: JSON.stringify({
			//   email: adminName.value,
			//   password: adminParol.value,
			// }),
		}
	)
		.then((res) => res.json())
		.then((data) => {
			if (data.token) {
				localStorage.setItem('token', data.token);
				location.replace('admin.html');
			}
		})
		.catch((err) => console.log(err));
});
