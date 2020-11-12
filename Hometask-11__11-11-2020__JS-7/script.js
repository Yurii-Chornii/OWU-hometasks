// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.querySelector('#text button').addEventListener('click', (ev) => ev.target.parentElement.style.display = 'none');
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.querySelector('#task2 button').addEventListener('click', (ev) => ev.target.style.display = 'none');
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.querySelector('#task3 button').addEventListener('click', (ev) => {
    ev.preventDefault();
    alert(document.querySelector('#task3 input').value < 18 ? 'Ваш вік менше 18' : 'Ви повнолітній');
});
//
// - Создайте меню, которое раскрывается/сворачивается при клике
document.querySelector('nav button').addEventListener('click', function (evt)  {
    document.querySelector('nav ul').classList.toggle('active');
    document.querySelector('nav i').classList.toggle('fa-angle-up');
});
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'}, {title : 'consectetur', body:'adipisicing elit. Ab ad autem, blanditiis'}, {title : 'delectus', body:'doloribus eos exercitationem fugit'}, {title : 'laboriosam', body:'magnam minus mollitia, non odit quas quibusdam quis suscipit unde, voluptatibus!'}];
for (const comment of comments) {
    const block = document.createElement('div');
    block.classList.add('border');
    const commentTitle = document.createElement('h4');
    commentTitle.innerText = comment.title;
    block.appendChild(commentTitle);
    const commentBody = document.createElement('p');
    commentBody.innerText = comment.body;
    commentBody.style.display = 'block';
    block.appendChild(commentBody);
    const button = document.createElement('button');
    block.appendChild(button);
    button.innerText = 'comment body toggler';
    button.addEventListener('click', ev => {
        commentBody.style.display = commentBody.style.display === 'block' ? 'none' : 'block';
    });
    document.body.appendChild(block);
}


// //task6
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.querySelector('#task6 button').addEventListener('click', ev => console.log(`Form 1, input 1 text: ${document.forms.form1.input1.value} \n Form 1, input 2 text: ${document.forms.form1.input2.value} \n Form 2, input 1 text: ${document.forms.form2.input1.value} \n Form 2, input 2 text: ${document.forms.form2.input2.value}`));
//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable(rows, cols, element){
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr =document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.classList.add('table-border');
            td.innerText = element;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
document.querySelector('#task7').appendChild(createTable(5, 5, 'bla'))
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
document.querySelector('#task7dop button').addEventListener('click', ev => {
    ev.preventDefault();
    document.querySelector('#task7dop').appendChild(createTable(document.forms.createTableForm.rows.value, document.forms.createTableForm.cols.value, document.forms.createTableForm.text.value))
})



//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let iterator = 0;
function setPhotoSrc(direction){
    const photos = ['http://oboi-dlja-stola.ru/file/19702/760x0/16:9/peugeot-landtrek.jpg', 'http://oboi-dlja-stola.ru/file/19276/760x0/16:9/bentley-bentayga-hybrid.jpg', 'http://oboi-dlja-stola.ru/file/17910/760x0/16:9/%D0%9D%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-bmw-z4.jpg', 'http://oboi-dlja-stola.ru/file/14851/760x0/16:9/porsche-mission-e.jpg'];
    if (direction === 'right') iterator++;
    if (direction === 'left') iterator--;
    if (iterator === photos.length) iterator = 0;
    if (iterator === -1) iterator = photos.length -1;
    document.querySelector('#sliderWrapper img').setAttribute('src', photos[iterator]);
}
setPhotoSrc();
document.querySelector('#previousSlide').addEventListener('click', () => setPhotoSrc('left'));
document.querySelector('#nextSlide').addEventListener('click', () => setPhotoSrc('right'));

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

//підходить зразу під 2 завдання
const fuckingWords =['сука', 'лох', 'рагуль', 'дура', 'дурак'];
document.querySelector('#fuckngTask button').addEventListener('click', () => {
    let findBadWord = -1;
    for (const word of fuckingWords) {
        if (findBadWord < 0) findBadWord = document.forms.fuck.textInput.value.indexOf(word);
    }
    alert(findBadWord === -1 ? 'Красава' : 'Ах тиж паскуда!')
})


//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// function createNavForRulesHTML() {
//     let rules = document.getElementsByTagName('h2');
//     const ul = document.createElement('ul');
//     for (let i = 0; i < rules.length; i++) {
//         rules[i].setAttribute('id', `rule${i+1}`);
//         console.log(rules[i]);
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         a.setAttribute('href', `#rule${i+1}`);
//         a.innerText = rules[i].innerText;
//         ul.appendChild(li);
//         li.appendChild(a);
//     }
//     document.body.appendChild(ul);
// }
// createNavForRulesHTML();


//
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
function checkboxFilters(){
    let arr = usersWithAddress;
    // console.log(document.querySelector('#falseCheck').checked)
    if(document.querySelector('#falseCheck').checked === true){
        arr = arr.filter(user => {
            if (!user.status) return user;
        })
    }
    if(document.querySelector('#older29').checked === true){
        arr = arr.filter(user => {
            return user.age > 29;
        })
    }
    if(document.querySelector('#kyiv').checked === true){
        arr = arr.filter(user => {
            return user.address.city === 'Kyiv';
        })
    }
    for (const user of arr) {
        const user = document.createElement('div');
        user.classList.add('border');
    }
    // document.querySelector('#usersWithSitysTask').appendChild()
}

// console.log(document.querySelector('#falseCheck'));
// checkboxFilters();


//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
