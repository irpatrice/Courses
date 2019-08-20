/* 1. написати функцію randomNumber(number), яка наповнює масив випадковими числами від -100 до 100, де number - довжина масиву
1a. через filter вивести масив з числами, які більші 10 */
var arr_of_random_numbers = [];
function randomNumber (number){
    for (var i=0; i<number; i++){
        var random= Math.floor (Math.random()*(100-(-100)+1)+(-100));
        arr_of_random_numbers.push(random);
    } var arr = arr_of_random_numbers.filter (function (item){
        return item>10;
    })
    return arr;
}
console.log(randomNumber(10));

/* 2. Відсортувати строку lorem по зростанню(по довжині)
- Перетворити строку на масив
- відсортувати масив 
- з'єднати назад в строку */

var lorem=document.querySelector(".lorem").innerHTML;
console.log(lorem); //Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius quas, temporibus, soluta, odio cum reiciendis dignissimos natus voluptatem ducimus possimus vero debitis minus. Quod, minus. Laudantium praesentium earum amet!

var arr_lorem=lorem.split(" "); 
console.log(arr_lorem); //["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Fugit", "eius", "quas,", "temporibus,", "soluta,", "odio", "cum", "reiciendis", "dignissimos", "natus", "voluptatem", "ducimus", "possimus", "vero", "debitis", "minus.", "Quod,", "minus.", "Laudantium", "praesentium", "earum", "amet!"]

function compare_length (a,b) {
    if (a.length<b.length){
        return -1;
    } if (a.length>b.length)
    return 1;
}
arr_lorem.sort(compare_length);
console.log (arr_lorem); //["sit", "cum", "amet", "eius", "odio", "vero", "Lorem", "ipsum", "dolor", "elit.", "Fugit", "quas,", "natus", "Quod,", "earum", "amet!", "minus.", "minus.", "soluta,", "ducimus", "debitis", "possimus", "reiciendis", "voluptatem", "Laudantium", "consectetur", "adipisicing", "temporibus,", "dignissimos", "praesentium"]

var lorem2 = arr_lorem.join(" ");
console.log (lorem2); //"sit cum amet eius odio vero Lorem ipsum dolor elit. Fugit quas, natus Quod, earum amet! minus. minus. soluta, ducimus debitis possimus reiciendis voluptatem Laudantium consectetur adipisicing temporibus, dignissimos praesentium"

/* 4. використовуючи lodash, повернути масив з унікальних елементів масиву [1, 2, 1, 4, 1, 3] */
console.log (_.uniq([1, 2, 1, 4, 1, 3])); //[1, 2, 4, 3] - просто виводить

var arr = [1, 2, 1, 4, 1, 3];
var uniqArr = _.uniq(arr);
console.log(uniqArr); //[1, 2, 4, 3] - виводить через іншу змінну

