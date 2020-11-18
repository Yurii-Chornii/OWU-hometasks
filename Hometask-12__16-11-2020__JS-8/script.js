// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const task1Textarea = document.querySelector('#task1Textarea');
task1Textarea.value = localStorage.getItem('task1TextareaValue');
task1Textarea.oninput = function () {
    localStorage.setItem('task1TextareaValue', this.value)
}


//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
const formTask2 = document.forms.task2Form;

const task2userNameInput = formTask2.userName;
task2userNameInput.value = localStorage.getItem('task2UserName');
task2userNameInput.oninput = function () {
    localStorage.setItem('task2UserName', this.value)
}

const task2userSurnameInput = formTask2.userSurname;
task2userSurnameInput.value = localStorage.getItem('task2UserSurname');
task2userSurnameInput.oninput = function () {
    localStorage.setItem('task2UserSurname', this.value)
}

let task2UserSex = localStorage.getItem('task2UserSex');

if (task2UserSex === 'male') formTask2.userSex[0].checked = true;
else if (task2UserSex === 'female') formTask2.userSex[1].checked = true;

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
task2AdultUser.onclick = function () {
    localStorage.setItem('task2AdultUser', this.checked === true ? 'true' : 'false')
}

const task2UserCity = formTask2.userCity;
task2UserCity.value = localStorage.getItem('task2UserCity');
task2UserCity.onchange = function () {
    localStorage.setItem('task2UserCity', this.value)
}

const task2UserComment = formTask2.userComment;
task2UserComment.value = localStorage.getItem('task2UserComment');
task2UserComment.oninput = function () {
    localStorage.setItem('task2UserComment', this.value)
}

formTask2.btnTask2.addEventListener('click', function () {
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
const task3Textarea = document.querySelector('#task3TextArea');
task3Textarea.value = localStorage.getItem(`task3TextareaValue${+localStorage.getItem('historyIterator')}`);
const saveBtn = document.querySelector('#save');
saveBtn.addEventListener('click', () => {
    let iterator = +localStorage.getItem('historyIterator') + 1;
    localStorage.setItem(`task3TextareaValue${iterator}`, task3Textarea.value);
    localStorage.setItem('historyIterator', `${iterator}`);
    if (+localStorage.getItem('historyIterator') > 0) {
        document.querySelector('#historyButtons').style.display = 'block';
    }
    generalIterator = iterator;
})
let generalIterator = +localStorage.getItem('historyIterator');
document.querySelector('#back').addEventListener('click', () => {
    if (generalIterator > 1) {
        generalIterator--;
        task3Textarea.value = localStorage.getItem(`task3TextareaValue${generalIterator}`);
    } else {
        alert('Це найстаріший збережений запис!')
    }
})
document.querySelector('#next').addEventListener('click', () => {
    if (generalIterator < +localStorage.getItem('historyIterator')) {
        generalIterator++;
        task3Textarea.value = localStorage.getItem(`task3TextareaValue${generalIterator}`);
    } else {
        alert('Це найновіший збережений запис!')
    }
})


//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
class Contact {
    constructor(name, surname, phoneNumber, email, company, department, birthday) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.company = company;
        this.department = department;
        this.birthday = birthday;
    }
}

const contacts = JSON.parse(localStorage.getItem('contactsMemory')) || []


function postContacts(contacts) {
    localStorage.setItem('contactsMemory', JSON.stringify(contacts));
}

postContacts(contacts);

function getContacts() {
    return JSON.parse(localStorage.getItem('contactsMemory'));
}


function deleteContact(index) {
    let contacts = getContacts();
    contacts.splice(index, 1);
    postContacts(contacts);
    showContacts(getContacts());
}

function editContact(index) {
    const createContactBtn = document.querySelector('#createContactBtn');
    const editContactBtn = document.querySelector('#editContactBtn');
    createContactBtn.style.display = 'none';
    editContactBtn.style.display = 'block';
    let contacts = getContacts();
    let thisContact = contacts[index];
    const form = document.forms.addNewContactForm;
    form.contactName.value = thisContact.name;
    form.contactSurname.value = thisContact.surname;
    form.contactPhoneNumber.value = thisContact.phoneNumber;
    form.contactMail.value = thisContact.email;
    form.contactCompany.value = thisContact.company;
    form.contactDepartment.value = thisContact.department;
    form.contactBirthday.value = thisContact.birthday;
    editContactBtn.addEventListener('click', () => {
        thisContact.name = form.contactName.value;
        thisContact.surname = form.contactSurname.value;
        thisContact.phoneNumber = form.contactPhoneNumber.value;
        thisContact.email = form.contactMail.value;
        thisContact.company = form.contactCompany.value;
        thisContact.department = form.contactDepartment.value;
        thisContact.birthday = form.contactBirthday.value;
        contacts.splice(index, 1, thisContact);
        postContacts(contacts);
        showContacts(getContacts());
        createContactBtn.style.display = 'block';
        editContactBtn.style.display = 'none';
    })
}

function showContacts(contacts) {
    document.querySelector('#contactsWrapper').innerHTML = '';
    contacts.forEach(function (contact, index) {
        contact.id = index;

        const contactBox = document.createElement('div');
        contactBox.innerHTML = `
            <div>
                <h5>${contact.name}, ${contact.surname}</h5>
                <p>${contact.phoneNumber}, ${contact.email}</p>
                <p>Company: ${contact.company}, department: ${contact.department}, birthday: ${contact.birthday}</p>
            </div>
            <button onclick="deleteContact(${index})">Видалити</button>
            <button onclick="editContact(${index})">Редагувати</button>
            <hr>
            `;
        document.querySelector('#contactsWrapper').appendChild(contactBox);
    })
}

showContacts(getContacts());

function addNewContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    postContacts(contacts);
    showContacts(getContacts());
}

document.getElementById('createContactBtn').onclick = () => {
    addNewContact(new Contact(document.forms.addNewContactForm.contactName.value, document.forms.addNewContactForm.contactSurname.value, document.forms.addNewContactForm.contactPhoneNumber.value, document.forms.addNewContactForm.contactMail.value, document.forms.addNewContactForm.contactCompany.value, document.forms.addNewContactForm.contactDepartment.value, document.forms.addNewContactForm.contactBirthday.value));
}
