/*Практика. Завдання 1
Створити змінну name з своїм ім’ям і оголосити змінну student і тоді присвоїти студенту своє ім’я*/
var name='Iryna', b='student';
c=b+" "+name;
console.log(c); // student Iryna

/* Практика. Завдання 2*/
console.log(11%2); // 1
console.log(36%3); // 0
console.log("5"+2); // 52
console.log("Hello"+5); // Hello5

/*Яка різниця між ++a і a++ */
var a=5;
console.log (a++); // 5 - Додає, але виводить попереднє значення
console.log (++a); // 7 - Додає і виводить те, що вийшло
//Але, якщо спочатку додати, а потім вивести, різниці немає:
a++;
console.log(a); // 8
++a;
console.log(a); // 9

/*Практика. Завдання 3*/
var a = 6;
var b = 3; 
console.log (a > b); // true
a = 3;
b = 3;
console.log (a == b); //true
a = 3;
b = 6;
console.log (a != b); //true
a=1;
b=''; 
console.log (a === b); //false
// a='B';
// b='A';
console.log('B' > 'A'); //true
console.log('a' > 'Z'); //true
a = false; b = 0;
console.log (a>=b); //true
console.log (('2' === 2) ? 'ok' : 'not'); //not

/*Практика. Завдання 4*/
var a=5;
var b=3;
console.log ((a>b)&&(a===b)); //false

console.log (true && 0 && ("a"<"Z")); //0

console.log ((a>b)||true||("2"==2)||(false=="")); //true

console.log ((a<b)&&(0==false)); //false

console.log (!(2==2)||(true&&"")); //пустий рядок