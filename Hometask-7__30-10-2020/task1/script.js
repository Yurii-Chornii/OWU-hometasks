//
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// const dog = {
//     name : 'Deyzi',
//     age : 2,
//     color: 'black',
//     canSitDown : true,
//     owner : 'Igor'
// }
// console.log(dog);


// - людину
// const man = Object.create(null);
// man.name = 'Yura';
// man.age = 22;
// man.surname = 'Chornii';
// man.hasPhone = true;
// man.hasWife = false;
// console.log(man);


// - автомобіль
// const car = {
//     brand : 'Skoda',
//     model : 'Octavia',
//     year : 2012,
//     type : 'universal',
//     color : 'white'
// }

// - квартиру
// const flat = {
//     s : 60,
//     rooms : 2,
//     hasGarage : false,
//     hasBalcony : true,
//     price : 50000
// }

// - книгу
// const book = {
//     pages : 200,
//     name : 'Forbes',
//     since : 1917,
//     motto : 'The Capitalist Tool',
//     city : 'New York'
// }


//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// const dogs = ['Affenpinscher', 'Akita', 'Alaskan Malamute', 'American Hairless Terrier', 'American Leopard Hound'];
// const humans = ['Darin Adler', 'Trip Hawkins', 'Bruce Horn', 'Dan Quine', 'Andy Rubin'];
// const cars = ['BMW X1', 'BMW X2', 'BMW X3', 'BMW X4', 'BMW X5'];
// console.log(dogs, humans, cars);

//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// const house = {
//     rooms : ['living room', 'bedroom', 'kitchen'],
//     parameters : {
//       floors : 2,
//       area : 150
//     },
//     location : 'Lviv',
//     price : 200000,
//     country : 'Ukraine'
// }
// - водій
// const driver = {
//     skills : ['drive', 'drive fast', 'drive very fast'],
//     parameters : {
//         age : 30,
//         name : 'Andrii'
//     },
//     home : 'Lviv',
//     hasWife : true,
//     hasChildren : false
// }

// - іграшку
// const driver = {
//     style : ['Circuit Maze', 'Circuit Maze + Rush Hour', 'Domino Maze'],
//     parameters : {
//         forAge : 5,
//         name : 'ThinkFun Circuit Maze Electric Current Brain Game'
//     },
//     madeIn : 'Lviv',
//     forChildren : true,
//     forAdult : false
// }
// - стіл
// const desk = {
//     style : ['black series', 'white series'],
//     parameters : {
//         color : 'black',
//         name : 'computer desk'
//     },
//     madeIn : 'Germany',
//     forChildren : true,
//     forAdult : false
// }

// - сумка
// const backpack = {
//     style : ['spiderman', 'iron man'],
//     parameters : {
//         forAge : 5,
//         name : 'Backpack'
//     },
//     madeIn : 'Poland',
//     forChildren : true,
//     forAdult : false
// }

//
//
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);

// - статус Максима
// console.log(users[4].status);

// - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);

// - ім'я третього об'єкта
// console.log(users[2].name);

// - вік Олега
// console.log(users[6].age);

// - вік Олі
// console.log(users[3].age);

// - вік + ім'я 5го об'єкта
// console.log(users[4].age, users[4].name);

// - вік + сатус Анни
// console.log(users[5].age, users[5].status);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content.innerText);

// - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = 'bla bla';

// - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = 'lorem ipsum';
// - змініть кожному елементу колір фону на червоний
// let list = document.getElementsByTagName('ul')[0];
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'red';
// list.style.backgroundColor = 'red';
// - змініть кожному елементу колір тексту на синій
// content.style.color = 'blue';
// rules.style.color = 'blue';
// list.style.color = 'blue';
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList)
// - отримати всі елементи з класом fc_rules
// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (const element of fcRules) {
//     element.style.color = 'red';
// }
//
// ====================
// ====================
// ====================
//

