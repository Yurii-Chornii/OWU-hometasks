// // - створити функцію яка виводить масив
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// function showArray(arr){
//     console.log(arr);
// }
// showArray(arr1);


// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let randomArr = [];
// function fillRandomAndShow(arr) {
//     for (let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random()*100));
//     }
//     showArray(arr);
// }
// fillRandomAndShow(randomArr);

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function returnMinValue(one, two, three){
//     let result = Math.min(one, two, three);
//     console.log(result);
//     return result
// }
// returnMinValue(10, 5, 15);

// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function returnMaxValue(one, two, three){
//     let result = Math.max(one, two, three);
//     console.log(result);
//     return result
// }
// returnMaxValue(10, 5, 15);

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinShowMax(){
//     console.log(arguments);
//     let args = [];
//     for (let i = 0; i < arguments.length; i++){
//         args.push(arguments[i]);
//     }
//     console.log(Math.max(...args));
//     return Math.min(...args);
// }
// console.log(returnMinShowMax(10, 2, 3, 4, 5, 6, 7, 10, 50, 15, 30));


// // - створити функцію яка виводить масив
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// function showArray(arr){
//     console.log(arr);
// }
// showArray(arr1);


// // - створити функцію яка повертає найбільше число з масиву
// let arr3 = [10, 30, 22, 45, 2];
// function retMaxValue(array) {
//     let maxValue = 'чисел не знайдено(';
//     for (let i = 0; i<array.length; i++) {
//          if (typeof array[i] === "number") maxValue = array[i];
//     }
//     for (let i = 0; i<array.length; i++){
//         if (maxValue < array[i]) maxValue = array[i];
//     }
//     return maxValue;
// }
// console.log(retMaxValue(arr3));

// // - створити функцію яка повертає найменьше число з масиву
// let arr3 = [10, 30, 22, 45, 2];
// function retMaxValue(array) {
//     let maxValue = 'чисел не знайдено(';
//     for (let i = 0; i<array.length; i++) {
//         if (typeof array[i] === "number"){
//             maxValue = array[i];
//         }
//     }
//     for (let i = 0; i<array.length; i++){
//         if (maxValue > array[i]) maxValue = array[i];
//     }
//     return maxValue;
// }
// console.log(retMaxValue(arr3));

// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr5 = [10, 30, 22, 45, 2];
// function sum(array){
//     let result = 0;
//     for (const elem of array) {
//         result += elem;
//     }
//     return result;
// }
// console.log(sum(arr5));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr6 = [10, 30, 22, 45, 2];
// function sumMiddle(array){
//     let result = 0;
//     for (const elem of array) {
//         result += elem;
//     }
//     result = result / array.length;
//     return result;
// }
// console.log(sumMiddle(arr6));


// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arr7 = [{name: 'yura', age: 25}, {age: 22}, {location: 'lviv', wife: false}, {wife: true}, 787, 'bla bla', [12,2]];
// function arrLength(arr){
//     let result = 0;
//     for (const element of arr) {
//         if (typeof element === 'object' && !Array.isArray(element)){
//             result++;
//         }
//     }
//     return result
// }
// console.log(arrLength(arr7));

// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let arr8 = [{name: 'yura', age: 25}, {age: 22}, {location: 'lviv', wife: false}, {wife: true, location: 'lviv'}, 7, 'htll'];
// function objKeysCount(arr){
//     let result = 0;
//     for (const obj of arr) {
//         if (typeof obj === 'object'){
//             result += Object.keys(obj).length;
//         }
//
//     }
//     return result;
// }
// console.log(objKeysCount(arr8));


// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// //     [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]
// const arrOne = [1, 2, 3, 4];
// const arrTwo = [2, 3, 4, 5];
// function summ(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i])
//     }
//     return result;
// }
// console.log(summ(arrOne, arrTwo));


// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr10 = [10,20,30,40,50,60,70];
// let position = 3;
// function replaceElem(arr, i){
//     let arrItem = arr[i];
//     let arrItem2 = arr[i+1];
//     arr[i] = arrItem2;
//     arr[i+1] = arrItem;
//     return arr;
//
// }
// console.log(replaceElem(arr10, position));


// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
//
// let myArray = [0,0,1,0,0,0,0,0,1,0,0,0];
// function sortZero(arr) {
//     let i = 0;
//     while (i < myArray.length){
//         if (myArray.indexOf(0) !== -1){
//             let zero = myArray.splice(myArray.indexOf(0), 1);
//             myArray.push(zero[0]);
//         }
//         i++
//     }
//     return arr;
// }
// console.log(sortZero(myArray));


//
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
//
// function sayHelloInBody(){
//     document.write('Hello OWU <br>');
// }
// sayHelloInBody();


// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// const element = 'h1';
// const text = 'Lorem ipsum dolor sit amet';
// function addText(elem, text){
//     document.body.innerHTML += `<${elem}>${text}</${elem}>`;
// }
// addText(element, text);
// addText('p', text);
// addText('span', text);


// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let cars = [
//     {model: 'BMW', power: 131, inSale: false},
//     {model: 'Audi', power: 230, inSale: true},
//     {model: 'VW', power: 159, inSale: true},
//     {model: 'Seat', power: 128, inSale: false},
//     {model: 'Skoda', power: 150, inSale: true},
//     {model: 'Ford', power: 111, inSale: false},
//     {model: 'Peugeot', power: 198, inSale: false}
// ];
// const box = document.getElementById('box');
// function createOwnBlock(arr, elem){
//     for (const car of arr) {
//         const ownBlock = document.createElement('div');
//         ownBlock.innerHTML += `<p>Model: ${car.model}</p><p>Power: ${car.power}</p><p>Is it in sale? ${car.inSale}</p><hr>`
//         elem.appendChild(ownBlock);
//     }
// }
// createOwnBlock(cars, box);


// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
// let cars1 = [
//     {model: 'BMW', power: 131, inSale: false},
//     {model: 'Audi', power: 230, inSale: true},
//     {model: 'VW', power: 159, inSale: true},
//     {model: 'Seat', power: 128, inSale: false},
//     {model: 'Skoda', power: 150, inSale: true},
//     {model: 'Ford', power: 111, inSale: false},
//     {model: 'Peugeot', power: 198, inSale: false}
// ];
// const box1 = document.getElementById('box');
// function createOwnBlock(arr, elem){
//     for (const car of arr) {
//         const ownBlock = document.createElement('div');
//         const modelBlock = document.createElement('div');
//         const powerBlock = document.createElement('div');
//         const inSaleBlock = document.createElement('div');
//         modelBlock.innerHTML += `Model: ${car.model}`;
//         powerBlock.innerHTML += `Power: ${car.power}`;
//         inSaleBlock.innerHTML += `Is it in sale? ${car.inSale}`;
//         ownBlock.appendChild(modelBlock);
//         ownBlock.appendChild(powerBlock);
//         ownBlock.appendChild(inSaleBlock);
//         ownBlock.innerHTML += "<hr>";
//         elem.appendChild(ownBlock);
//     }
// }
// createOwnBlock(cars1, box1);


//
// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
// //             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// //           let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
// //
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false}];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}];
//
// function mergeObjects(usersArr, citiesArr){
//     let usersWithCities = [];
//     for (let i = 0; i < usersArr.length; i++) {
//         usersWithCities[i] = usersArr[i];
//         for (const cityObj of citiesArr) {
//             if (cityObj.user_id === usersWithCities[i].id){
//                 usersWithCities[i].address = cityObj;
//             }
//         }
//
//     }
//     return usersWithCities;
// }
// console.log(mergeObjects(usersWithId, citiesWithId));


//
//
// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// function createBlocks(rulesArr) {
//     const wrapper = document.createElement('div');
//     wrapper.setAttribute('id', 'wrap');
//     for (let i = 0; i < rulesArr.length; i++) {
//         const ruleBox = document.createElement('div');
//         ruleBox.setAttribute('class', `rules rule${i+1}`);
//         const titleBox = document.createElement('h2');
//         titleBox.innerHTML += rulesArr[i].title;
//         ruleBox.appendChild(titleBox);
//         const bodyBox = document.createElement('p');
//         bodyBox.innerHTML += rulesArr[i].body;
//         ruleBox.appendChild(bodyBox);
//
//         wrapper.appendChild(ruleBox);
//     }
//     document.body.appendChild(wrapper);
// }
// createBlocks(rules);


// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
