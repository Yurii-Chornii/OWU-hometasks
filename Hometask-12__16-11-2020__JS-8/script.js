// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const task1Textarea = document.querySelector('#task1Textarea');
task1Textarea.value = localStorage.getItem('task1TextareaValue');
task1Textarea.oninput = function () {localStorage.setItem('task1TextareaValue', this.value)}


//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
const formTask2 = document.forms.task2Form;

const task2userNameInput = formTask2.userName;
task2userNameInput.value = localStorage.getItem('task2UserName');
task2userNameInput.oninput = function (){localStorage.setItem('task2UserName', this.value)}

const task2userSurnameInput = formTask2.userSurname;
task2userSurnameInput.value = localStorage.getItem('task2UserSurname');
task2userSurnameInput.oninput = function (){localStorage.setItem('task2UserSurname', this.value)}

let task2UserSex = localStorage.getItem('task2UserSex');

if (task2UserSex === 'male') formTask2.userSex[0].checked = true;
else if (task2UserSex === 'female')formTask2.userSex[1].checked = true;

formTask2.userSex[0].onclick = () => {
    task2UserSex = 'male';
    localStorage.setItem('task2UserSex', 'male');
}
formTask2.userSex[1].onclick = () => {
    task2UserSex = 'female';
    localStorage.setItem('task2UserSex', 'female');
}

const task2AdultUser = formTask2.adultUser;
task2AdultUser.checked = localStorage.getItem('task2AdultUser') === 'true' ? true : false;
task2AdultUser.onclick = function () {localStorage.setItem('task2AdultUser', this.checked === true ? 'true' : 'false')}

const task2UserCity = formTask2.userCity;
task2UserCity.value = localStorage.getItem('task2UserCity');
task2UserCity.onchange = function (){localStorage.setItem('task2UserCity', this.value)}

const task2UserComment = formTask2.userComment;
task2UserComment.value = localStorage.getItem('task2UserComment');
task2UserComment.oninput = function () {localStorage.setItem('task2UserComment', this.value)}

formTask2.btnTask2.addEventListener('click', function (){
    localStorage.removeItem('task2UserSex');
    localStorage.removeItem('task2UserName');
    localStorage.removeItem('task2UserSurname');
    localStorage.removeItem('task2UserCity');
    localStorage.removeItem('task2AdultUser');
    localStorage.removeItem('task2UserComment');
})


//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
