//09.08.2022//
console.log('[---09.08.2022 - app2.js - start---]');
console.log('2');

//numer + ' '
console.log('number5 + string10 === string 510?->', 5 + '10' === '510');

//zadanie 1

let secondName = '5';
console.log('secondName:', secondName);
console.log(secondName == 'Alicja');

//zadanie 2

let firstAge = 5;
console.log('firstAge:');
console.log(firstAge <= 18);

//zadanie 3

//let tempVar = 5;
//console.log("tempVar:");
//console.log(tempVar <= 18);

console.log('zadanie3:');

// const userName = window.prompt("whats your name?");
// const lastName = window.prompt("whats your last name?");
// const greeting = "Howdy" + " " + userName + " " + lastName;

// console.log(greeting);

//console.log(userName, lastName); //pomoc

// const age = window.prompt("whats ur age?");

//console.log(typeof age);
//console.log("age:", age, typeof age);
//console.log(age == 5);

//console.log(age + 5);

console.log('19:08');

//let num11 = window.prompt('podaj numer');

//let num21 = window.prompt("podaj nowy numer");

//zmiana pliku z tekstowego na liczbową

//let num11N = Number(num11);
//let num21N = Number(num21);
//let sum = num11N + num21N;
//let sum = Number(num11) + Number(num21); //mniej czytelne

//let num11 = Number(window.prompt("podaj numer"));
//let num21 = Number(window.prompt("podaj nowy numer"));

// let sum = Number(window.prompt("podaj numer")) + Number(window.prompt("podaj nowy numer"));

//console.log(sum);

//19:25 operatory matematyczne
console.log('operatory matematyczne 19:25');

let num31 = 1;
let num41 = 2;

//dodawanie
// let newValue = num31 + num41
// odejmowanie
// let newValue = num31 - num41
// mnożenie
// let newValue = num31 * num41
// dzielenie
// let newValue = num31 / num41
// modulo - reszta z dzielenia
// let newValue = num31 % num41

//let num32 = num31++;
// num31++ - postinkrementacja
// ++num31 - pre inkrementacja
// --num31 - pre inkrementacja

//console.log(++num31);
console.log('++num31=', ++num31);

let str = '1';
//str++ lub +str; //zamiana str w numer
// Number("1")

console.log('str=', str++);

let num51 = parseInt('4.976'); //zaokrąglanie w dół
console.log(num51);
let num52 = parseFloat('4.976'); //bez zaokrąglenia
console.log(num52);

//Math
let num53 = Math.round(4.976); //zaokrąglanie liczb
console.log(num53);
let num54 = Math.ceil(4.006); //zaokrąglenie w górę
console.log(num54);
let num55 = Math.floor(4.006); //zaokrąglenie w dół
console.log(num55);
let num56 = Math.random(); //przypadkowa 0-1
console.log(num56);
let num57 = Math.random() * 17; //przypadkowa 0-1 * 17
console.log(num57);
//zadanie - jak otrzymać random liczbę całkowitą z danego przedziału np liczbę całkowitą z przedziału 20-30

let num58 = Math.min(1, 4, 5, 6, -10); //
console.log(num58);

let num59 = 1.78995; //
let num60 = num59.toFixed(2); //działa jak zakrąglenie.
console.log(num60);

//if
console.log('if 20:43');

let val1 = 5;

if (val1 < 0) {
	console.log(val1, 'jest mniejsze od 0');
} else if (val1 === 0) {
	console.log(val1, 'jest równe 0');
} else {
	console.log(val1, 'jest większe od 0');
}

let oneName = 'Stefek';

if (oneName === 'Matej') {
	console.log('Cześć Matej');
} else if (oneName === 'Matejek') {
	console.log('Cześć Matejek');
} else {
	console.log('Cześć stranger');
}

//else if może być wiele

//zadanie 21:01
console.log('zadanie 21:01:');

// const loggedIn = true;
// const userNew = 'Damien';
// //console.log(loggedIn);

// let message;
// if (loggedIn) {
// 	message = 'hello ' + userNew;
// } else {
// 	message = 'please log in';
// }

// console.log(message);

const loggedIn = false;
const userNew = 'Damien';
//console.log(loggedIn);

let message = loggedIn ? 'Howdy' : 'please log in'; //ternary operator "? :"or conditional operator

// if (loggedIn) {
// 	message = 'hello ' + userNew;
// } else {
// 	message = 'please log in';
// }

console.log(message);

//zadanie 21:16
console.log('zadanie 21:16:');
const x = 45;
const y = 45;

if (x < y) {
	console.log('największa liczba to:', y);
} else if (x > y) {
	console.log('największa liczba to', x);
} else if (x === y) {
	console.log('liczby są równe');
}

//zadanie 21:47 - losowa randomowa liczba z przedziału 20-30
console.log('21:47:');
const min = 20;
const max = 30;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);

// let result = Math.floor(Math.random() * 30 - 20);
// console.log(result); //dok. techn. / specyfikacja

//zadanie 3 - parzysta/nieparzysta
let az3 = 3029484;
if (az3 === 0) {
	console.log('Liczba jest równa 0');
} else if (az3 % 2 === 0) {
	console.log('Parzysta');
} else {
	console.log('Nieparzysta');
}

// let number = Number(window.prompt("Podaj liczbę"));
// if (number === 0) {
//   console.log("Twoja liczba jest równa zeru");
// } else if (number%2===0) {
//   console.log("Twoja liczba jest parzysta");
// } else {
//   console.log("Twoja liczba jest nieparzysta");

//09.08.2022//
console.log('09.08.2022 - app2.js - end');
