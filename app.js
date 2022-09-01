//window.alert("Hello");

//console.log("Mateusz" + "wajche przeloz");

//console.warn("Warning");

//console.error("Error");

//var greeting = "Good Morning";
//var, let, const; var - variable

//const a = "Good";
//a = "Hello"; //musi być usunięte bo const
//a = "Hi"; //musi być usunięte bo const

//console.log(a, "Info");
//console.warn(a, "Warning");
//console.error(a, "Error");
//console.log(a, "Info");
//console.warn(a, "Warning");
//console.error(a, "Error");

//let a = "hi";
//console.log(a, "Info");
//console.warn(a, "Warning");
//console.error(a, "ErrorJohn

//20:15 semantyczne nadawanie nazw zmiennym
let firstName = 'John'; //tzw. Camel case
console.log(firstName);
let first_name = 'Adam'; //tzw. Underscore
console.log(first_name);
let FirstName = 'Simon'; //tzw. Pascal case
console.log(FirstName);
console.log(FirstName);

//20:25 nowy typ danych
console.log('----------20:25 nowy typ danych:--------');
let wiek = 5 + 5;
console.log('Mam lat:', wiek);

let num1 = 1;
let num2 = 1;
console.log('num1+num2=', num1 + num2);

//20:37 typy danych
//typy danych prymitywne/proste:
//- string - tekst (np "Hello World")
// - number (5, 9, 7.25, 3.30, -5)
// - NaN - (not a number)
// - Boolean - true/false, wartość logiczna, prawda lub fałsz
// - undefined
// - null - pusto, chcemy żeby nic nie było
// - symbol - nie używane, ale warto znać

//typy danych złożone:
// - obiekty
// - tablice - listy - array
// - funkcje
// - datę, Date

// dynamiczne typowanie
let a = 6;
let b = '6';
console.log('a=', a);

// type of/ typeof - typ zmiennej, zmienna

console.log('----------type of:--------');
console.log(typeof a, a);
console.log(typeof b, b);

console.log('typeof null:', typeof null);
//console.log(typeof b, b);

// boolean
// true albo false

// porównywanie
// == lub === (są różnice) - == zwraca true or false nieważne, że zmienne są innego typu czyli "2" + 2 będzie true bo sprawdza tylko wartość, === - zwraca uwagę na typ danej, nadal porównując wartość tylko dla tych samych typów
console.log('----------porównywanie----------');
let c = 2;
let d = '2';
console.log('c=', c, typeof c);
console.log('d=', d, typeof d);

console.log('c === d:', c === d);

// != lub !==  (negacja)
let e = '3';
let f = 2;
console.log('e != f: (below)');
console.log(e != f);

// <, <= lub >, >=
let g = 4;
let h = 2;
console.log('g > h: (below)');
console.log(g > h);

//08.08.2022//
console.log('[---08.08.2022 - app.js - end---]');
