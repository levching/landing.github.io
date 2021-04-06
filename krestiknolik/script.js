var select_player = 0;						//Выбран игрок
var section;								//Какая выбрана секция
let check_section = [0,0,0,0,0,0,0,0,0];	//Кому принадлежит секция(крестик или нолик)
var cout_krestik = 0;						//Счёт крестика
var cout_nolik = 0;							//Счёт нолика
// 0 - krestik, 1 - nolik
function run() {
	if(check_section[section] == 0) {
		if(select_player == 0) {
			document.getElementsByClassName('krestik')[section].classList.add('krestik-focus');
			check_section[section] = 1;
		}
		else {
			document.getElementsByClassName('nolik')[section].classList.add('nolik-focus');
			check_section[section] = 2;
		}
	}
	else {
		return 0;
	}
	check_winner();
	select_player++;
	if(select_player == 2) {
		select_player = 0;
	}
	cursor();
}
function check_winner() {
	//горизонталь
	if (check_section[0] == check_section[1] && check_section[0] == check_section[2] && check_section[0] != 0) {
		document.getElementsByClassName('winner-line')[0].style.left = '0';
		winner();
	}
	else if (check_section[3] == check_section[4] && check_section[3] == check_section[5] && check_section[3] != 0) {
		document.getElementsByClassName('winner-line2')[0].style.left = '0';
		winner();
	}
	else if (check_section[6] == check_section[7] && check_section[6] == check_section[8] && check_section[6] != 0) {
		document.getElementsByClassName('winner-line3')[0].style.left = '0';
		winner();
	}
	//вертикаль
	else if (check_section[0] == check_section[3] && check_section[0] == check_section[6] && check_section[0] != 0) {
		document.getElementsByClassName('winner-line4')[0].style.bottom = '0';
		winner();
	}
	else if (check_section[1] == check_section[4] && check_section[1] == check_section[7] && check_section[1] != 0) {
		document.getElementsByClassName('winner-line5')[0].style.bottom = '0';
		winner();
	}
	else if (check_section[2] == check_section[5] && check_section[2] == check_section[8] && check_section[2] != 0) {
		document.getElementsByClassName('winner-line6')[0].style.bottom = '0';
		winner();
	}
	//диагональ
	else if (check_section[2] == check_section[4] && check_section[2] == check_section[6] && check_section[2] != 0) {
		document.getElementsByClassName('winner-line7')[0].style.transform = 'rotate(45deg)';
		winner();
	}
	else if (check_section[0] == check_section[4] && check_section[0] == check_section[8] && check_section[0] != 0) {
		document.getElementsByClassName('winner-line8')[0].style.transform = 'rotate(-45deg)';
		winner();
	}
	//ничья
	else {
		var cout = 0;
		for(i = 0; i < 9; i++) {
			if(check_section[i] != 0) {
				cout++;
				if(cout == 9) {
					document.getElementById('player_name_winner').innerHTML = 'Ничья';
					document.getElementsByClassName('game-over')[0].classList.add('js-game-over');
				}
			}
		}
	}
}
function cursor() {
	if(select_player == 1) {
		document.getElementsByClassName('main-span')[0].classList.add('main-span-js');
	}
	else {
		document.getElementsByClassName('main-span')[0].classList.remove('main-span-js');
	}
}
function winner() {
	var name;
	if(select_player == 0) {
		name = 'Победил Крестик';
		cout_krestik++;
		document.getElementById('cout_krestik').innerHTML = cout_krestik;
	}
	else {
		name = 'Победил Нолик';
		cout_nolik++;
		document.getElementById('cout_nolik').innerHTML = cout_nolik;
	}
	document.getElementById('player_name_winner').innerHTML = name;
	document.getElementsByClassName('game-over')[0].classList.add('js-game-over');
}
function retry() {
	select_player = 0;
	check_section = [0,0,0,0,0,0,0,0,0];
	cursor();
	document.getElementsByClassName('game-over')[0].classList.remove('js-game-over');
	for(i = 0; i < 9; i++) {
		document.getElementsByClassName('krestik')[i].classList.remove('krestik-focus');
		document.getElementsByClassName('nolik')[i].classList.remove('nolik-focus');
	}
	for(i = 0; i < 3; i++) {
		document.getElementsByClassName('wl')[i].style.left = '';
		document.getElementsByClassName('wl')[i+3].style.bottom = '';
	}
	for(i = 0; i < 2; i++) {
		document.getElementsByClassName('wl')[i+6].style.transform = '';
	}
}

window.onload = function start_list() {
	document.getElementsByClassName('line')[0].style.top = '0';
	document.getElementsByClassName('line')[1].style.top = '0';
	document.getElementsByClassName('line')[2].style.left = '0';
	document.getElementsByClassName('line')[3].style.left = '0';
}