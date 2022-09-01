//10.08.2022//
console.log('10.08.2022 - app3.js - start');

// let val = window.prompt('gimme smth');
// console.log(typeof val);
// let rest = '2' % 2;
// console.log(typeof rest); //% zamienia strings na number

// let agez1 = Number(window.prompt('whats ur age fela')); //OK->
// let price1;
// if (agez1 <= 12) {
// 	price1 = 10;
// 	console.log('agez1=', agez1);
// 	console.log('price1= ', price1);
// } else if (agez1 < 18) {
// 	price1 = 15;
// 	console.log('agez1=', agez1);
// 	console.log('price1= ', price1);
// } else if (agez1 < 60) {
// 	price1 = 20;
// 	console.log('agez1=', agez1);
// 	console.log('price1=', price1);
// } else {
// 	price1 = 17;
// 	console.log('agez1=', agez1);
// 	console.log('price1=', price1);
// } //<-OK

// if (agez1 <= 12) {
// 	price1 = 10;
// 	console.log('agez1=', agez1);
// 	console.log('price1= ', price1);
// } else if (agez1 < 18) {
// 	price1 = 15;
// 	console.log('agez1=', agez1);
// 	console.log('price1= ', price1);
// } else if (agez1 < 60) {
// 	price1 = 20;
// 	console.log('agez1=', agez1);
// 	console.log('price1=', price1);
// } else {
// 	if (typeof agez1 === 'number') {
// 		price1 = 17;
// 		console.log('agez1=', agez1);
// 		console.log('price1=', price1);
// 	} else {
// 		console.log('dont do this again');
// 	}
// }  //do poprawy

//19:18//
console.log('19:18, operatory logiczne:');
//operatory logiczne
// && - i
// || - lub

// let firstName1 = 'Matej';
// let lastName1 = 'Jabol';

// const amount = 100;

// if (firstName1 === 'Matej' && lastName1 === 'Jabol') {
// 	alert('Twoj stan konta to: ' + amount);
// } else {
// 	alert('you dont have permmision');
// }

//--------operator i-------------
// let firstName1 = 'Matej';
// let lastName1 = 'Jabol';
// let firstName2 = 'Martynika';
// let lastName2 = 'Nasuro';

// const amount = 100;

// if (
// 	firstName1 === 'Matej' &&
// 	lastName1 === 'Jabol' &&
// 	firstName2 === 'Martynika' &&
// 	lastName2 === 'Nasuro'
// ) {
// 	alert('Twoj stan konta to: ' + amount);
// } else {
// 	alert('you dont have permmision');
// }
//---------operator i------------------

//--------operator lub-------------
// let firstName1 = 'Matej';
// let lastName1 = 'Jabol';
// let firstName2 = 'Martynika';
// let lastName2 = 'Nasuro';

// const amount = 100;

// if (
// 	(firstName1 === 'Matej' && lastName1 === 'Jabol') ||
// 	(firstName2 === 'Martynika' && lastName2 === 'Nasuro')
// ) {
// 	alert('Twoj stan konta to: ' + amount);
// } else {
// 	alert('you dont have permmision');
// }
//---------operator lub------------------

//--------operator lub+-------------
// let firstName1 = 'Matej';
// let lastName1 = 'Jabol';
// let firstName2 = 'Martynika';
// let lastName2 = 'Nasuro';

// const amount = 100;

// if (lastName1 === 'Jabol' || lastName2 === 'Nasuro') {
// 	alert('Twoj stan konta to: ' + amount);
// } else {
// 	alert('you dont have permmision');
// }
//---------operator lub+------------------

//boolean - truue or false
//-------przykład1:
const ageA = 10;
let mature = ageA >= 18; //boolean - true or false
console.log('mature: ', mature); //wyświetla boolean

//------przykład1:
let nameA;
if (nameA) {
	console.log('Hi: ', nameA);
} else {
	console.log('Hi Stranger');
} //sprawdzenie czy jest wartość w nameA (true)
//----------

//truthy wartości:
//string, ale nie pusty
//number - lub + ale nie 0
//true
//tablica

//Falsy wartości
//string pusty
//number 0

//operator negacji
//np: !=, !==; "!" - operator negacji

const ageB = 20;
let mature2 = ageB >= 18; //boolean - true or false
console.log(mature2);
console.log('negacja', !mature2);

if (mature2) {
	console.log('not mature');
} //sprawdzić

//--------operator truthy && falsy-------------

// let valName1 = 0;

// if (valName1) {
// 	console.log('Truthy');
// } else {
// 	console.log('Falsy');
// }
//---------operator truthy && falsy------------------
// let greetingOne = 'hello';
// let name7 = prompt('podaj imie');
// let greetingTwo = name7 || 'human';
// //let greetingTwo = name7 ? name7 : 'human'; //alt.
// let greeting = greetingOne + ' ' + greetingTwo;
// console.log(greeting);
// //console.log('imie to ', name7);
//---------operator truthy && falsy------------------

//template literals
//-------template literals------
//`` (pod ESC)
//wtrącenia zmiennych wewnątrz strings, zamiast + , itd.

//-------template literals------
// console.log('template literals 20:54:');
// let name7 = '';
// let greetingTwo = name7 || 'human';
// let greeting = `hello ${greetingTwo} ty gnoju`;
// console.log(greeting);
//-------template literals------

//-------new lines in strings templateLiterals+------
// console.log('template literals+ 20:59:');

// const animal1 = 'dog';
// const animal2 = 'cat';
// const animal3 = 'cow';
// const list0 =
// 	'<ul><li>' +
// 	animal1 +
// 	'</li><li>' +
// 	animal2 +
// 	'</li><li>' +
// 	animal3 +
// 	'</li></ul>';

// const listA = `
// <ul>
//     <li style='color: red'> ${animal1 + animal2} </li>
//     <li> ${animal2} </li>
//     <li> ${animal3} </li>
// `;

// const htmlTemplate = list0 + listA;
// document.body.innerHTML = htmlTemplate;
//-------new lines in strings templateLiterals+------

//tekst - '' "" ``
//dodawania 't1' + 't2'

//-------tekst 21:15------

console.log('tekst 21:15:');
const noName = 'Matt &&&';
let len = noName.length;
console.log(len);

//-------tekst 21:15------

//-------concat 21:19------
console.log('tekst 21:19:');
const val8 = 'Hello';
const val9 = 'World';
const val10 = ' happy ';
const greeting = val8.concat(val10, val9);
console.log(greeting);
//-------concat 21:19------

//replace
//.replace(a, b) zamienia pierwsze/jedno a
//.replaceAll(a, b) zamienia wszystkie wystąpienia a

//-------replace 21:25------
console.log('replace 21:25:');
const firstName21 = 'Mattx';
let newName21 = firstName21.replace('x', 'ey');
console.log(newName21);
//-------replace 21:25------

//-------replace 21:29------
console.log('replace 21:25:');
const firstName22 = 'Mattx dupa';
let newName22 = firstName22.replace('dupa', 'kupa');
console.log(newName22);
//-------replace 21:29------

//21:35 wyciąganie n-tego znaku
console.log('wyciąga n-tą w kolejności literę/znak ze stringa:');
console.log(firstName22[3]);

//10.08.2022//
console.log('10.08.2022 - app3.js - end');
