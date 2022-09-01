//29.08.2022//
console.log('29.08.2022 - app5.js - start');

//---zadanie 1 17:45: ---
console.log('zadanie 1 17:45:');

// const arr11 = [40, 22, 53]; //lista wydatków
// const arr21 = [14, 5, 23, 11, 1, 7, 12, 25, 6, 4, 3, 15]; //lista wpływów

// let sum = 0;

// for (let i = 0; i < arr11.length; i++) {
// 	sum = sum + arr11[i];
// }

// console.log('sum1', sum); //suma to 115

// let sum2 = 0;

// for (let i = 0; i < arr21.length; i++) {
// 	sum2 = sum2 + arr21[i];
// }

// console.log('sum2', sum2); //suma2 to 126

// console.log('sum2-sum1', sum2 - sum); // wynik 11

// if (sum - sum2 > 0) {
// 	alert('wydałeś za dużo kasy, spadaj na drzewo');
// } else {
// 	alert('zarobiłeś $, jesteś bogaty :)');
// }
//---zadanie 1 17:45: ---

//---zadanie 2 18:02: ---
console.log('zadanie 2 18:02:');

// const val = 'A tu mamy mamuta';
// console.log('Badany tekst to: ', val);
// let newval = val.replaceAll('A', 'a');
// console.log('Zmiana dużej litery na małą: ', newval);
// let newValue = newval.replaceAll(' ', '');
// console.log('Zlikwidowanie spacji między wyrazami: ', newValue);
// let valArray = newValue.split('');
// console.log('Zamiana tekstu na tablicę: ', valArray);
// let valArray1 = [...valArray];
// console.log('Stworzenie nowej zmiennej z zawartością poprzedniej: ', valArray1);
// let valArray2 = valArray1.reverse();
// console.log('Odwrócenie kolejności elementów w tablicy: ', valArray2);
// let sumavalArray2 = '';
// let i = 0;
// while (i < valArray2.length) {
// 	sumavalArray2 += valArray2[i];
// 	i++;
// }
// console.log('Zamiana tablicy na tekst: ', sumavalArray2);
// if (newValue == sumavalArray2) {
// 	console.log('Sprawdzenie obu zmiennych. Wynik: to jest pallindrom');
// } else {
// 	console.log('Sprawdzenie obu zmiennych. Wynik: to nie jest pallindrom');
// }
//---zadanie 2 18:02: ---

//---zajęcia właściwe start 18:10: ---
console.log('zajęcia właściwe start 18:10:');

const arr51 = ['t', 'e', 's', 't'];
console.log(arr51.join('_'));

const test51 = 'TeKst';
console.log(test51.toLowerCase());
console.log(test51.toUpperCase());

//break i continue
//continue - przerywanie obecnej iteracji i rozpoczęcie następnej, break - całkowicie przerywa pętle

let i = 0;

// while (i < 5) {
// 	console.log('Hej', i);
// 	if (i == 3) {
// 		console.log('To koniec');
// 		break;
// 	}
// 	i++;
// }
while (i < 5) {
	i++;
	if (i == 3) {
		console.log('To koniec');
		continue;
	}
	console.log('Hej', i);
}

//---zajęcia właściwe start 18:10: ---

//---zadanie grupowe 18:36: ---
console.log('zadanie grupowe 18:36:');
// ZAD1 stworzyć tablicę z liczbami np [1, 2, 3, 4, 5]
// stworzyć następną tablicę i przy pomocy pętli umieścić w niej wynik mnożenia każdego elementu z tablicy1 razy dwa

let arr52 = [1, 2, 3, 4, 5];
let arr53 = [];

for (let i = 0; i < arr52.length; i++) {
	arr53[i] = arr52[i] * 2;
}

console.log('arr52=', arr52);
console.log('arr53 (arr52 x2)=', arr53);

//alternatywne rozwiązanie:
// const array1 = [1, 2, 3, 4, 5];
// let array2 = [];

// console.log(array1);
// console.log(array2);

// let i = 0;
// while (i < array1.length) {
// 	array2.push(array1[i] * 2);
// 	i++;
// }

// console.log(array2);
//alternatywne rozwiązanie:

//alternatywne rozwiązanie:
// let array = [1, 3, 8, 12, 5];
// let array2 = [];

// for (let index = 0; index < array.length; index++) {
// 	array2[index] = array[index] * 2;
// }
// console.log(array2);
//alternatywne rozwiązanie:

// ZAD2 stworzyć tablicę z liczbami np [1, 2, 3, 0, 4, 5] i przy pomocy pętli sprawdzić czy tablica zawiera 0. Jeśli tak to wypisz w konsoli 'zawiera 0' i przerwij pętlę. Jeli nie, to wypisz, że nie zawiera

let arr54 = [1, 2, 3, 0, 4, 5];

for (let i = 0; i < arr54.length; i++) {
	if (arr54[i] === 0) {
		console.log('Zawiera 0');
		break;
	} else if (i === arr54.length - 1) {
		console.log('Nie zawiera 0');
	}
}

//alternatywne rozwiązanie:
console.log('alternatywne rozwiązanie zad2/1:');
const arr56 = [1, 2, 3, 10, 0];
//console.log(arr56.includes(0));
for (let i = 0; i < arr56.length; i++) {
	if (arr56[i] === 0) {
		console.log('Mamy zero');
		break;
	} else if (i === arr56.length - 1) {
		console.log('w całej tablicy nie ma zera');
	}
	console.log(i);
}

//alternatywne rozwiązanie:
let arr57 = [1, 2, 3, 4, 29, 0];
let hasZero = false;
for (let i = 0; i < arr57.length; i++) {
	if (arr57[i] === 0) {
		console.log('Mamy zero');
		hasZero = true;
		break;
	}
}

if (!hasZero) {
	console.log('Nie ma zera');
}

//alternatywne rozwiązanie:

//alternatywne rozwiązanie:

//---zadanie grupowe 18:36: ---

let arr55 = [1, 2, 3, 4];
arr55[0] = 29;

console.log('arr55=', arr55);

//zakresy
// zakres zmiennej to obszar w którym mamy dostęp do tej zmiennej
//zakres - scope:
//- globalny
//- funkcyjny - lexical scope
//- blokowy - for lub if - najmniejszy

//hoisting - windowanie, przeniesienie deklaracji zmiennej na górę zakresu funkcyjnego albo globalnego, jeśli używamy var

console.log(num);
var num;
num = 1;

//---brudnopis po zajęciach 16:56: ---
console.log('---brudnopis po zajęciach 16:56:---');
var first_name1 = 'Lucy';
var middle_name1 = ' Turnbull';
var second_name1 = ' Cooper';
console.log(first_name1.concat(middle_name1, second_name1));
//---brudnopis po zajęciach 16:56: ---

//[---29.08.2022 - app5.js - end---]
console.log('[---29.08.2022 - app5.js - end---]');
