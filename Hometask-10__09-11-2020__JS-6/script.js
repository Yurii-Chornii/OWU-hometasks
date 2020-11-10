//
// - создать массив с 20 числами.
// const myArray = [10, 2, 40, 3, 156, -1, 356, 1332, -12, 0, 12, 3, 15, 29, 34, 55, 23, 34, 124, 289]

// -- при помощи метода sort и колбека  отсортировать массив.
// console.log(myArray.sort((a, b) => a - b));

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// console.log(myArray.sort((a, b) => b - a));


// -- при помощи filter получить числа кратные 3
// console.log(myArray.filter(value => !(value % 3)));


// -- при помощи filter получить числа кратные 10
// console.log(myArray.filter(value => !(value % 10)));


// -- перебрать (проитерировать) массив при помощи foreach()
// myArray.forEach((value, index, array) => console.log(value, index, array));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const newArray = myArray.map(value => value *= 3);
// console.log(newArray);


//
// - создать массив со словами на 15-20 элементов.
// const words = ['ABETALIPOPROTEINEMIA', 'Anticholinesterase', 'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'deleniti', 'doloremque', 'illo', 'nam', 'odit', 'necessitatibus', 'Accusamus', 'voluptates'];

// -- отсортировать его по алфавиту в восходящем порядке.
// console.log(words.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(words.sort().reverse());


// -- отфильтровать слова длиной менее 4х символов
// console.log(words.filter(value => value.length < 4));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const newWords = words.map(value => value + '!');
// console.log(newWords);

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => b.age - a.age));


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => b.name.length - a.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUsers = JSON.stringify(users);
// newUsers = JSON.parse(newUsers);
// newUsers.forEach((item, index) => item.id = index + 1);
// console.log(newUsers);

// - відсортувати його за індентифікатором
// console.log(newUsers.sort((a, b) => a.id - b.id));

//
//
// -- написать функцию калькулятора с 2мя числами и колбеком
// function plus2(a, b) {
//     return a + b;
// }
// function minus2(a, b) {
//     return a - b;
// }
// function multiplication2(a, b) {
//     return a * b;
// }
// function division2(a, b) {
//     return a / b;
// }
// function calc2(a, b, action){
//     return action(a, b);
// }
// console.log(calc2(10, 10, plus2));
// console.log(calc2(10, 10, minus2));
// console.log(calc2(10, 10, multiplication2));
// console.log(calc2(10, 10, division2));

// -- написать функцию калькулятора с 3мя числами и колбеком
// function plus3(a, b, c) {
//     return a + b + c;
// }
// function minus3(a, b, c) {
//     return a - b - c;
// }
// function multiplication3(a, b, c) {
//     return a * b * c;
// }
// function division3(a, b, c) {
//     return a / b / c;
// }
// function calc3(a, b, c, action){
//     return action(a, b, c);
// }
// console.log(calc3(10, 10, 10, plus3));
// console.log(calc3(10, 10, 10, minus3));
// console.log(calc3(10, 10, 10, multiplication3));
// console.log(calc3(10, 10, 10, division3));

//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// console.log(cars.filter(value => {
//     if(value.volume > 3) return value;
// }));

// - двигун = 2л
// console.log(cars.filter(value => {
//     if(value.volume === 2) return value;
// }));


// - виробник мерс
// console.log(cars.filter(value => {
//     if(value.producer === 'mercedes') return value;
// }));

// - двигун більше 3х літрів + виробник мерседес
// console.log(cars.filter(value => {
//     if(value.producer === 'mercedes' && value.volume > 3) return value;
// }));

// - двигун більше 3х літрів + виробник субару
// console.log(cars.filter(value => {
//     if(value.producer === 'subaru' && value.volume > 3) return value;
// }));

// - сили більше ніж 300
// console.log(cars.filter(value => {
//     if(value.power > 300) return value;
// }));

// - сили більше ніж 300 + виробник субару
// console.log(cars.filter(value => {
//     if(value.power > 300 && value.producer === 'subaru') return value;
// }));

// - мотор серіі ej
// console.log(cars.filter(value => {
//     if(value.engine.startsWith('ej')) return value;
// }));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(value => {
//     if(value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru') return value;
// }));

// - двигун меньше 3х літрів + виробник мерседес
// console.log(cars.filter(value => {
//     if(value.volume < 3 && value.producer === 'mercedes') return value;
// }));

// - двигун більше 2л + сили більше 250
// console.log(cars.filter(value => {
//     if(value.volume > 2 && value.power > 250) return value;
// }));

// - сили більше 250  + виробник бмв
// console.log(cars.filter(value => {
//     if(value.producer === 'bmw' && value.power > 250) return value;
// }));

//
//
//
// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];
// -- отсортировать его по id пользователей
// console.log(usersWithAddress.sort((a, b) => a.id - b.id));

// -- отсортировать его по id пользователей в обратном опрядке
// console.log(usersWithAddress.sort((a, b) => b.id - a.id));

// -- отсортировать его по возрасту пользователей
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));


// -- отсортировать его по возрасту пользователей в обратном порядке
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));


// -- отсортировать его по имени пользователей
// console.log(usersWithAddress.sort((a, b) => {
//     let nameA = a.name.toLowerCase();
//     let nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
// }));


// -- отсортировать его по имени пользователей в обратном порядке
// console.log(usersWithAddress.sort((a, b) => {
//     let nameA = a.name.toLowerCase();
//     let nameB = b.name.toLowerCase();
//     if (nameA < nameB) return 1;
//     if (nameA > nameB) return -1;
// }));

// -- отсортировать его по названию улицы  в алфавитном порядке
// console.log(usersWithAddress.sort((a, b) => {
//     let streetA = a.address.street.toLowerCase();
//     let streetB = b.address.street.toLowerCase();
//     if (streetA < streetB) return -1;
//     if (streetA > streetB) return 1;
// }));


// -- отсортировать его по номеру дома по возрастанию
// console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));

// -- отфильтровать (оставить) тех кто младше 30
// console.log(usersWithAddress.filter( value => value.age > 30))


// -- отфильтровать (оставить) тех у кого отрицательный статус
// console.log(usersWithAddress.filter(value => !value.status))


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// console.log(usersWithAddress.filter(value => !value.status && value.age < 30));



// -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter(value => value.address.number % 2 === 0))


//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// цю задачку я вже зробив в одній із попередніх домашок!



//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.



// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];
//
// function searchIndex(arr, key){
//     // let min = null;
//     // let max = null;
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === key) {
//     //         min === null ? min = i : max = i;
//     //     }
//     // }
//     //
//     // let str = ``;
//     // return min === null ? -1 : str = `MinIndex = ${min}, MaxIndex = ${max}.`
//
//     return arr.indexOf(key) === -1 ? -1 :  `MinIndex = ${arr.indexOf(key)}, MaxIndex = ${arr.lastIndexOf(key)}.`
//
// }
//
// console.log(searchIndex(arr, 4));
