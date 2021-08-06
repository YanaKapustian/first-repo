const doc = document
const btnNext1 = doc.querySelectorAll('.arrow-right')[0]
const btnPrevious1 = doc.querySelectorAll('.arrow-left')[0]
const blockRed = doc.querySelector('.color-block__red')
const btnNext2 = doc.querySelectorAll('.arrow-right')[1]
const btnPrevious2 = doc.querySelectorAll('.arrow-left')[1]
const blockOrange = doc.querySelector('.color-block__orange')
const btnNext3 = doc.querySelectorAll('.arrow-right')[2]
const btnPrevious3 = doc.querySelectorAll('.arrow-left')[2]
const blockYellow = doc.querySelector('.color-block__yellow')
const btnNext4 = doc.querySelectorAll('.arrow-right')[3]
const btnPrevious4 = doc.querySelectorAll('.arrow-left')[3]
const blockGreen = doc.querySelector('.color-block__green')
const btnNext5 = doc.querySelectorAll('.arrow-right')[4]
const btnPrevious5 = doc.querySelectorAll('.arrow-left')[4]
const blockBlue = doc.querySelector('.color-block__blue')
const btnNext6 = doc.querySelectorAll('.arrow-right')[5]
const btnPrevious6 = doc.querySelectorAll('.arrow-left')[5]
const blockDarkblue = doc.querySelector('.color-block__darkblue')
const btnNext7 = doc.querySelectorAll('.arrow-right')[6]
const btnPrevious7 = doc.querySelectorAll('.arrow-left')[6]
const blockPurple = doc.querySelector('.color-block__purple')
const btnCheck = doc.querySelector('.button-check')
const messageCorrect = doc.querySelector('.message-correct')
const messageMistake = doc.querySelector('.message-mistake')
const userResult = doc.querySelector('.result')
const btnAgain = doc.querySelector('.button-again')

let i = 1;
btnNext1.onclick = function() {
	if (i === 7){
		blockRed.style.backgroundColor = '#ffa10b'
		i = 1
		return
	}
	if (i === 1){
		blockRed.style.backgroundColor = '#01d0f8'
		i = 2
		return
	}
	if (i === 2){
		blockRed.style.backgroundColor = '#9745d3'
		i = 3
		return
	}
	if (i === 3){
		blockRed.style.backgroundColor = '#fe2c07'
		i = 4
		return
	}
	if (i === 4){
		blockRed.style.backgroundColor = '#1b56ee'
		i = 5
		return
	}
	if (i === 5){
		blockRed.style.backgroundColor = 'yellow'
		i = 6
		return
	}
	if (i === 6){
		blockRed.style.backgroundColor = '#5aba00'
		i = 7
		return
	}
}
btnPrevious1.onclick = function(){
	if (i === 1){
		blockRed.style.backgroundColor = '#5aba00'
		i = 7
		return
	}
	if (i === 7){
		blockRed.style.backgroundColor = 'yellow'
		i = 6
		return
	}
	if (i === 6){
		blockRed.style.backgroundColor = '#1b56ee'
		i = 5
		return
	}
	if (i === 5){
		blockRed.style.backgroundColor = '#fe2c07'
		i = 4
		return
	}
	if (i === 4){
		blockRed.style.backgroundColor = '#9745d3'
		i = 3
		return
	}
	if (i === 3){
		blockRed.style.backgroundColor = '#01d0f8'
		i = 2
		return
	}
	if (i === 2){
		blockRed.style.backgroundColor = '#ffa10b'
		i = 1
		return
	}
}

let a = 2;
btnNext2.onclick = function(){
	if (a === 7){
		blockOrange.style.backgroundColor = '#ffa10b'
		a = 1
		return
	}
	if (a === 1){
		blockOrange.style.backgroundColor = '#01d0f8'
		a = 2
		return
	}
	if (a === 2){
		blockOrange.style.backgroundColor = '#9745d3'
		a = 3
		return
	}
	if (a === 3){
		blockOrange.style.backgroundColor = '#fe2c07'
		a = 4
		return
	}
	if (a === 4){
		blockOrange.style.backgroundColor = '#1b56ee'
		a = 5
		return
	}
	if (a === 5){
		blockOrange.style.backgroundColor = 'yellow'
		a = 6
		return
	}
	if (a === 6){
		blockOrange.style.backgroundColor = '#5aba00'
		a = 7
		return
	}
}
btnPrevious2.onclick = function(){
	if (a === 1){
		blockOrange.style.backgroundColor = '#5aba00'
		a = 7
		return
	}
	if (a === 7){
		blockOrange.style.backgroundColor = 'yellow'
		a = 6
		return
	}
	if (a === 6){
		blockOrange.style.backgroundColor = '#1b56ee'
		a = 5
		return
	}
	if (a === 5){
		blockOrange.style.backgroundColor = '#fe2c07'
		a = 4
		return
	}
	if (a === 4){
		blockOrange.style.backgroundColor = '#9745d3'
		a = 3
		return
	}
	if (a === 3){
		blockOrange.style.backgroundColor = '#01d0f8'
		a = 2
		return
	}
	if (a === 2){
		blockOrange.style.backgroundColor = '#ffa10b'
		a = 1
		return
	}
}

let b = 3;
btnNext3.onclick = function() {
	if (b === 7){
		blockYellow.style.backgroundColor = '#ffa10b'
		b = 1
		return
	}
	if (b === 1){
		blockYellow.style.backgroundColor = '#01d0f8'
		b = 2
		return
	}
	if (b === 2){
		blockYellow.style.backgroundColor = '#9745d3'
		b = 3
		return
	}
	if (b === 3){
		blockYellow.style.backgroundColor = '#fe2c07'
		b = 4
		return
	}
	if (b === 4){
		blockYellow.style.backgroundColor = '#1b56ee'
		b = 5
		return
	}
	if (b === 5){
		blockYellow.style.backgroundColor = 'yellow'
		b = 6
		return
	}
	if (b === 6){
		blockYellow.style.backgroundColor = '#5aba00'
		b = 7
		return
	}
}
btnPrevious3.onclick = function(){
	if (b === 1){
		blockYellow.style.backgroundColor = '#5aba00'
		b = 7
		return
	}
	if (b === 7){
		blockYellow.style.backgroundColor = 'yellow'
		b = 6
		return
	}
	if (b === 6){
		blockYellow.style.backgroundColor = '#1b56ee'
		b = 5
		return
	}
	if (b === 5){
		blockYellow.style.backgroundColor = '#fe2c07'
		b = 4
		return
	}
	if (b === 4){
		blockYellow.style.backgroundColor = '#9745d3'
		b = 3
		return
	}
	if (b === 3){
		blockYellow.style.backgroundColor = '#01d0f8'
		b = 2
		return
	}
	if (b === 2){
		blockYellow.style.backgroundColor = '#ffa10b'
		b = 1
		return
	}
}

let c = 4;
btnNext4.onclick = function() {
	if (c === 7){
		blockGreen.style.backgroundColor = '#ffa10b'
		c = 1
		return
	}
	if (c === 1){
		blockGreen.style.backgroundColor = '#01d0f8'
		c = 2
		return
	}
	if (c === 2){
		blockGreen.style.backgroundColor = '#9745d3'
		c = 3
		return
	}
	if (c === 3){
		blockGreen.style.backgroundColor = '#fe2c07'
		c = 4
		return
	}
	if (c === 4){
		blockGreen.style.backgroundColor = '#1b56ee'
		c = 5
		return
	}
	if (c === 5){
		blockGreen.style.backgroundColor = 'yellow'
		c = 6
		return
	}
	if (c === 6){
		blockGreen.style.backgroundColor = '#5aba00'
		c = 7
		return
	}
}
btnPrevious4.onclick = function(){
	if (c === 1){
		blockGreen.style.backgroundColor = '#5aba00'
		c = 7
		return
	}
	if (c === 7){
		blockGreen.style.backgroundColor = 'yellow'
		c = 6
		return
	}
	if (c === 6){
		blockGreen.style.backgroundColor = '#1b56ee'
		c = 5
		return
	}
	if (c === 5){
		blockGreen.style.backgroundColor = '#fe2c07'
		c = 4
		return
	}
	if (c === 4){
		blockGreen.style.backgroundColor = '#9745d3'
		c = 3
		return
	}
	if (c === 3){
		blockGreen.style.backgroundColor = '#01d0f8'
		c = 2
		return
	}
	if (c === 2){
		blockGreen.style.backgroundColor = '#ffa10b'
		c = 1
		return
	}
}

let d = 5;
btnNext5.onclick = function() {
	if (d === 7){
		blockBlue.style.backgroundColor = '#ffa10b'
		d = 1
		return
	}
	if (d === 1){
		blockBlue.style.backgroundColor = '#01d0f8'
		d = 2
		return
	}
	if (d === 2){
		blockBlue.style.backgroundColor = '#9745d3'
		d = 3
		return
	}
	if (d === 3){
		blockBlue.style.backgroundColor = '#fe2c07'
		d = 4
		return
	}
	if (d === 4){
		blockBlue.style.backgroundColor = '#1b56ee'
		d = 5
		return
	}
	if (d === 5){
		blockBlue.style.backgroundColor = 'yellow'
		d = 6
		return
	}
	if (d === 6){
		blockBlue.style.backgroundColor = '#5aba00'
		d = 7
		return
	}
}
btnPrevious5.onclick = function(){
	if (d === 1){
		blockBlue.style.backgroundColor = '#5aba00'
		d = 7
		return
	}
	if (d === 7){
		blockBlue.style.backgroundColor = 'yellow'
		d = 6
		return
	}
	if (d === 6){
		blockBlue.style.backgroundColor = '#1b56ee'
		d = 5
		return
	}
	if (d === 5){
		blockBlue.style.backgroundColor = '#fe2c07'
		d = 4
		return
	}
	if (d === 4){
		blockBlue.style.backgroundColor = '#9745d3'
		d = 3
		return
	}
	if (d === 3){
		blockBlue.style.backgroundColor = '#01d0f8'
		d = 2
		return
	}
	if (d === 2){
		blockBlue.style.backgroundColor = '#ffa10b'
		d = 1
		return
	}
}

let f = 6;
btnNext6.onclick = function() {
	if (f === 7){
		blockDarkblue.style.backgroundColor = '#ffa10b'
		f = 1
		return
	}
	if (f === 1){
		blockDarkblue.style.backgroundColor = '#01d0f8'
		f = 2
		return
	}
	if (f === 2){
		blockDarkblue.style.backgroundColor = '#9745d3'
		f = 3
		return
	}
	if (f === 3){
		blockDarkblue.style.backgroundColor = '#fe2c07'
		f = 4
		return
	}
	if (f === 4){
		blockDarkblue.style.backgroundColor = '#1b56ee'
		f = 5
		return
	}
	if (f === 5){
		blockDarkblue.style.backgroundColor = 'yellow'
		f = 6
		return
	}
	if (f === 6){
		blockDarkblue.style.backgroundColor = '#5aba00'
		f = 7
		return
	}
}
btnPrevious6.onclick = function(){
	if (f === 1){
		blockDarkblue.style.backgroundColor = '#5aba00'
		f = 7
		return
	}
	if (f === 7){
		blockDarkblue.style.backgroundColor = 'yellow'
		f = 6
		return
	}
	if (f === 6){
		blockDarkblue.style.backgroundColor = '#1b56ee'
		f = 5
		return
	}
	if (f === 5){
		blockDarkblue.style.backgroundColor = '#fe2c07'
		f = 4
		return
	}
	if (f === 4){
		blockDarkblue.style.backgroundColor = '#9745d3'
		f = 3
		return
	}
	if (f === 3){
		blockDarkblue.style.backgroundColor = '#01d0f8'
		f = 2
		return
	}
	if (f === 2){
		blockDarkblue.style.backgroundColor = '#ffa10b'
		f = 1
		return
	}
}

let g = 7;
btnNext7.onclick = function() {
	if (g === 7){
		blockPurple.style.backgroundColor = '#ffa10b'
		g = 1
		return
	}
	if (g === 1){
		blockPurple.style.backgroundColor = '#01d0f8'
		g = 2
		return
	}
	if (g === 2){
		blockPurple.style.backgroundColor = '#9745d3'
		g = 3
		return
	}
	if (g === 3){
		blockPurple.style.backgroundColor = '#fe2c07'
		g = 4
		return
	}
	if (g === 4){
		blockPurple.style.backgroundColor = '#1b56ee'
		g = 5
		return
	}
	if (g === 5){
		blockPurple.style.backgroundColor = 'yellow'
		g = 6
		return
	}
	if (g === 6){
		blockPurple.style.backgroundColor = '#5aba00'
		g = 7
		return
	}
}
btnPrevious7.onclick = function(){
	if (g === 1){
		blockPurple.style.backgroundColor = '#5aba00'
		g = 7
		return
	}
	if (g === 7){
		blockPurple.style.backgroundColor = 'yellow'
		g = 6
		return
	}
	if (g === 6){
		blockPurple.style.backgroundColor = '#1b56ee'
		g = 5
		return
	}
	if (g === 5){
		blockPurple.style.backgroundColor = '#fe2c07'
		g = 4
		return
	}
	if (g === 4){
		blockPurple.style.backgroundColor = '#9745d3'
		g = 3
		return
	}
	if (g === 3){
		blockPurple.style.backgroundColor = '#01d0f8'
		g = 2
		return
	}
	if (g === 2){
		blockPurple.style.backgroundColor = '#ffa10b'
		g = 1
		return
	}
}

btnCheck.onclick = function(){
	if (i === 4 && a === 1 && b === 6 && c === 7 && d === 2 && f === 5 && g === 3){
		btnCheck.classList.add('hidden')
		messageCorrect.classList.remove('hidden')
	} else {
		userResult.innerText = sumResult()
		messageMistake.classList.remove('hidden')
		btnCheck.classList.add('hidden')
		btnAgain.classList.remove('hidden')
	}
}
let result = 0
function sumResult (){
	if (i === 4){
		result++
	}
	if (a === 1){
		result++
	}
	if (b === 6){
		result++
	}
	if (c === 7){
		result++
	}
	if (d === 2){
		result++
	}
	if (f === 5){
		result++
	}
	if (g === 3){
		result++
	}
	return result
}
btnAgain.onclick = function() {
	window.location.reload()
}

