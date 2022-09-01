//[---30.08.2022 - app6.js - start---]
console.log('[---30.08.2022 - app6.js - start---]');

//obiekty, kolejny typ danych (złożony), obiekt - zbiór danych składający się z par klucz-wartość; Uwaga! do kluczy można przypisać funkcje

const arr61 = [1, 2, 3];
console.log('arr61:', arr61);

const obj = {
	key: 'wartość',
	key2: 10,
	key3: 'test',
	arr62: ['dog1', 'dog2'],
};

console.log(arr61[1]);
console.log(obj['key']);
console.log(obj.key);
console.log(Object.keys(obj));

//destrukturyzacja - sposób na wyciąganie wartości z obiektu

const { key } = obj;
console.log(key);

//---zadanie 17:54---
console.log('---zadanie 17:54---');
//stworzyć obiekt o nazwie person, który ma właściwości: firstName, lastName, animals - tablica

const person = {
	firstName61: 'Matej',
	lastName: 'Jab',
	animals: ['pies', 'pies2'],
};

console.log(Object.keys(person));
console.log(person.firstName61);

const { firstName61, lastName, animals } = person;

const dev = {
	firstName61,
	lastName,
	animals,
	city: {
		cityName: 'Wro',
		postalCode: '90-210',
	},
	district: {
		postalCode2: '66-333',
	},
};
console.log(dev);

console.log('---zadanie END 18:10---');
//---zadanie 17:54---

const { firstName61: devfirstName62, lastName: devlastName62 } = dev;
console.log(devfirstName62, devlastName62);
//console.log(JSON.stringify(dev));
const postalCode = dev.city.postalCode;
const animal = dev.animals[1];
console.log(postalCode);
console.log(animal);

const { city: devCity } = dev;
console.log(devCity);

// UWAGA! zagnieżdżona destrukturyzacja - to do

const postalCode2 = dev.district?.postalCode2 || '00-000';
console.log(postalCode2);

//destrukturyzacja - tablice:
const arr63 = [1, 2, 'test', 7];
const [firstI, ...thirdI] = arr63;
console.log(thirdI);

//...third - rest; wyciąga wszystko za wyjątkiem tego co przed wielokropkiem

//to do list

const todo = [
	{ task: 'zmywanie', done: false },
	{ task: 'nakarmić kota', done: false },
	{ task: 'umyć okna', done: true },
];

console.log(todo[0].task);
todo[0].done = true;
console.log(todo[0]);
console.log(Object.keys(todo[0])[0]);

// todo[3] = { task: 'wyrzucić śmieci', done: false };
const item = { task: 'wyrzucić śmieci', done: false };
item.person = 'Matej';
console.log(item);

let devList = [
	{
		firstName: 'Mateusz',
		experience: 1,
		languages: ['js'],
	},
	{
		firstName: 'George',
		experience: 2,
		languages: ['python'],
	},
	{
		firstName: 'Josh',
		experience: 5,
		languages: ['java'],
	},
	{
		firstName: 'Kate',
		experience: 1,
		languages: ['python'],
	},
	{
		firstName: 'Eric',
		experience: 7,
		languages: ['css'],
	},
];

// dodajemy seniority - które ustawione na podstawie experience

// for (let i = 0; i < devList.length; i++) {
// 	console.log(devList[i].firstName);
// }
// jeśli experience < 1 - intern
// jeśli jest < 3 - junior
// jeśli jest < 6 - regular
// jeśli większe lub równe 6, to senior

// for (let i = 0; i < devList.length; i++) {
// 	devList[i].seniority = '';
// }
// for (let i = 0; i < devList.length; i++) {
// 	const ex = devList[i].experience;
// 	let seniority;

// 	if (ex < 1) {
// 		seniority = 'intern';
// 	} else if (ex < 3) {
// 		seniority = 'junior';
// 	} else if (ex < 6) {
// 		seniority = 'regular';
// 	} else {
// 		seniority = 'senior';
// 	}
// 	console.log(seniority, '<-coder level');
// 	[];
// 	devList[i].seniority = seniority;
// }

// console.log(devList);

let hr = {
	firstName: 'Frania',
	experience: 10,
};

for (let i = 0; i < devList.length; i++) {
	const ex = devList[i].experience;
	let seniority;

	if (ex < 1) {
		seniority = 'intern';
	} else if (ex < 3) {
		seniority = 'junior';
	} else if (ex < 6) {
		seniority = 'regular';
	} else {
		seniority = 'senior';
	}
	console.log(seniority, '<-coder level');
	[];
	devList[i].seniority = seniority;

	// const s = devList[i].seniority;
	// let earnings;

	// if (s === 'intern') {
	// 	earnings = 3000;
	// } else if (s === 'junior') {
	// 	earnings = 5000;
	// } else if (s === 'regular') {
	// 	earnings = 13000;
	// } else {
	// 	earnings = 20000;
	// }
	// console.log(earnings, '<-earnings level');
	// [];
	// devList[i].earnings = earnings;

	let earn;
	switch (seniority) {
		case 'intern':
			earn = 3000;
			break;
		case 'junior':
			earn = 5000;
			break;
		case 'regular':
			earn = 13000;
			break;
		default:
			earn = 20000;
	}
	devList[i].earn = earn;
}
console.log(devList);

// switch - inna funkcja warunkowa

// funkcje - małe programy, dzielą kod na mniejsze
// - blok kodu
// - dzieli program na mniejsze fragmenty
// - możemy wielokrotnie wywoływać
// - pozwala nam na odłożenie kodu w czasie, np funkcja, która wywoła się po naciśnięciu przycisku
// - możemy jej przekazywać wartości
// console.log(wartość), log - funkcja na obiekcie console, (wartość), czasem są funkcje bez wartości

// let val61 = console.log('test'); // nie przypisuje nic do val61
let val61 = Math.max(1, 7, 2); // nie przypisuje nic do val61

console.log(val61);

// funkcja a nazwą (nie anonimowa)
function sayHello() {
	console.log('Hello');
}
// console.log(sayHello);

sayHello();
// "()" - paranthesis

//[---30.08.2022 - app6.js - end---]
console.log('[---30.08.2022 - app6.js - end---]');
