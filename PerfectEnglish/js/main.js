
const inputOn = document.querySelectorAll('.main__input_on');
const inputAt = document.querySelectorAll('.main__input_at');
const inputIn = document.querySelectorAll('.main__input_in');
const buttonCheck = document.querySelectorAll('.main__check');
const buttonShow = document.querySelectorAll('.main__show');
const tick = document.querySelectorAll('.main__tick');
const cross = document.querySelectorAll('.main__cross');
const popUpClose = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
const ansShow = document.querySelectorAll('.main__ans');
const input = document.querySelectorAll('.main__input');

popUpClose.addEventListener('click', function(){
	popUp.classList.add('hidden');
})

//1
buttonShow[0].addEventListener('click', function(){
	ansShow[0].classList.toggle('hidden');
	ansShow[1].classList.toggle('hidden');
	ansShow[2].classList.toggle('hidden');
});

input[0].addEventListener('focus', function(){
		ansShow[0].classList.add('hidden');
		ansShow[1].classList.add('hidden');
		ansShow[2].classList.add('hidden');
	});
input[1].addEventListener('focus', function(){
		ansShow[0].classList.add('hidden');
		ansShow[1].classList.add('hidden');
		ansShow[2].classList.add('hidden');
	});
input[2].addEventListener('focus', function(){
		ansShow[0].classList.add('hidden');
		ansShow[1].classList.add('hidden');
		ansShow[2].classList.add('hidden');
	});

buttonCheck[0].addEventListener('click', function(){
	if (inputOn[0].value === 'on') {
		tick[0].classList.remove('hidden');
		cross[0].classList.add('hidden');
	} else {
		cross[0].classList.remove('hidden');
		tick[0].classList.add('hidden');
	}
	if (inputAt[0].value === 'at') {
		tick[1].classList.remove('hidden');
		cross[1].classList.add('hidden');
	} else {
		cross[1].classList.remove('hidden');
		tick[1].classList.add('hidden');
	}
	if (inputIn[0].value === 'in') {
		tick[2].classList.remove('hidden');
		cross[2].classList.add('hidden');
	} else {
		cross[2].classList.remove('hidden');
		tick[2].classList.add('hidden');
	}
})

//2
buttonShow[1].addEventListener('click', function(){
	ansShow[3].classList.toggle('hidden');
});

input[3].addEventListener('focus', function(){
		ansShow[3].classList.add('hidden');
	});

buttonCheck[1].addEventListener('click', function(){
	if (inputIn[1].value === 'in') {
		tick[3].classList.remove('hidden');
		cross[3].classList.add('hidden');
	} else {
		cross[3].classList.remove('hidden');
		tick[3].classList.add('hidden');
	}
});

//3
buttonShow[2].addEventListener('click', function(){
	ansShow[4].classList.toggle('hidden');
});

input[4].addEventListener('focus', function(){
		ansShow[4].classList.add('hidden');
	});

buttonCheck[2].addEventListener('click', function(){
	if (inputAt[1].value === 'at') {
		tick[4].classList.remove('hidden');
		cross[4].classList.add('hidden');
	} else {
		cross[4].classList.remove('hidden');
		tick[4].classList.add('hidden');
	}
});

//4
buttonShow[3].addEventListener('click', function(){
	ansShow[5].classList.toggle('hidden');
});

input[5].addEventListener('focus', function(){
		ansShow[5].classList.add('hidden');
	});

buttonCheck[3].addEventListener('click', function(){
	if (inputIn[2].value === 'in') {
		tick[5].classList.remove('hidden');
		cross[5].classList.add('hidden');
	} else {
		cross[5].classList.remove('hidden');
		tick[5].classList.add('hidden');
	}
});

//5
buttonShow[4].addEventListener('click', function(){
	ansShow[6].classList.toggle('hidden');
});

input[6].addEventListener('focus', function(){
		ansShow[6].classList.add('hidden');
	});

buttonCheck[4].addEventListener('click', function(){
	if (inputIn[3].value === 'in') {
		tick[6].classList.remove('hidden');
		cross[6].classList.add('hidden');
	} else {
		cross[6].classList.remove('hidden');
		tick[6].classList.add('hidden');
	}
});

//6
buttonShow[5].addEventListener('click', function(){
	ansShow[7].classList.toggle('hidden');
});

input[7].addEventListener('focus', function(){
		ansShow[7].classList.add('hidden');
	});

buttonCheck[5].addEventListener('click', function(){
	if (inputIn[4].value === 'in') {
		tick[7].classList.remove('hidden');
		cross[7].classList.add('hidden');
	} else {
		cross[7].classList.remove('hidden');
		tick[7].classList.add('hidden');
	}
});

//7
buttonShow[6].addEventListener('click', function(){
	ansShow[8].classList.toggle('hidden');
});

input[8].addEventListener('focus', function(){
		ansShow[8].classList.add('hidden');
	});

buttonCheck[6].addEventListener('click', function(){
	if (inputIn[5].value === 'in') {
		tick[8].classList.remove('hidden');
		cross[8].classList.add('hidden');
	} else {
		cross[8].classList.remove('hidden');
		tick[8].classList.add('hidden');
	}
});

//8
buttonShow[7].addEventListener('click', function(){
	ansShow[9].classList.toggle('hidden');
});

input[9].addEventListener('focus', function(){
		ansShow[9].classList.add('hidden');
	});

buttonCheck[7].addEventListener('click', function(){
	if (inputIn[6].value === 'in') {
		tick[9].classList.remove('hidden');
		cross[9].classList.add('hidden');
	} else {
		cross[9].classList.remove('hidden');
		tick[9].classList.add('hidden');
	}
});

//9
buttonShow[8].addEventListener('click', function(){
	ansShow[10].classList.toggle('hidden');
});

input[10].addEventListener('focus', function(){
		ansShow[10].classList.add('hidden');
	});

buttonCheck[8].addEventListener('click', function(){
	if (inputIn[7].value === 'in') {
		tick[10].classList.remove('hidden');
		cross[10].classList.add('hidden');
	} else {
		cross[10].classList.remove('hidden');
		tick[10].classList.add('hidden');
	}
});

//10
buttonShow[9].addEventListener('click', function(){
	ansShow[11].classList.toggle('hidden');
	ansShow[12].classList.toggle('hidden');
});

input[11].addEventListener('focus', function(){
		ansShow[11].classList.add('hidden');
		ansShow[12].classList.add('hidden');
	});
input[12].addEventListener('focus', function(){
		ansShow[11].classList.add('hidden');
		ansShow[12].classList.add('hidden');
	});

buttonCheck[9].addEventListener('click', function(){
	if (inputAt[2].value === 'at') {
		tick[11].classList.remove('hidden');
		cross[11].classList.add('hidden');
	} else {
		cross[11].classList.remove('hidden');
		tick[11].classList.add('hidden');
	}
	if (inputOn[1].value === 'on') {
		tick[12].classList.remove('hidden');
		cross[12].classList.add('hidden');
	} else {
		cross[12].classList.remove('hidden');
		tick[12].classList.add('hidden');
	}
});

//11
buttonShow[10].addEventListener('click', function(){
	ansShow[13].classList.toggle('hidden');
	ansShow[14].classList.toggle('hidden');
});

input[13].addEventListener('focus', function(){
		ansShow[13].classList.add('hidden');
		ansShow[14].classList.add('hidden');
	});
input[14].addEventListener('focus', function(){
		ansShow[13].classList.add('hidden');
		ansShow[14].classList.add('hidden');
	});

buttonCheck[10].addEventListener('click', function(){
	if (inputOn[2].value === '-') {
		tick[13].classList.remove('hidden');
		cross[13].classList.add('hidden');
	} else {
		cross[13].classList.remove('hidden');
		tick[13].classList.add('hidden');
	}
	if (inputAt[3].value === 'at') {
		tick[14].classList.remove('hidden');
		cross[14].classList.add('hidden');
	} else {
		cross[14].classList.remove('hidden');
		tick[14].classList.add('hidden');
	}
});

//12
buttonShow[11].addEventListener('click', function(){
	ansShow[15].classList.toggle('hidden');
});

input[15].addEventListener('focus', function(){
		ansShow[15].classList.add('hidden');
	});

buttonCheck[11].addEventListener('click', function(){
	if (inputIn[8].value === 'in') {
		tick[15].classList.remove('hidden');
		cross[15].classList.add('hidden');
	} else {
		cross[15].classList.remove('hidden');
		tick[15].classList.add('hidden');
	}
});

//13
buttonShow[12].addEventListener('click', function(){
	ansShow[16].classList.toggle('hidden');
});

input[16].addEventListener('focus', function(){
		ansShow[16].classList.add('hidden');
	});

buttonCheck[12].addEventListener('click', function(){
	if (inputAt[4].value === 'at') {
		tick[16].classList.remove('hidden');
		cross[16].classList.add('hidden');
	} else {
		cross[16].classList.remove('hidden');
		tick[16].classList.add('hidden');
	}
});

//14
buttonShow[13].addEventListener('click', function(){
	ansShow[17].classList.toggle('hidden');
	ansShow[18].classList.toggle('hidden');
});

input[17].addEventListener('focus', function(){
		ansShow[17].classList.add('hidden');
		ansShow[18].classList.add('hidden');
	});
input[18].addEventListener('focus', function(){
		ansShow[17].classList.add('hidden');
		ansShow[18].classList.add('hidden');
	});

buttonCheck[13].addEventListener('click', function(){
	if (inputAt[5].value === 'at') {
		tick[17].classList.remove('hidden');
		cross[17].classList.add('hidden');
	} else {
		cross[17].classList.remove('hidden');
		tick[17].classList.add('hidden');
	}
	if (inputOn[3].value === 'on') {
		tick[18].classList.remove('hidden');
		cross[18].classList.add('hidden');
	} else {
		cross[18].classList.remove('hidden');
		tick[18].classList.add('hidden');
	}
});

//15
buttonShow[14].addEventListener('click', function(){
	ansShow[19].classList.toggle('hidden');
	ansShow[20].classList.toggle('hidden');
});

input[19].addEventListener('focus', function(){
		ansShow[19].classList.add('hidden');
		ansShow[20].classList.add('hidden');
	});
input[20].addEventListener('focus', function(){
		ansShow[19].classList.add('hidden');
		ansShow[20].classList.add('hidden');
	});

buttonCheck[14].addEventListener('click', function(){
	if (inputIn[9].value === 'in') {
		tick[19].classList.remove('hidden');
		cross[19].classList.add('hidden');
	} else {
		cross[19].classList.remove('hidden');
		tick[19].classList.add('hidden');
	}
	if (inputIn[10].value === 'in') {
		tick[20].classList.remove('hidden');
		cross[20].classList.add('hidden');
	} else {
		cross[20].classList.remove('hidden');
		tick[20].classList.add('hidden');
	}
});

//16
buttonShow[15].addEventListener('click', function(){
	ansShow[21].classList.toggle('hidden');
});

input[21].addEventListener('focus', function(){
		ansShow[21].classList.add('hidden');
	});

buttonCheck[15].addEventListener('click', function(){
	if (inputAt[6].value === '-') {
		tick[21].classList.remove('hidden');
		cross[21].classList.add('hidden');
	} else {
		cross[21].classList.remove('hidden');
		tick[21].classList.add('hidden');
	}
});

//17
buttonShow[16].addEventListener('click', function(){
	ansShow[22].classList.toggle('hidden');
});

input[22].addEventListener('focus', function(){
		ansShow[22].classList.add('hidden');
	});

buttonCheck[16].addEventListener('click', function(){
	if (inputOn[4].value === 'on') {
		tick[22].classList.remove('hidden');
		cross[22].classList.add('hidden');
	} else {
		cross[22].classList.remove('hidden');
		tick[22].classList.add('hidden');
	}
});

//18
buttonShow[17].addEventListener('click', function(){
	ansShow[23].classList.toggle('hidden');
});

input[23].addEventListener('focus', function(){
		ansShow[23].classList.add('hidden');
	});

buttonCheck[17].addEventListener('click', function(){
	if (inputOn[5].value === 'on') {
		tick[23].classList.remove('hidden');
		cross[23].classList.add('hidden');
	} else {
		cross[23].classList.remove('hidden');
		tick[23].classList.add('hidden');
	}
});

//19
buttonShow[18].addEventListener('click', function(){
	ansShow[24].classList.toggle('hidden');
});

input[24].addEventListener('focus', function(){
		ansShow[24].classList.add('hidden');
	});

buttonCheck[18].addEventListener('click', function(){
	if (inputAt[7].value === 'at') {
		tick[24].classList.remove('hidden');
		cross[24].classList.add('hidden');
	} else {
		cross[24].classList.remove('hidden');
		tick[24].classList.add('hidden');
	}
});

//20
buttonShow[19].addEventListener('click', function(){
	ansShow[25].classList.toggle('hidden');
	ansShow[26].classList.toggle('hidden');
});

input[25].addEventListener('focus', function(){
		ansShow[25].classList.add('hidden');
		ansShow[26].classList.add('hidden');
	});
input[26].addEventListener('focus', function(){
		ansShow[25].classList.add('hidden');
		ansShow[26].classList.add('hidden');
	});

buttonCheck[19].addEventListener('click', function(){
	if (inputAt[8].value === 'at') {
		tick[25].classList.remove('hidden');
		cross[25].classList.add('hidden');
	} else {
		cross[25].classList.remove('hidden');
		tick[25].classList.add('hidden');
	}
	if (inputAt[9].value === '-') {
		tick[26].classList.remove('hidden');
		cross[26].classList.add('hidden');
	} else {
		cross[26].classList.remove('hidden');
		tick[26].classList.add('hidden');
	}
});