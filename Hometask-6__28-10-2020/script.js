// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// let arr2 = ['one', 'two', 'three', 'four', 'five'];
// console.log(arr2);
// let arr3 = [1, 2, 'three', true, false];
// console.log(arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 1;
// array[1] = 'two';
// array[2] = true;
// array[3] = false;
// array[4] = 'five';
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Якась ітерація</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Ітерація номер ' + (i + 1) + '</div>');
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 10) {
//     document.write('<div>Якась ітерація циклу while</div>');
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 10) {
//     document.write('<div>Ітерація номер ' + (i + 1) + ' циклу while</div>');
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbersArray.length; i++) {
//     console.log(numbersArray[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i = 0; i < stringsArray.length; i++) {
//     console.log(stringsArray[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let anyArray = ['1', 2, 3, true, false, undefined, null, {}, [], Symbol('s')];
// let i = 0;
// while (i < anyArray.length) {
//     console.log(anyArray[i]);
//     i++
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let anyArray = ['1', 2, 3, true, false, 1, 'null', 'bla bla', 'wow', false];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === "boolean"){
//         console.log(anyArray[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let anyArray = ['1', 2, 3, true, false, 1, 'null', 'bla bla', 'wow', false];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === "number"){
//         console.log(anyArray[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let anyArray = ['1', 2, 3, true, false, 1, 'null', 'bla bla', 'wow', false];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === "string"){
//         console.log(anyArray[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = 2;
// arr[3] = false;
// arr[4] = 'bla bla';
// arr[5] = ['bla', 'bla'];
// arr[6] = {name: 'ivan'};
// arr[7] = null;
// arr[8] = undefined;
// arr[9] = 'car';
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log('iteranion ' + (i + 1));
//     document.write('iteranion ' + (i + 1) + '<br>');
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log('iteranion ' + (i + 1));
//     document.write('iteranion ' + (i + 1) + '<br>');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i += 2){
//     console.log('iteranion ' + (i + 1));
//     document.write('iteranion ' + (i + 1) + '<br>');
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0) {
//         console.log('iteranion ' + (i));
//         document.write('iteranion ' + (i) + '<br>');
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 1) {
//         console.log('iteranion ' + (i));
//         document.write('iteranion ' + (i) + '<br>');
//     }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let minutes = 0;
// let seconds = 0;
// while (minutes < 2) {
//     while (seconds < 60) {
//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }
//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }
//         let clock = minutes + ':' + seconds;
//         console.log(clock);
//         minutes = parseInt(minutes);
//         seconds = parseInt(seconds);
//         seconds++
//     }
//     seconds = 0;
//     minutes++
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// while (hours < 3) {
//     while (minutes < 60) {
//         while (seconds < 60) {
//             if (hours < 10) {
//                 hours = '0' + hours;
//             }
//             if (minutes < 10) {
//                 minutes = '0' + minutes;
//             }
//             if (seconds < 10) {
//                 seconds = '0' + seconds;
//             }
//             let clock = hours + ':' + minutes + ':' + seconds;
//             console.log(clock);
//             hours = parseInt(hours);
//             minutes = parseInt(minutes);
//             seconds = parseInt(seconds);
//             seconds++
//         }
//         seconds = 0;
//         minutes++
//         if (hours === 2 && minutes === 21){
//             minutes = 60;
//         }
//         if(hours === 2 && minutes === 20){
//             seconds = 61;
//         }
//     }
//     minutes = 0;
//     hours++
// }


////////////////////////////////////////////////////////////////////////////////////////////////////

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let result = '';
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log(result);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let result = '';
// let i = 0;
// while (i < arr.length){
//     result += arr[i];
//     i++
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let result = '';
// for (let item of arr){
//     result += item;
// }
// console.log(result);


//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++){
//     arr.push(i);
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// let newArr = arr.reverse();
// console.log(newArr);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// for (let i = 4; i < 7; i++){
//     arr.push(i);
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// let number = 6;
// for (let i = 0; i < 3; i++) {
//     arr.unshift(number);
//     number -= 1;
// }
// console.log(arr);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(3, 5);
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(0, 2);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let item of arr){
//     if (item % 2 === 0){
//         console.log(item)
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// for (let item of arr) {
//     arr2.push(item);
// }
// console.log(arr2);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i];
// }
// console.log(arr2);


//
//
// =========================
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < arr.length){
//     console.log(arr[i]);
//     i++
// }

//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr.length) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);


// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length; i > 0; i -= 1) {
//     console.log(arr[i-1]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while (зворотньо)
// let i = arr.length;
// while (i > 0){
//     console.log(arr[i-1]);
//     i -= 1;
// }
// 2. перебрати його циклом for (зворотньо)
// for (let i = arr.length; i > 0; i -= 1) {
//     console.log(arr[i-1]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом (зворотньо)
// let i = arr.length;
// while (i > 0) {
//     if (i % 2 === 1){
//         console.log(arr[i]);
//     }
//     i -= 1;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом (зворотньо)
// for (let i = arr.length; i > 0; i -= 1) {
//     if (i % 2 === 1){
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення (зворотньо)
// let i = arr.length;
// while (i > 0) {
//     if (arr[i] % 2 === 0) console.log(arr[i]);
//     i -= 1;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення (зворотньо)
// for (let i = arr.length; i > 0; i -= 1) {
//         if (arr[i] % 2 === 0) console.log(arr[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten" (зворотньо)
// for (let i = arr.length; i > 0; i -= 1) {
//         if (arr[i] % 3 === 0) {
//             arr[i] = 'okten';
//         }
// }
// console.log(arr);
// ======================================================================================================

// 10
// створити пустий масив та :
// let emptyArr = [];
//    1 - заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++){
//     if(i % 2 === 0) emptyArr.push(i);
// }
// console.log(emptyArr);

// 2 - заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++){
//     if(i % 2 === 1) emptyArr.push(i);
// }
// console.log(emptyArr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// for (let i = 0; i < 20; i++){
//     emptyArr.push(Math.round(Math.random() * 100))
// }
// console.log(emptyArr);

// 2. вывести на консоль  каждый третий елемент
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 20, 30, 33, 45, 21, 67];
// for (let i = 0; i < newArr.length; i++) {
//     if ((i + 1) % 3 === 0){
//         console.log(newArr[i]);
//     }
// }


// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 20, 30, 33, 45, 21, 67];
// for (let i = 0; i < newArr.length; i++) {
//     if ((i + 1) % 3 === 0){
//         if (newArr[i] % 2 === 0) console.log(newArr[i]);
//     }
// }
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 20, 30, 33, 45, 21, 67];
// let myArr = [];
// for (let i = 0; i < newArr.length; i++) {
//     if ((i + 1) % 3 === 0){
//         if (newArr[i] % 2 === 0) myArr.push(newArr[i]);
//     }
// }
// console.log(myArr);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 20, 30, 33, 45, 21, 67];
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i + 1] % 2 === 0){
//         console.log(newArr[i]);
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / arr.length);

//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let randomArr = [];
// let enotherArr = [];
// for (let i = 0; i < 20; i++){
//     randomArr.push(Math.round(Math.random() * 100));
//     randomArr[i] = randomArr[i] * 5;
//     enotherArr.push(randomArr[i]);
// }
// console.log(randomArr)
// console.log(enotherArr);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let arr = [1, 'abc', 5, true, undefined];
// let emptyArr = [];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'number') emptyArr.push(arr[i]);
// }
// console.log(emptyArr);
