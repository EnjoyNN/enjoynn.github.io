//эффект появления фиксированного меню сверху
$(document).scroll(function () {
	addFixedHeader();
});
$(document).ready(function () {
	addFixedHeader();
})

function addFixedHeader() {
	var windowWidth = window.innerWidth;
	if (windowWidth > 767) {

		var windowTop = $(window).scrollTop() + 1;
		const cloneHeader = $('.header__body').clone();
		cloneHeader.addClass('fixed-menu');
		cloneHeader.addClass('fromTop');

		if (windowTop > 180) {
			if ($('.fixed-menu').length <= 0) {
				cloneHeader.insertBefore('.header__body');
			}
		}
		else {
			if ($('.fixed-menu').length > 0) {
				$('.fixed-menu').remove();
			}
		}
	}
}

//эффекты анимации элементов при прокрутке до них
var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'style',
	offset: 0,
	mobile: true,
	live: true
})
wow.init();

//поблочный скролл
var topOffsetScrollIt = -90;
$(document).ready(function () {
	if (window.innerWidth >= 767) {
		topOffsetScrollIt = -90;
	}
	else {
		topOffsetScrollIt = 0;
	}
})

$(function () {
	$.scrollIt({
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTIme: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset: topOffsetScrollIt,
	});
});

//swiper slider
const mockupSlider = new Swiper('.slider-mockup', {
	direction: 'horizontal',

	pagination: {
		el: '.slider-mockup__pagination',
		clickable: true,
		//dynamicBullets: true,
	},
	simulateTouch: true,
	//touchRatio: 1,
	//touchAngle: 45,
	grabCursor: true,

	slidesPerView: 3,
	centeredSlides: true,

	speed: 200,
	autoplay: {
		delay: 3000
	},
	spaceBetween: 0,
	//slidesPerGroup: 1,
	//slideToClickedSlide: true,

	loop: true,
	effect: 'coverflow',

	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 200,
		modifier: 2,
		slideShadows: false
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			//effect: 'slide',
			spaceBetween: 15,
		},
		580: {
			slidesPerView: 2,
			//spaceBetween: 15,
			/*coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: false
			},*/
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 200,
				modifier: 2,
				slideShadows: false
			},
		},
		767: {
			slidesPerView: 2,
			//spaceBetween: 15,
			/*coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: false
			},*/
			coverflowEffect: {
				rotate: 0,
				stretch: 25,
				depth: 200,
				modifier: 2,
				slideShadows: false
			},
		},
		992: {
			slidesPerView: 3,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 200,
				modifier: 2,
				slideShadows: false
			},
		}
	}
});

//анимация на первом экране
function createParticles() {
	var particles = particlesJS('particles-js',
		{
			"particles": {
				"number": {
					"value": 80,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 5,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "repulse"
					},
					"onclick": {
						"enable": false,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true,
			"config_demo": {
				"hide_card": false,
				"background_color": "#b61924",
				"background_image": "",
				"background_position": "50% 50%",
				"background_repeat": "no-repeat",
				"background_size": "cover"
			}
		}
	);
}

$(document).ready(function () {
	//ibg надо вызывать где-то в таких методах, так как она меняет высоту элемента
	/*testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});*/

	if (testWebP()) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}

	ibg();

	if (window.innerWidth >= 550) {
		let heightFirstScreen = $('.home').height();
		let heightHeader = $('.header').height();
		/*console.log(heightHeader);
		console.log(heightFirstScreen);
		console.log($('.home'));*/
		$('#particles-js').css('height', heightFirstScreen + heightHeader);

		createParticles();
	}
});


//отправка формы и небольшая совсем ее проверка
$('#form').on('submit', function (event) {
	if (validator.getErrors().length == 0) {
		event.preventDefault();
		submitForm();
	}
});

function submitForm() {
	const name = $('#input-name').val();
	const email = $('#input-email').val();
	const message = $('#message').val();

	$.ajax({
		type: 'POST',
		url: 'phpmail.php',
		data: 'name=' + name + "&email=" + email + '&message=' + message,
		success: function (text) {
			if (text == 'success') {
				formSuccess();
			} else {
				formError();
				submitMsg(false, text);
			}
		}
	});
}

function formSuccess() {
	$('#form')[0].reset();
	submitMsg(true, "Сообщение отправлено!");
}

function formError() {
	submitMsg(false, 'Произошла ошибка');
}

function submitMsg(valid, msg) {

	if (valid) {
		var msgClasses = "success-message";
	}
	else {
		var msgClasses = "error-message";
	}
	$('#msgSubmit').removeClass().addClass(msgClasses).text(msg);
}

//изображения на фоне. добавление/убирание класса webp 
/*function testWebP(callback) {
	var webP = new Image();

	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}*/
function testWebP() {
	var elem = document.createElement('canvas');

	if (!!(elem.getContext && elem.getContext('2d'))) {
		// was able or not to get WebP representation
		return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	}
	else {
		// very old browser like IE 8, canvas not supported
		return false;
	}
}


function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('picture').length > 0) {
			if ($('body').hasClass('webp')) {
				//ВНИМАНИЕ - Если source будет не один в picture, то надо менять
				$(this).css('background-image', 'url("' + $(this).find('source').attr('srcset') + '")');
			}
			else {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		}
		else if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}


//валидация из бутстрапа
Validator.plugin('numberonly', {
	install() {
		console.log('plugin installed');
	},
	validate(el, attribute) {
		return /^\d+$/.test(el.value)
	}
});

var validator = new Validator(document.querySelector('#form'), {
	//autoScroll: true,
	showValid: true
});

//перевод на русский валидационных сообщений
$('.invalid-feedback').on('DOMSubtreeModified', function () {
	if ($(this).text() == "Please fill out this field.") {
		$(this).text("Это поле необходимо для заполнения");
	}
	else if ($(this).text() == "Email is incorrect") {
		$(this).text("Неверный формат Email");
	}
	else if ($(this).text().includes("Please include an ") &&
		$(this).text().includes(" in the email address. ") &&
		$(this).text().includes(" is missing an ")) {
		let info = $(this).text();
		info = info.replace("Please include an ", "Включите символ ").replace(" in the email address. ", " в Email адрес. ").replace(" is missing an ", " не содержит ");
		$(this).text(info);
	}
	else if ($(this).text().includes("Please enter a part following ") &&
		$(this).text().includes(" is incomplete.")) {
		let info = $(this).text();
		info = info.replace("Please enter a part following ", "Введите часть после ").replace(" is incomplete.", " является неполным Email адресом");
		$(this).text(info);
	}
	else if ($(this).text().includes("A part following ") &&
		$(this).text().includes(" should not contain the symbol ")) {
		let info = $(this).text();
		info = info.replace("A part following ", "Часть Email после ").replace(" should not contain the symbol ", " не должна содержать ");
		$(this).text(info);
	}
	else if ($(this).text().includes("Please enter a part followed by ") &&
		$(this).text().includes(" is incomplete.")) {
		let info = $(this).text();
		info = info.replace("Please enter a part followed by ", "Введите часть перед ").replace(" is incomplete.", " является неполным Email адресом");
		$(this).text(info);
	}
})

//меню бургер
const burger = document.querySelector('.header__burger');
const burgerXMark = document.querySelector('.menu__xmark');
const menuBody = document.querySelector('.header__menu');
if (burger) {
	[burger, burgerXMark].forEach(function (object) {
		object.addEventListener('click', function (e) {
			document.body.classList.toggle('lock');
			menuBody.classList.toggle('active');
		});
	})
}

//lazy loading map
const windowHeight = document.documentElement.clientHeight;
const loadMapBlock = document.querySelector('.load-map');
window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
	if (!loadMapBlock.classList.contains("loaded")) {
		getMap();
	}
}
function getMap() {
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapBlockPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		if (loadMapUrl) {
			//вставляем html внутрь блока
			loadMapBlock.insertAdjacentHTML(
				"beforeend",
				`<iframe src="${loadMapUrl}" class="iframe-map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
				marginwidth="0"></iframe>`
			);
			loadMapBlock.classList.add('loaded');
			delete loadMapBlock.dataset.map;
		}
	}
}

//убираем класс active при адапативе на pricing
$(document).ready(function () {
	if (window.innerWidth < 992) {
		$('.column-pricing.active-column').removeClass('active-column');
	}
});
