// // backTop
// const toTop = document.querySelector(".toTop");
// const elIcons =document.querySelector(".media-icons")
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 300) {
//     toTop.classList.add("backactive");
//   }else if(window.pageYOffset > 300){
// elIcons.style.top ="0"
//   } else {
//     toTop.classList.remove("backactive");
//   }
// });
// // admin js

// const elOverlay = document.querySelectorAll(".overlay");
// const elClose = document.querySelectorAll(".js_close");
// const elAdmin = document.querySelectorAll(".js_admin");

// elAdmin.forEach((element) => {
// let token = localStorage.getItem("token");
//   element.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     if (!token) {
//       elOverlay.forEach((el) => {
//         el.style.display = "flex";
//       });
//     } else {
//       location.replace("admin.html");
//     }
//   });
// });

// elClose.forEach((element) => {
//   element.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     elOverlay.forEach((el) => {
//       el.style.display = "none";
//     });
//   });
// });

// // Login

// const elAdminLogin = document.querySelector(".modal_admin");
// const adminName = document.querySelector(".admin_name");
// const adminParol = document.querySelector(".admin_parol");

// elAdminLogin.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   let admin = {
//     email: adminName.value,
//     password: adminParol.value,
//   };

//   fetch(
//     `http://3.123.23.189:8080/v1/login/${adminName.value}/${adminParol.value}`,
//     {
//       method: "GET",
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         location.replace("admin.html");
//       }
//     })
//     .catch((err) => console.log(err));
// });

// backTop
const toTop = document.querySelector('.toTop');
const elIcons = document.querySelector('.media-icons');
const elllogo = document.querySelectorAll('.fab');
console.log(elllogo);
console.log(elIcons);
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 600) {
		toTop.classList.add('backactive');
		// elllogo[0].style.color ="white"
		elIcons.style.top = '20%';
	} else {
		toTop.classList.remove('backactive');
		elIcons.style.top = '45%';
	}
});
// admin js

const elOverlay = document.querySelectorAll('.overlay');
const elClose = document.querySelectorAll('.js_close');
const elAdmin = document.querySelectorAll('.js_admin');

elAdmin.forEach((element) => {
	let token = localStorage.getItem('token');
	element.addEventListener('click', (evt) => {
		evt.preventDefault();
		if (!token) {
			elOverlay.forEach((el) => {
				el.style.display = 'flex';
			});
		} else {
			location.replace('admin.html');
		}
	});
});

elClose.forEach((element) => {
	element.addEventListener('click', (evt) => {
		evt.preventDefault();
		elOverlay.forEach((el) => {
			el.style.display = 'none';
		});
	});
});

// Login

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
		`http://3.123.23.189:8080/v1/login/${adminName.value}/${adminParol.value}`,
		{
			method: 'GET',
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
