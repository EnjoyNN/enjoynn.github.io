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


$(document).ready(function () {
	if (testWebP()) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
	ibg();


});



function submitForm() {
	const name = $('#name').val();
	const phone = $('#phone').val();
	const message = $('#message').val();

	$.ajax({
		type: 'POST',
		url: 'phpmail.php',
		data: 'name=' + name + "&phone=" + phone + '&message=' + message,
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


document.addEventListener("DOMContentLoaded", function () {
	var elements = document.getElementsByTagName("INPUT");
	elements += document.getElementsByTagName("TEXTAREA");
	for (var i = 0; i < elements.length; i++) {
		elements[i].oninvalid = function (e) {
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				e.target.setCustomValidity("Это поле обязательно для заполнения");
			}
		};
		elements[i].oninput = function (e) {
			e.target.setCustomValidity("");
		};
	}
})


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


$('#form').on('submit', function (event) {
	$('#msgSubmit').text("");
	if ($(this)[0].checkValidity() == true) {
		event.preventDefault();
		submitForm();
	}
	else {
		event.preventDefault();
		event.stopPropagation();
	}
});
/*

(function () {
	'use strict'
	window.addEventListener('load', function () {
		var form = document.getElementById('form');
		Array.prototype.slice.call(form)
			.forEach(function (form) {

				form.addEventListener('submit', function (event) {
					if (form.checkValidity() == false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false)
			})
	})
})();

*/

