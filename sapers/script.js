let min = 0;												// Минимальное число клеток
let max = 80;												// Максимальное число клеток
const cout_bombs = 10;										// Кол-во бомб
let bombs = [];												// Массив для бомб
let cube = document.getElementsByClassName("cube");			// Инициализация клетки
let for_cube_number = [];									// Инициализация (1) массива для подсчета поблизости бомб вокруг клетки
for(let i = 0; i < (max + 1); i++) {
	for_cube_number.push(0);								// Заполнение (1) массива нулями
}
let pcm_bombs = 0;											// Количество помеченых бомб
let flag_cube = [];

/*for(let i = 0; i < cout_bombs; i++) {
	cube[bombs[i]].classList.add("cube-bomb");				// Закраска бомб при загрузке
}*/

start();
function start() {

	for(let i = 0; i < cout_bombs; i++) {
		getRandom();
	}

	for(let i = 0; i < max+1; i++) {
		for(let j = 0; j < cout_bombs; j++) {
			if(i == bombs[j]) {
				/*Верхняя клетка*/
				if(bombs[j] > 8) {
					for_cube_number[i-9] += 1;
					cube[i-9].innerHTML = for_cube_number[i-9]; 
				}
				/*Правые клетки*/
				if(bombs[j] != 8 && bombs[j] != 17 && bombs[j] != 26 && bombs[j] != 35 && bombs[j] != 44 && bombs[j] != 53 && bombs[j] != 62 && bombs[j] != 71 && bombs[j] != 80) {
					if(bombs[j] > 8) {
						for_cube_number[i-8] += 1;
						cube[i-8].innerHTML = for_cube_number[i-8]; 
					}
					for_cube_number[i+1] += 1;
					cube[i+1].innerHTML = for_cube_number[i+1]; 
					if(bombs[j] < 72) {
						for_cube_number[i+10] += 1;
						cube[i+10].innerHTML = for_cube_number[i+10]; 
					}
				}
				/*Левые клетки*/
				if(bombs[j] != 0 && bombs[j] != 9 && bombs[j] != 18 && bombs[j] != 27 && bombs[j] != 36 && bombs[j] != 45 && bombs[j] != 54 && bombs[j] != 63 && bombs[j] != 72) {
					if(bombs[j] < 72) {
						for_cube_number[i+8] += 1;
						cube[i+8].innerHTML = for_cube_number[i+8]; 	
					}
					for_cube_number[i-1] += 1;
					cube[i-1].innerHTML = for_cube_number[i-1]; 
					if(bombs[j] > 8) {
						for_cube_number[i-10] += 1;
						cube[i-10].innerHTML = for_cube_number[i-10]; 
					}
				}
				/*Нижняя клетка*/
				if(bombs[j] < 72) {
					for_cube_number[i+9] += 1;
					cube[i+9].innerHTML = for_cube_number[i+9]; 
				}
			}
		}
	}

	delete_number_on_bomb();								// Удаление расстояния бомбы на клетке с бомбой
}

function delete_number_on_bomb() {
	for(let i = 0; i < for_cube_number.length; i++) {
		for(let j = 0; j < bombs.length; j++) {
			if(i == bombs[j]) {
				for_cube_number[i] = 10;					// Обозначить поле с бомбой числом в массиве для автооткрытия поля
				cube[i].innerHTML = "";
			}
		}
	}
}

function getRandom() {
	let Mathnumber = Math.round(Math.random() * (max - min) + min);
	// let Mathnumber = 80;
	if(bombs.length >= 1) {
		for(let j = 0; j < bombs.length; j++) {
			if(Mathnumber == bombs[j]) {
				getRandom();
				return 0;
			}
		}
	}
	bombs.push(Mathnumber);
}

function showEmpty(number) {
	/*Правые кубики*/
	if(for_cube_number[number+1] == 0 && number != 8 && number != 17 && number != 26 && number != 35 && number != 44 && number != 53 && number != 62 && number != 71 && number != 80) {
		cube[number+1].classList.add("cube-show");
		if(for_cube_number[number+2] != 10 && number+1 != 8 && number+1 != 17 && number+1 != 26 && number+1 != 35 && number+1 != 44 && number+1 != 53 && number+1 != 62 && number+1 != 71 && number+1 != 80) {
			cube[number+2].classList.add("cube-show");
		}
	}


	
	/*Левые кубики*/
	if(for_cube_number[number-1] == 0 && number != 0 && number != 9 && number != 18 && number != 27 && number != 36 && number != 45 && number != 54 && number != 63 && number != 72) {
		cube[number-1].classList.add("cube-show");
		if(for_cube_number[number-2] != 10 && number-1 != 0 && number-1 != 9 && number-1 != 18 && number-1 != 27 && number-1 != 36 && number-1 != 45 && number-1 != 54 && number-1 != 63 && number-1 != 72) {
			cube[number-2].classList.add("cube-show");
		}
	}

	/*Верхние кубики*/
	if(for_cube_number[number-9] == 0 && number > 8) {			//(for_cube_number[number-9] == 0 || for_cube_number[number-9] != 10 && for_cube_number[number] == 0) && number > 8)
		cube[number-9].classList.add("cube-show");
		if(for_cube_number[number-18] != 10 && number > 16) {
			cube[number-18].classList.add("cube-show");
		}
	}

	/*Нижние кубики*/
	if(for_cube_number[number+9] == 0 && number < 80-8) {
		cube[number+9].classList.add("cube-show");
		if(for_cube_number[number+18] != 10 && number < 80-16) {
			cube[number+18].classList.add("cube-show");
		}
	}
}

function showEmptyClick(number) {
	if(for_cube_number[number] == 0) {
		if(for_cube_number[number-1] != 10 && number != 0 && number != 9 && number != 18 && number != 27 && number != 36 && number != 45 && number != 54 && number != 63 && number != 72) {
			cube[number-1].click();
		}
		if(for_cube_number[number+1] != 10 && number != 8 && number != 17 && number != 26 && number != 35 && number != 44 && number != 53 && number != 62 && number != 71 && number != 80) {
			cube[number+1].click();
		}
		if(/*for_cube_number[number-9] == 0 &&*/ number > 8 && for_cube_number[number-9] != 10) {
			cube[number-9].click();
		}
		if(/*for_cube_number[number-9] == 0 &&*/ number < 80-8 && for_cube_number[number-9] != 10) {
			cube[number+9].click();
		}
	}
}

/*=================function click=================*/
function show(number) {
	if(cube[number].classList.contains("cube-pcm-bomb") || cube[number].classList.contains("cube-show")) {
		return 0;
	}
	for(let i = 0; i < bombs.length; i++) {
		if(number == bombs[i]) {												// Проверка на взрыв
			document.getElementsByClassName("pop-up-retry")[0].style.opacity = "1";
			document.getElementsByClassName("pop-up-retry")[0].style.transform = "translateX(-50%)";
			cube[number].classList.add("cube-bomb");
			// document.getElementById("main").style.pointerEvents = "none";	// Заблокировать клик после взрыва
		}
	}
	cube[number].classList.add("cube-show");
	showEmptyClick(number);
}

function pcm(number) {
	if(!cube[number].classList.contains("cube-show")) {
		if(cube[number].classList.contains("cube-pcm-bomb")) {
			cube[number].classList.remove("cube-pcm-bomb");
			pcm_bombs--;
			for(let j = 0; j < flag_cube.length; j++) {
				if(number == flag_cube[j]) {
					flag_cube.splice(j, 1);
				}
			}
			document.getElementsByClassName('block-flag__number')[0].innerHTML = Math.abs(pcm_bombs - 10);			// Обновление счётчика в HTML
		}
		else if(pcm_bombs < cout_bombs) {
			cube[number].classList.add("cube-pcm-bomb");
			pcm_bombs++;
			flag_cube.push(number);
			document.getElementsByClassName('block-flag__number')[0].innerHTML = Math.abs(pcm_bombs - 10);
		}
		else {
			alert('Много помеченых бомб');
		}
	}
	if(pcm_bombs == cout_bombs) {									// Проверка на победу
		let find_all_bomb_with_flags = 0;
		for(let i = 0; i < flag_cube.length; i++) {
			for(let j = 0; j < bombs.length; j++) {
				if(flag_cube[i] == bombs[j]) {
					find_all_bomb_with_flags++;
				}
			}
		}
		if(find_all_bomb_with_flags == bombs.length) {
			document.getElementsByClassName('pop-up-retry__title')[0].innerHTML = "Победа, молодец!";
			document.getElementsByClassName("pop-up-retry")[0].style.opacity = "1";
			document.getElementsByClassName("pop-up-retry")[0].style.transform = "translateX(-50%)";
		}
	}
}

function mobileSession() {
	if(document.getElementsByClassName('cube')[0].getAttribute("onclick") == "pcm(0)") {
		for(let i = 0; 81 > i; i++) {
			document.getElementsByClassName('cube')[i].setAttribute("onclick", "show(" + i + ")");
		}
		document.getElementsByClassName('phone-btn')[0].style.background = "";
	}
	else {
		for(let i = 0; 81 > i; i++) {
			document.getElementsByClassName('cube')[i].setAttribute("onclick", "pcm(" + i + ")");
		}
		document.getElementsByClassName('phone-btn')[0].style.background = "url('flag.svg') no-repeat center center / 80%";
	}
}
