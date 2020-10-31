// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
const dog = {
    name: 'Deyzi',
    age: 2,
    color: 'black',
    canSitDown: true,
    owner: 'Igor'
};
const man = Object.create(null);
man.skin = 'light';
man.cars = 1;
man.surname = 'Chornii';
man.hasPhone = true;
man.hasWife = false;
const car = {
    brand: 'Skoda',
    model: 'Octavia',
    year: 2012,
    type: 'universal',
    color: 'white'
};
const flat = {
    s: 60,
    rooms: 2,
    hasGarage: false,
    hasBalcony: true,
    price: 50000
}
const book = {
    pages: 200,
    name: 'Forbes',
    since: 1917,
    motto: 'The Capitalist Tool',
    city: 'New York'
}
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

const house = {
    rooms: ['living room', 'bedroom', 'kitchen'],
    parameters: {
        floors: 2,
        area: 150
    },
    location: 'Lviv',
    price: 200000,
    country: 'Ukraine'
}
const driver = {
    skills: ['drive', 'drive fast', 'drive very fast'],
    parameters: {
        age: 30,
        name: 'Andrii'
    },
    home: 'Lviv',
    hasWife: true,
    hasChildren: false
}
const toy = {
    style: ['Circuit Maze', 'Circuit Maze + Rush Hour', 'Domino Maze'],
    parameters: {
        forAge: 5,
        name: 'ThinkFun Circuit Maze Electric Current Brain Game'
    },
    madeIn: 'Lviv',
    forChildren: true,
    forAdult: false
}
const desk = {
    style: ['black series', 'white series'],
    parameters: {
        color: 'black',
        name: 'computer desk'
    },
    madeIn: 'Germany',
    forChildren: true,
    forAdult: false
}

// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const key in dog) {
//     console.log(key);
// }
// for (const key in man) {
//     console.log(key);
// }
// for (const key in car) {
//     console.log(key);
// }
// for (const key in flat) {
//     console.log(key);
// }
// for (const key in book) {
//     console.log(key);
// }
// for (const key in house) {
//     console.log(key);
// }
// for (const key in driver) {
//     console.log(key);
// }
// for (const key in toy) {
//     console.log(key);
// }
// for (const key in desk) {
//     console.log(key);
// }


// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(dog));
// console.log(Object.keys(man));
// console.log(Object.keys(car));
// console.log(Object.keys(flat));
// console.log(Object.keys(book));
// console.log(Object.keys(house));
// console.log(Object.keys(driver));
// console.log(Object.keys(toy));
// console.log(Object.keys(desk));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
const cars = [
    {
        model: 'Ford',
        madeYear: 2005,
        power: 100,
        color: 'white',
    },
    {
        model: 'Skoda',
        madeYear: 2012,
        power: 140,
        color: 'white',
    },
    {
        model: 'BMW',
        madeYear: 2015,
        power: 230,
        color: 'black',
    },
    {
        model: 'Seat',
        madeYear: 2005,
        power: 90,
        color: 'silver',
    },
    {
        model: 'Peugeot',
        madeYear: 2013,
        power: 190,
        color: 'red',
    },
    {
        model: 'Benz',
        madeYear: 2018,
        power: 280,
        color: 'gray',
    },
    {
        model: 'asdasd',
        madeYear: 2005,
        power: 100,
        color: 'blue',
    },
    {
        model: 'ipsum',
        madeYear: 2005,
        power: 100,
        color: 'lorem',
    },
    {
        model: 'dolor',
        madeYear: 2003,
        power: 150,
        color: 'sit',
    },
    {
        model: 'amet',
        madeYear: 2009,
        power: 70,
        color: 'green',
    },
];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
const cities = [
    {
        name: 'Lviv',
        popylation: 800000,
        country: 'Ukraine',
        region: 'Lvivskii'
    },
    {
        name: 'lorem',
        popylation: 1000000,
        country: 'ipsum',
        region: 'dolor'
    },
    {
        name: 'sit',
        popylation: 200000,
        country: 'amet',
        region: 'loremskii'
    },
];
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
const cars2 = [
    {
        model: 'X7 M competition',
        madeYear: 2020,
        power: 550,
        color: 'black',
        driver: {
            name: 'Yurii',
            age: 22,
            sex: 'male',
            experience: 4
        }
    },
    {
        model: 'X5 M competition',
        madeYear: 2020,
        power: 500,
        color: 'white',
        driver: {
            name: 'Alex',
            age: 22,
            sex: 'male',
            experience: 4
        }
    },
    {
        model: 'X3',
        madeYear: 2020,
        power: 250,
        color: 'black',
        driver: {
            name: 'Igor',
            age: 23,
            sex: 'male',
            experience: 3
        }
    },
];

// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
//     if (i === cars.length) {
//         i = 0;
//         break;
//     }
// }
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++;
//     if (i === cities.length) {
//         i = 0;
//         break;
//     }
// }
// while (i < cars2.length){
//     console.log(cars2[i]);
//     i++;
//     if (i === cars2.length) {
//         i = 0;
//         break;
//     }
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < cars2.length; i++) {
//     console.log(cars2[i]);
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const car of cars) {
//     console.log(car);
// }
// for (const city of cities) {
//     console.log(city);
// }
// for (const car of cars2) {
//     console.log(car);
// }

// - взять объекты из задания 1 и превратить каждый в json.
let newDog = JSON.stringify(dog);
let newMan = JSON.stringify(man);
let newCar = JSON.stringify(car);
let newFlat = JSON.stringify(flat);
let newBook = JSON.stringify(book);

// - взять json из задания 11 и превратить их обратно в объекты.
newDog = JSON.parse(newDog);
newMan = JSON.parse(newMan);
newCar = JSON.parse(newCar);
newFlat = JSON.parse(newFlat);
newBook = JSON.parse(newBook);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let car of cars) {
    car = JSON.stringify(car);
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let city of cities) {
    city = JSON.stringify(city);
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скопировать в новый массив.
let newCarsJSON = [];
for (let car of cars2) {
    let newCar = JSON.stringify(car);
    newCarsJSON.push(newCar);
}

// - Создать массив пользователей. У каждого пользователя обязательно должно быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//         name: 'Igor',
//         age: 22,
//         status: false,
//         skills: [
//             'lorem',
//             'ipsum',
//             'dolor'
//         ]
//     },
//     {
//         name: 'Yura',
//         age: 23,
//         status: true,
//         skills: [
//             'sit',
//             'amet',
//             'dolor'
//         ]
//     },
//     {
//         name: 'Alex',
//         age: 18,
//         status: false,
//         skills: [
//             'lorem',
//             'ipsum',
//             'dolor'
//         ]
//     },
// ];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {
//         name: 'Igor',
//         age: 22,
//         status: false,
//         skills: [
//             'lorem',
//             'ipsum',
//             'dolor'
//         ]
//     },
//     {
//         name: 'Yura',
//         age: 23,
//         status: true,
//         skills: [
//             'sit',
//             'amet',
//             'dolor'
//         ]
//     },
//     {
//         name: 'Alex',
//         age: 18,
//         status: false,
//         skills: [
//             'lorem',
//             'ipsum',
//             'dolor'
//         ]
//     },
// ];
// let skillsArr = [];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         skillsArr.push(skill);
//     }
// }
// console.log(skillsArr);


//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }
//
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [
//     {name: 'vasya', age: 31, address: 'Lviv', status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, address: 'Kyiv', status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, address: 'Kharkiv', status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, address: 'Dnipro', status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, address: 'Strui', status: true, skills: ['mysql', ',mongo']}
// ];
// let usersAddresses = [];
// for (const user of users) {
//     usersAddresses.push(user.address);
// }
// console.log(usersAddresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerText = `Name: ${user.name}, age: ${user.age}, address: ${user.address}, status: ${user.status}`;
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div = document.createElement('div');
//     div.style.margin = '5px';
//     div.innerHTML = `<div>Name: ${user.name}</div><div>age: ${user.age}</div><div>address: ${user.address}</div><div>status: ${user.status}</div>`;
//     document.body.appendChild(div);
// }

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// //
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// for (const user of users) {
//     let div = document.createElement('div');
//     div.style.margin = '5px';
//     div.innerHTML = `<div>Name: ${user.name}</div><div>age: ${user.age}</div><div>address: <div>${user.address.city}</div><div>${user.address.country}</div><div>${user.address.street}</div><div>${user.address.houseNumber}</div></div><div>status: ${user.status}</div>`;
//     document.body.appendChild(div);
// }
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //    Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //    let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     usersWithCities[i] = usersWithId[i];
//     for (const cityObj of citiesWithId) {
//         if (cityObj.user_id === usersWithCities[i].id){
//             usersWithCities[i].address = cityObj;
//         }
//     }
//
// }
// console.log(usersWithCities);

//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
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
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
