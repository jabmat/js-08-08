//11.08.2022//
console.log('11.08.2022 - app4.js - start');

//------zadanie--------
// let score = Number(prompt('Whats ur score M8? Dont be shy'));
// let review;

// if (score <= 30) {
// 	review = 'niedostateczny';
// } else if (score > 30 && score <= 55) {
// 	review = 'dopuszczający';
// } else if (score > 55 && score <= 75) {
// 	review = 'dostateczny';
// } else if (score > 75 && score <= 90) {
// 	review = 'bardzo dobra';
// } else if (score > 90 && score <= 100) {
// 	review = 'celująca';
// } else if (score != 'number') {
// 	console.log('type of score:', typeof score, score);
// 	console.log('cmon; give me ur score!');
// 	review = 'couldnt give review, cause there is no score or score is above 100';
// }

// console.log(`Twoja ocena to: ${review}`);
//------zadanie--------

//18:11 wyciąganie n-tego znaku
console.log('18:11 wyciąga n-tą w kolejności literę/znak ze stringa - cd:');
const exampleCon = 'abcdefgh';
console.log(`wyciąganie jednej z ${exampleCon}: `, exampleCon[0]);
console.log(`wyciąganie substring z ${exampleCon}: `, exampleCon.substring(-1));
console.log(`wyciąganie splice z ${exampleCon}: `, exampleCon.slice(-1));

//rozdzielenie tekstu, wyliczanie
let list = exampleCon.split('');
console.log(list);

//tablice (array) - []
console.log('tablice, array:');
const array = ['string', 3, true, 'ostatni'];
console.log(array);
//dł. tablicy: array.length
console.log('array.length:');
console.log(array.length);

//wyciąganie elementów: array[i]
console.log('array[i]:');
console.log(array[3]);
//wyciąganie elementów: array[i]
const aLength = array.length;
console.log('aLength: ', aLength);
console.log('array[i] ostatni aLength-1:');
console.log(array[aLength - 1]);
console.log('array[i] ostatni slice-1:');
console.log(array.slice(-1));

//ostatni element
// let i = 2;
// console.log('array[i=2 czyli 3 pozycja]: ', array[i]);

//doawanie do tablicy
// .push(), unshift()
array.push('push element');
console.log(array);
array.unshift('unshift element');
console.log(array);

//podmiana
console.log('podmiana unshift element bo na indeksie 0: ');
array[0] = 'podmiana';
console.log(array);
//nie działa
let tekst = 'tekst';
tekst[0] = 'x';
console.log(tekst);

//podmiana cd
console.log('0 z 0: ');
console.log(array[0][0]);
//console.log(array[0].replace[7]); //sprawdzić replace

let array2 = ['string', 3, true, 'ostatni'];
array2[array2.length] = 'kwiatek'; //dodał na ostatnim, bo na miejscu nr 4 (length=4)
console.log(array2);

//usuwanie elementów
//.pop(), .shift()
console.log('18:48 usuwanie elementów: ');
array2.pop(); //usuwa ostatni
console.log(array2);
array2.shift(); //usuwa pierwszy
console.log(array2);

//zadanie  19:03
//---------zadanie 19:03------------
console.log('19:03 zadanie: ');
//poprawić [poniedziałek, poniedziałek, wtorek, wtorek, czwartek, piątek, sobota]

//---------zadanie 19:03------------
let array3 = [
	'poniedziałek',
	'poniedziałek',
	'wtoek',
	'wtorek',
	'czwartek',
	'piątek',
	'sobota',
];
console.log(array3);

array3.shift();
console.log(array3);
array3[1] = 'wtorek';
console.log(array3);
array3[2] = 'środa';
console.log(array3);
array3[6] = 'niedziela';
console.log(array3);
//---------zadanie 19:03------------

//splice
let array4 = ['A-pierwszy', 'B', 'C', 'D-ostatni'];
let deleted = array4.splice(0, 1, 'nowy element', 'kot', 'test');
console.log(array4);

//trudne const & let  19:47
//---------trudne const & let 19:47------------
console.log('19:47 trudne: ');

// const tekst2 = 'test';
// tekst2 = 'test 2';
//przypisujemy referencje

//można modyfikować
// const arr = [1, 2, 3];
// arr[0] = 'x';
// console.log(arr);

//nie można zamieniać w całości
// const arr = [1, 2, 3];
// arr.push('new element');
// arr = [1, 2, 3];
// console.log(arr);

// const arr = [1, 2, 3];
// const arr2 = arr;
// console.log(arr2);

//-----------
// const arr = [1, 2, 3];
// const arr2 = arr;
// arr2.push('4'); //4 dodaje nam się do tablicy
// console.log(arr2);
// console.log(arr); //uwaga! arr i arr2 przechowują adresy do tej samej tablicy w pamięci heap
// //-----------

//spread ... - demo - nieprawidłowe przypisanie tej samej tablicy
// const arr = [1, 2, 3]; //ad123
// const arr3 = [arr]; //nowy adres ad124 kierujący do zmiennej arr, czyli do adresu ad123 czyli tej samej tablicy
// arr3[0].push(4);
// console.log(arr);
// console.log(arr3);
// console.log(arr3[0]);
//spread ... - demo - nieprawidłowe przypisanie tej samej tablicy

//spread ... - wyciąga wszystkie elementy z tablicy
// const arr = [1, 2, 3]; //ad123
// const arr3 = [...arr]; //nowy adre ad124 z nową tablicą o zawartości tablicy arr
// arr3.push(4);
// console.log(arr);
// console.log(arr3);
// console.log(arr3[0]);
//spread ... - wyciąga wszystkie elementy z tablicy

//spread ... - wyciąga wszystkie elementy z tablicy+
const arr = [1, 2, 3, 4, 5, 'tekst']; //ad123
const arr2 = ['a, b, c']; //ad124
const arr3 = [...arr, ...arr2]; //nowy adres ad125 z nową tablicą o zawartości połączonych tablic ad123 i ad124
arr3.push(4);
console.log(arr);
console.log(arr3);
console.log(arr3[0]);
//spread ... - wyciąga wszystkie elementy z tablicy+

//pętle
//------pętle 21:01
console.log('pętle 21:01:');
//if  - jeśli coś to

//while - jak długo, tak długo jak - to
//--------------------
// let firstName7 = 'Oliwia';
// let i7 = 0;
// while (firstName7 == 'Oliwia') {
//     if (i7 == 3) {
//         firstName7 = 'Agata';
// 	}

//     console.log(`Hi ${firstName7}`);
//     ++i;
// }
//--------------------

//--------------------
// let firstName7 = 'Oliwia';
// let i7 = 0;
// if (firstName7 == 'Oliwia') {
// 	if (i7 == 3) {
// 		firstName7 = 'Agata';
// 	}

// 	console.log(`Hi ${firstName7}`);
// 	++i7;
// }
//--------------------

//-------------------------
const arr8 = [29, 30, 1, 90]; //dł. 4
let sumS = 0;
let iS = 0;

while (iS < arr8.length) {
	//sumS = sumS + arr8[iS];
	sumS += arr8[iS];
	console.log(arr8[iS]);
	++iS;
}

//-------------------------

//-------------------------
// let i8 = 0;
// while (i8 < 5) {
// 	console.log('1', i8);
// 	i8++;
// }
// let x1 = 0;
// while (x1 < 5) {
// 	console.log('x', x1);
// 	++x1;
// }
// console.log('outside', i8);
// console.log('outside', x1);

//-------------------------

//11.08.2022//
console.log('11.08.2022 - app4.js - end');
