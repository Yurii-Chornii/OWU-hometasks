// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'green';
// // -- робить шириниу елементу ul 400 пікселів
// let list = document.getElementsByTagName('ul')[0];
// list.style.width = '400px';
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let listItems = document.getElementsByClassName('linkList');
// console.log(listItems);
// for (const listItem of listItems) {
//     listItem.style.width = '50%';
// }
// -- отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2')[0];
// console.log(listElement2.innerText);
// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let lies = document.getElementsByTagName('li');
// for (const li of lies) {
//     li.style.backgroundColor = 'silver';
// }
// -- отримує всі елементи 'a' та додає їм клас anchor
// let links = document.getElementsByTagName('a');
// for (const link of links) {
//     link.classList.add('anchor');
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let links = document.getElementsByTagName('a'); //закоментувати код з попереднього завдання
// for (const link of links) {
//     if (link.innerText === 'link3'){
//         link.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let links = document.getElementsByTagName('a'); //закоментувати код з попереднього завдання
// for (const link of links) {
//     link.classList.add('element_XXX');
//     link.innerText = 'XXX';
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeaders = document.getElementsByClassName('sub-header');
// for (const subHeader of subHeaders) {
//     let color = prompt('Type color:')
//     subHeader.style.backgroundColor = color;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeaders = document.getElementsByClassName('sub-header');
// for (const subHeader of subHeaders) {
//     if (subHeader.innerText === 'content 2 segment'){
//         let color = prompt('Type color:')
//         subHeader.style.color = color;
//     }
// }


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1')[0];
// content1.innerText = prompt('type text');

// -- отримати елементи p та змінити їм padding на довільне значення
// let paragraphs = document.getElementsByTagName('p');
// for (const paragraph of paragraphs) {
//     paragraph.style.padding = '20px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text2Elements = document.getElementsByClassName('text2');
// for (const text2Element of text2Elements) {
//     text2Element.innerText = 'dsfsdfdsfsdfs';
// }
