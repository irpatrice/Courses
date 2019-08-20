//Додавати елементи в масив через метод prompt(), поки користувач не натисне 'cancel'

var MyVar = [];
// var tmp = 0;
for(var i=0; true; i++){
  var tmp = prompt("", "");
  if (tmp == null){
      break;
      } else {
      MyVar.push(tmp);
  }
} 
console.log (MyVar);  //done

// Знайти суму елементів двовимірного масиву
var Arr=[
    [2, 9],
    [3, 1],
    [4, 6]
]
var sum=0;
for (i=0; i<Arr.length; i++) {
    for (j=0; j<Arr[i].length; j++) {
        sum+=Arr[i][j];
    }
}
console.log (sum); //done


//Розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова довжиною більше 5  
var lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do";
var arrlor = lorem.split (' ').filter(function(elem){
    return elem.length>5
});
console.log (arrlor); // ["consectetur", "adipiscing"]


//Дано масив [1, 9, 22, 7, 6] додати число 8 після 22
var arr = [1, 9, 22, 7, 6];
arr.splice (3, 0, 8);       
console.log (arr); // [1, 9, 22, 8, 7, 6]


//Написати функцію randomNumber(number) яка наповнює масив випадковими числами від 0 до 100,
// де number -довжина масиву
//Math.floor (Math.random()*(max-min+1))+min; // формула випадкового числа

function randomNumber (number, max) {
    return Array.apply(null, Array(number)).map (function(){
        return Math.round(Math.random()*max);
    });
}
console.log (randomNumber (5, 100)); //done

//Практичне завдання
//Перевірити чи в масивові є число, яке вводиться через prompt()

var Arr1=[3,5,7,1,8];
var result=prompt("Write a number from 1 to 10", "");
for (i=0; i<Arr1.length; i++) {
 if (result == Arr1[i]) {
     console.log ("yes");
 } else {
     console.log ("no");
 }
} //done


// Практичне завдання
//За допомогою методу forEach знайти найдовше слово в строці lorem
function maxWord (lorem) {
    var lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do";
    var str=lorem.split(" ");
    var max=0;
    var word=null;
    for (i=0; i<str.length-1; i++) {
        if (max<str[i].length) {
            max=str[i].length;
            word=str[i];
        }
    }
    return word;
}
console.log (maxWord()); // consectetur

//Практичне завдання
//За допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];
var numb=[8,6,12,10];
var newNumb=numb.map(function (elem) {
    return elem**2;
})
console.log (newNumb); // [64, 36, 144, 100]
