//[---31.08.2022 - app7.js - start---]
console.log('[---31.08.2022 - app7.js - start---]');

// zadanie o uczniach - patrz app7.js
console.log('-----zadanie o uczniach START:----');
// const listaUczniow = [
// 	{ firstName: 'Peter', age: 6, score: 34 },
// 	{ firstName: 'Pit', age: 7, score: 49 },
// 	{ firstName: 'Paul', age: 8, score: 64 },
// 	{ firstName: 'Pier', age: 9, score: 91 },
// ];
// for (let i = 0; i < listaUczniow.length; i++) {
// 	const a = listaUczniow[i].age;
// 	let klasa;
// 	switch (a) {
// 		case 6:
// 			klasa = 1;
// 			break;
// 		case 7:
// 			klasa = 2;
// 			break;
// 		case 8:
// 			klasa = 3;
// 			break;
// 		case 9:
// 			klasa = 4;
// 	}
// 	listaUczniow[i].klasa = klasa;

// 	const s = listaUczniow[i].score;
// 	let ocena;
// 	if (s <= 35) {
// 		ocena = 'niedostateczna';
// 	} else if (s <= 50) {
// 		ocena = 'dopuszczajaca';
// 	} else if (s <= 65) {
// 		ocena = 'dostateczna';
// 	} else if (s <= 75) {
// 		ocena = 'dobra';
// 	} else if (s <= 90) {
// 		ocena = 'bardzo dobra';
// 	} else if (s > 90) {
// 		ocena = 'celujaca';
// 	}
// 	listaUczniow[i].ocena = ocena;
// }
// console.log(listaUczniow);

console.log('-----zadanie o uczniach END:----');

function multiply() {
	const val = 2 * 2;
	return val;
	console.log('multiply', val);
}

const result7 = multiply();
const result8 = multiply;
const newResult = result8();
console.log(result7);
console.log(newResult);

// nowa funkcja
function multiply2(x, y) {
	console.log(x, '*', y);
	const val = x * y;
	// console.log('multiply2');
	return val;
}
const result9 = multiply2(4, 20);
console.log(result9);

// nowa funkcja - zadanie - dodawanie

console.log('function for summary 18:30:---');
function summary3(x, y) {
	console.log(x, '+', y);
	const val = x + y;
	// const val = Number(x) + Number(y);
	// console.log('summary3');
	return val;
}
const resultSum = summary3(4, 20);
console.log(resultSum);

function addNumbers(first, second) {
	if (typeof first === 'number' && typeof second === 'number') {
		return first + second;
	} else return 'Wrong arguments';
}

addNumbers(7, 70);

// nowa funkcja add (pominięcie definicji zmiennej w funkcji)
console.log('nowa funkcja add:');
function add(x, y) {
	return x + y;
}

const resultAdd = add(4, 10);
console.log(resultAdd);

// zadanie - kalkulator - przyjmuje parametry, liczba pierwsza i liczba druga
// działanie: add, subtract, multiply, divide, average

// console.log('nowa funkcja kalkulator:');
// function calculate(x1, x2, x3, x4) {
// 	const add = x1 + x2
//     return x1 + x2;
// }

// const resultAdd = add(4, 10);
// console.log(resultAdd);

// function calc(type, first, second) {
// 	let value;
// 	switch (type) {
// 		case 'add':
// 			value = first + second;
// 			break;
// 		case 'min':
// 			value = first - second;
// 			break;
// 		case 'multi':
// 			value = first * second;
// 			break;
// 		case 'divide':
// 			value = first / second;
// 			break;
// 		default:
// 			console.log(
// 				'Give a correct type of calculation: add, min, multi, divide'
// 			);
// 	}
// 	return value;
// }

// console.log(calc('fds', 1, 2));

// function add(x, y) {
// 	const val = x + y;
// 	return val;
// }

// function subtract(x, y) {
// 	const val = x - y;
// 	return val;
// }

// function multiply(x, y) {
// 	const val = x * y;
// 	return val;
// }

// function divide(x, y) {
// 	const val = x / y;
// 	return val;
// }

// function average(x, y) {
// 	let val = x + y;
// 	let val2 = val / 2;
// 	return val2;
// }

// function kalkulator(x, y, z) {
// 	let value;
// 	switch (x) {
// 		case add(y, z):
// 			break;
// 		case subtract(y, z):
// 			break;
// 		case multiply(y, z):
// 			break;
// 		case divide(y, z):
// 			break;
// 		case average(y, z):
// 	}
// }

// function kalkulator(działanie, licz1, licz2) {
// 	let val;
// 	switch (działanie) {
// 		case 'add':
// 			val = licz1 + licz2;
// 			break;
// 		case 'substract': {
// 			val = licz1 - licz2;
// 			break;
// 		}
// 		case 'multiply': {
// 			val = licz1 * licz2;
// 			break;
// 		}
// 		case 'divide;': {
// 			val = licz1 / licz2;
// 			break;
// 		}
// 		case 'average': {
// 			val = (licz1 + licz2) / 0;
// 			break;
// 		}
// 	}
// 	return;
// }

// console.log(kalkulator('add', 2, 5));

// ta jest okej:
// function calculate(x, y, z) {
// 	let val;
// 	switch (x) {
// 		case 'add':
// 			val = y + z;
// 			break;
// 		case 'subtract':
// 			val = y - z;
// 			break;
// 		case 'multiply':
// 			val = y * z;
// 			break;
// 		case 'divide':
// 			val = y / z;
// 			break;
// 		case 'average':
// 			val = (y + z) / 2;
// 	}
// 	return val;
// }
// console.log(calculate('subtract', 5, 2));

// tu jakaś inna
// const addNumberXY = calculate(1, 2);

// function calculate(x, y) {
// 	const add = x + y;
// 	const subtraction = x - y;
// 	const multiplication = x * y;
// 	const splitting = x / y;
// 	const average = (x + y) / 2;
// 	console.log(add, subtraction, multiplication, splitting, average);
// }

// rozwiązanie MH
// const x = parseInt(prompt('Podaj pierwszą liczbę'));
// const y = parseInt(prompt('Podaj drugą liczbę'));

// function calculate(type, x, y) {
// 	let val;
// 	switch (type) {
// 		case 'add':
// 			val = x + y;
// 			break;
// 		case 'sub':
// 			val = x - y;
// 			5;
// 			break;
// 		case 'multi':
// 			val = x * y;
// 			break;
// 		case 'divide':
// 			val = x / y;
// 			val = val.toFixed(2);
// 			break;
// 		case 'aver':
// 			val = (x + y) / 2;
// 			val = val.toFixed(2);
// 			break;
// 		default:
// 			console.log('wynik działania: add, sub, multi, divide, aver');
// 	}
// 	return val;
// }

// console.log('x + y  =', calculate('add', x, y));
// console.log('x - y =', calculate('sub', x, y));
// console.log('x * y =', calculate('multi', x, y));
// console.log('x / y =', calculate('divide', x, y));
// console.log('(x + y)/2 =', calculate('aver', x, y));

// wspólne rozwiązanie
console.log('wspólne rozwiązanie:');

function calculate(op, num1, num2) {
	// console.log(op, num1, num2);
	switch (op) {
		case 'add':
			return add(num1, num2); // return = break
		case 'subtract':
			return subtract(num1, num2);
		case 'multiply':
			return multiply(num1, num2);
	}
}

function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}

const resultI = calculate('multiply', 1, 2);
console.log(resultI);

// czyste funkcje / pure function 20:21:
console.log('czyste funkcje / pure function 20:21:');

// pure function - czyste funkcje
// przy tych samych parametrach daj nam ten sam wynik
// nie mają side effects (operacje, działania, które nie mają wpływu na wynik funkcji)

// funkcja anonimowa - bez nazwy:
console.log(val);
var val = function () {
	console.log('test2');
};

let var1 = '1';

function test() {
	let var2 = '2';
	console.log(var1, 'var1 inside test');
	console.log(var2, 'var2 inside test');
	if (true) {
		var var3 = '3';
		console.log(var1, 'var1 inside if');
		console.log(var2, 'var2 inside test');
		console.log(var3, 'var3 inside test');
	}
	console.log(var3, 'var3 inside test');
}

test();
console.log(var1, 'var1 in global');
// console.log(var2, 'var2 in global');
// console.log(var3, 'var3 in global');

// zakresy fajne: blokowy, funkcyjny i globalny

// IIFE - Immediately Invoked Function Expression

(function () {
	console.log('test IIFE');
})();

//[---31.08.2022 - app7.js - end---]
console.log('[---31.08.2022 - app7.js - end---]');
