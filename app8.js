//[---01.09.2022 - app8.js - start---]
console.log('[---01.09.2022 - app8.js - start---]');
// zadanie z poprzednich zajęć 17:30:
console.log('zadanie z poprzednich zajęć 17:30:');
const listaUczniow = [
	{ firstName: 'Peter', age: 6, score: 34 },
	{ firstName: 'Pit', age: 7, score: 49 },
	{ firstName: 'Paul', age: 8, score: 64 },
	{ firstName: 'Pier', age: 9, score: 91 },
];

for (let i = 0; i < listaUczniow.length; i++) {
	const a = listaUczniow[i].age;
	const s = listaUczniow[i].score;
	listaUczniow[i].klasa = getClass(a);
	listaUczniow[i].ocena = getMark(s);
}

// function getClass(a) {
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
// 	return klasa;
// }

function getClass(a) {
	switch (a) {
		case 6:
			return 1;
		case 7:
			return 2;
		case 8:
			return 3;
		case 9:
			return 4;
	}
	return klasa;
}

function getMark(s) {
	let ocena;
	if (s <= 35) {
		ocena = 'niedostateczna';
	} else if (s <= 50) {
		ocena = 'dopuszczajaca';
	} else if (s <= 65) {
		ocena = 'dostateczna';
	} else if (s <= 75) {
		ocena = 'dobra';
	} else if (s <= 90) {
		ocena = 'bardzo dobra';
	} else if (s > 90) {
		ocena = 'celujaca';
	}
	return ocena;
}

console.log(listaUczniow);

// funkcje strzałkowe 17:52:
console.log('funkcje strzałkowe 17:52:');
// funkcje strzałkowe
// function getGreeting(firstName) {
// 	return `Hello ${firstName}`;
// }

const greetinG = function (firstName) {
	return `Hello ${firstName}`;
};

// const getGreeting = (firstName) => {
// 	return `Hello ${firstName}`;
// };

// const getGreeting2 = (firstName) => `Hello ${firstName}`;

// function getGreeting(firstName = 'Nieznajomy') {
// 	return `Hello ${firstName}`;
// }

// const firstName = prompt('prosze podać imie:');
// console.log(getGreeting('Oliwia'));

// ---
// function getGreeting(firstName = 'Nieznajomy') {
// 	return `Hello ${firstName}`;
// }
// console.log(getGreeting('Oliwia'));

// const getGreeting2 = (firstName) => `Hello ${firstName}`;
// console.log(getGreeting('Oliwia'));

// ----
// const userType = prompt('enter user type');

// if (userType === 'f') {
// 	initUser(showFriendGreeting);
// } else if (userType === 't') {
// 	initUser(showTeacherGreeting);
// }

// function initUser(showGreet) {
// 	const name = prompt('Please, enter Your name.');
// 	showGreet(name);
// }

// function showTeacherGreeting() {
// 	console.log(`Hello, teacher ${name}`);
// }

// function showFriendGreeting(name) {
// 	alert(`Hello, my friend ${name}`);
// }
// ---

// initUser(showUserGreeting);

// funkcja wyższego rzędu - za argument przyjmuje inną funkcję

// for each
// ------
// const arr81 = [1, 2, 3, 4];
// // for (let i = 0; i < arr81.length; i++) { //
// // 	arr81[i] += 1; //
// // }
// arr81.forEach((element) => (element += 1));
// console.log(arr81);
// ------

// ------
// const array11 = ['a', 'b', 'c'];
// for (let i = 0; i < array11.length; i++) {
// 	console.log(array11[i]);
// }
// const callback = (element) => console.log('inside', element);
// array11.forEach((element) => console.log('inside', element));
// ------

// ------
const arr82 = [1, 2, 3];
// ------

// ------
let newArr = [];
for (let i = 0; i < arr82.length; i++) {
	newArr.push(arr82[i] * 2);
}
console.log(newArr);
// ------

// nowa funkcja wyższego rzędu - map
// map - zwraca nam nową tablicę

// ------
const newArr1 = arr82.map((x) => x * 2);
console.log('from map', newArr1);
// ------

// kolejna funkcja wyższego rzędu - find + filter
// filter - zwraca wszystkie gdzie spełniony jest warunek
// ------
console.log('find + filter:');
const devList8 = [
	{ firstName: 'Matt', languages: ['js'], seniority: 'junior' },
	{ firstName: 'Franz', languages: ['python'], seniority: 'junior' },
	{ firstName: 'Matt', languages: ['js', 'java'], seniority: 'junior' },
];

const dev8 = devList8.find((dev) => dev.firstName === 'Matt');
console.log('found dev', dev8);
// ------

// filter

// ------
const devs = devList8.filter((dev) => dev.firstName === 'Matt');
console.log('Matts list', devs);
// ------
// includes
console.log('includes:');
// ------
const arrI = ['a', 'b', 'c'];
console.log(arrI.includes('a'));

const isJunior = (dev) => dev.seniority === 'junior';
const includesFranz = devList8.some(isJunior);
console.log(includesFranz);
// ------

// every - funkcja
// ------
const onlyJunior = devList8.every(isJunior);
console.log(onlyJunior);
// ------

// for each obiektowe
console.log('for each obiektowe:');
let arr83 = [1, 2, 3, 4];
let sum8 = 0;

arr83.forEach((num) => (sum8 += num)); // sum1 = sum1 + num = sum1 += num
console.log('sum8 = ', sum8);

// programowanie obiektowe
console.log('programowanie obiektowe:');

const firstName1 = 'george'; // dla zmyłki żeby powiązać ze zmienną person8
// const person8 = {
// 	firstName1: 'Matt',
// 	age: 34,
// 	sayHello8: function (greeting) {
// 		console.log('Hi', this.firstName1, this);
// 	},
// };
// person8.sayHello8();

// function hi8() {
// 	console.log('hi');
// }
// hi8();
// const hello8 = hi8;
// hello8();

// const personHello8 = person8.sayHello8;
// const personHello8 = person8.sayHello8.bind(person8); //prawidłowe
// const person2 = {
// 	firstName1: 'Franeczek',
// };

// const personHello8 = person8.sayHello8.bind(person2);
// personHello8();

// person8.sayHello8();
// person8.sayHello8.call(person2);
// person8.sayHello8('Hello');
// person8.sayHello8.apply(person2, ['Hi']);
// bind, call, apply

// -------
// const person8 = {
// 	firstName1: 'Matt8',
// 	age: 34,
// 	sayHello8: function () {
// 		const test8 = () => {
// 			console.log(this);
// 		};
// 		test8();
// 		console.log(this.firstName1, this);
// 	},
// };

// person8.sayHello8();
// const test9 = person8.sayHello8;
// test9();
// -------

// klasy
console.log('-------------');
console.log('klasy 20:48:');

// let devList9 = [
// 	createDev('Matt', 5, ['js']),
// 	createDev('Matt2', 10, ['js2']),
// 	createDev('Matt3', 15, ['js3']),
// 	createDev('Matt4', 20, ['js4']),
// ];

// function createDev(firstName, experience, languages) {
// 	return {
// 		firstName,
// 		experience,
// 		languages,
// 	};
// }

// let devList9 = [
// 	createDev('Matt', 5, ['js']),
// 	createDev('Matt2', 10, ['js2']),
// 	createDev('Matt3', 15, ['js3']),
// 	createDev('Matt4', 20, ['js4']),
// ];

// function createDev(firstName, experience, languages) {
// 	return {
// 		firstName,
// 		experience,
// 		languages,
// 	};
// }

// const dev1 = createDev('Matt', 5, ['js']);
// console.log(dev1);

// class Dev {
// 	constructor(firstName, experience, languages) {
// 		this.firstName = firstName;
// 		this.experience = experience;
// 		this.languages = languages;
// 		// odpala się przy tworzeniu instancji
// 		console.log(firstName);
// 	}
// 	sayHello() {
// 		console.log(this, firstName, this);
// 	}
// }

// const dev10 = new Dev('Matt10', 5, ['js']);
// dev10.sayHello();

class Product {
	constructor(type, price) {
		console.log(3);
		this.type = type;
		this.price = price;
	}
	displayType() {
		console.log(this.type);
	}
}

const mug = new Product('mug', 10);
mug.displayType();

class Book extends Product {
	constructor(author, type, price) {
		console.log(1);
		super(type, price);
		console.log(2);
		this.author = author;
	}
	displayAuthor() {
		console.log(this.author);
	}
}

const book1 = new Book('M.Jablonski', 'book', 30);
// book1.displayType();
console.log(book1);

let arr77 = [1, 2];
console.log(arr77);

// asynchroniczność

//[---01.09.2022 - app8.js - end---]
console.log('[---01.09.2022 - app8.js - end---]');
