
var show1 = 0;
var show2 = 0;
var show3 = 0;

function show_1() {
	var x = document.getElementById('show_1_h2');
	var y = document.getElementById('block-img-info-1');
	var z = document.getElementById('p1');
	var a = document.getElementsByClassName('content-info-1-1')[0];
	if(show1 == 0) {
		x.style.color = '#262626';
		x.classList.remove('color-focus');
		y.style.background = 'url(img/plus.png) no-repeat';
		z.style.display = 'none';
		a.classList.remove('color-focus');
		show1 = 1;
	}
	else {
		x.style.color = '';
		x.classList.add('color-focus');
		y.style.background = '';
		z.style.display = '';
		a.classList.add('color-focus');
		show1 = 0;
	}
}

function show_2() {
	var x = document.getElementById('show_2_h2');
	var y = document.getElementById('block-img-info-2');
	var z = document.getElementById('p2');
	var a = document.getElementsByClassName('content-info-1-1')[1];
	if(show2 == 0) {
		x.style.color = '#ff0036';
		x.classList.add('color-focus');
		y.style.background = 'url(img/minus.png) no-repeat';
		z.style.display = 'block';
		a.classList.add('color-focus');
		show2 = 1;
	}
	else {
		x.style.color = '';
		x.classList.remove('color-focus');
		y.style.background = '';
		z.style.display = '';
		a.classList.remove('color-focus');
		show2 = 0;
	}
}

function show_3() {
	var x = document.getElementById('show_3_h2');
	var y = document.getElementById('block-img-info-3');
	var z = document.getElementById('p3');
	var a = document.getElementsByClassName('content-info-1-1')[2];
	if(show3 == 0) {
		x.style.color = '#ff0036';
		x.classList.add('color-focus');
		y.style.background = 'url(img/minus.png) no-repeat';
		z.style.display = 'block';
		a.classList.add('color-focus');
		show3 = 1;
	}
	else {
		x.style.color = '';
		x.classList.remove('color-focus');
		y.style.background = '';
		z.style.display = '';
		a.classList.remove('color-focus');
		show3 = 0;
	}
}

/*====================================================================================*/

function slider_1() {
	document.getElementById('slider_1_item').classList.add('con-4-box-menu-button-hover');
	document.getElementById('slider_2_item').classList.remove('con-4-box-menu-button-hover');
	document.getElementById('slider_3_item').classList.remove('con-4-box-menu-button-hover');
}

function slider_2() {
	document.getElementById('slider_1_item').classList.remove('con-4-box-menu-button-hover');
	document.getElementById('slider_2_item').classList.add('con-4-box-menu-button-hover');
	document.getElementById('slider_3_item').classList.remove('con-4-box-menu-button-hover');
}

function slider_3() {
	document.getElementById('slider_1_item').classList.remove('con-4-box-menu-button-hover');
	document.getElementById('slider_2_item').classList.remove('con-4-box-menu-button-hover');
	document.getElementById('slider_3_item').classList.add('con-4-box-menu-button-hover');
}

/*====================================================================================*/

var menun = 0;

function menu() {

	var x = document.getElementsByClassName('menu')[0];
	var y = document.getElementsByClassName('burger')[0];

	if(menun == 0) {
		x.classList.add('begin-menu');
		y.classList.add('begin-burger');
		for (var i = 0; i < 9; i++) {
			document.getElementsByTagName('a')[i].classList.add('begin-a');
		}
		menun = 1;
	}

	else {
		x.classList.remove('begin-menu');
		y.classList.remove('begin-burger');
		for (var i = 0; i < 9; i++) {
			document.getElementsByTagName('a')[i].classList.remove('begin-a');
		}
		menun = 0;
	}

}

/*====================================================================================*/