// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(tagName, tagAction, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2){
//     this.titleOfTag = tagName;
//     this.action = tagAction;
//     this.attrs = [
//         {
//             titleOfAttr: titleOfAttr1,
//             actionOfAttr: actionOfAttr1
//         },
//         {
//             titleOfAttr: titleOfAttr2,
//             actionOfAttr: actionOfAttr2
//         }
//     ];
// }
// const a = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`, 'href', 'Задает адрес документа, на который следует перейти.', 'name', 'Устанавливает имя якоря внутри документа.');
// console.log(a);
// const div = new Tag('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`, 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(div);
// const h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.', 'align', 'Определяет выравнивание заголовка.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
// console.log(h1);
// const span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', 'id', 'Указывает имя стилевого идентификатора.', 'hidden', 'Скрывает содержимое элемента от просмотра.');
// console.log(span);
// const input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.', 'checked', 'Предварительно активированный переключатель или флажок.');
// console.log(input);
// const form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', 'action', 'Адрес программы или документа, который обрабатывает данные формы.','name','Имя формы.');
// console.log(form);
// const option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', 'disabled', 'Заблокировать для доступа элемент списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.');
// console.log(option);
// const select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.','form', 'Связывает список с формой.');
// console.log(select);

// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag{
//     constructor(tagName, tagAction, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
//         this.titleOfTag = tagName;
//         this.action = tagAction;
//         this.attrs = [
//             {
//                 titleOfAttr: titleOfAttr1,
//                 actionOfAttr: actionOfAttr1
//             },
//             {
//                 titleOfAttr: titleOfAttr2,
//                 actionOfAttr: actionOfAttr2
//             }
//         ];
//     }
// }
// const a = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`, 'href', 'Задает адрес документа, на который следует перейти.', 'name', 'Устанавливает имя якоря внутри документа.');
// console.log(a);
// const div = new Tag('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`, 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(div);
// const h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.', 'align', 'Определяет выравнивание заголовка.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
// console.log(h1);
// const span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', 'id', 'Указывает имя стилевого идентификатора.', 'hidden', 'Скрывает содержимое элемента от просмотра.');
// console.log(span);
// const input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.', 'checked', 'Предварительно активированный переключатель или флажок.');
// console.log(input);
// const form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', 'action', 'Адрес программы или документа, который обрабатывает данные формы.','name','Имя формы.');
// console.log(form);
// const option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', 'disabled', 'Заблокировать для доступа элемент списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.');
// console.log(option);
// const select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.','form', 'Связывает список с формой.');
// console.log(select);
// ==============================================

//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// const car = {
//     model: 'Octavia',
//     producer: 'Skoda',
//     year: 2012,
//     maxSpeed: 200,
//     engineCapacity: 2,
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     },
//     info: function (){
//         console.log(`Інформація про автомобіль: \n Виробник: ${this.producer} \n Модель: ${this.model} \n Рік випуску: ${this.year} \n Максимальна швидкість: ${this.maxSpeed} \n Об'єм двигуна: ${this.engineCapacity}`);
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//         // console.log(this.maxSpeed);
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//         // console.log(this.year);
//     },
//     addDriver: function (driver){
//         this.driver = driver;
//         // console.log(this.driver);
//     }
// }
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2014);
// car.addDriver({name: 'yura', age: 22});
// // console.log(car);

// ==============================================
//
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, producer, year, maxSpeed, engineCapacity){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//         };
//         this.info = function(){
//             console.log(`Інформація про автомобіль: \n Виробник: ${this.producer} \n Модель: ${this.model} \n Рік випуску: ${this.year} \n Максимальна швидкість: ${this.maxSpeed} \n Об'єм двигуна: ${this.engineCapacity}`);
//         };
//         this.increaseMaxSpeed = function (newSpeed){
//             this.maxSpeed += newSpeed;
//             console.log(this.maxSpeed);
//         };
//         this.changeYear = function (newValue){
//             this.year = newValue;
//             console.log(this.year);
//         };
//         this.addDriver = function (driver){
//             this.driver = driver;
//             console.log(this.driver);
//         }
// }
// let myCar = new Car('Octavia', 'Skoda', 2012, 200, 2);
// myCar.info();
// myCar.drive();
// myCar.addDriver({name: 'yura', age: 22});
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2018);
// console.log(myCar);


//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car{
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     };
//     info(){
//         console.log(`Інформація про автомобіль: \n Виробник: ${this.producer} \n Модель: ${this.model} \n Рік випуску: ${this.year} \n Максимальна швидкість: ${this.maxSpeed} \n Об'єм двигуна: ${this.engineCapacity}`);
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     };
//     changeYear(newValue){
//         this.year = newValue;
//         console.log(this.year);
//     };
//     addDriver(driver){
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
// let myCar = new Car('Octavia', 'Skoda', 2012, 200, 2);
// myCar.info();
// myCar.drive();
// myCar.addDriver({name: 'yura', age: 22});
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2018);
// console.log(myCar);


// ==============================================
//
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
//
// const popelArr = [new Popelushka('Sveta', 20, 37), new Popelushka('Olena', 21, 38), new Popelushka('Viktoria', 19, 37), new Popelushka('Natasha', 18, 36), new Popelushka('Katya', 23, 39), new Popelushka('Anastasia', 22, 38), new Popelushka('Ira', 20, 37), new Popelushka('Solia', 24, 39), new Popelushka('Sophia', 20, 38), new Popelushka('Marta', 18, 37)];
//
// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
//
// const princeOlexandr = new Prince('Olexandr', 22, 36);
//
// for (const popelush of popelArr) {
//     if (popelush.legSize === princeOlexandr.shoesSize) {
//         console.log(`Це туфелька попелюшки за іменем ${popelush.name}!`);
//     }
// }


// ==============================================
//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Popelushka(name, age, legSize) {
//     this.name = name;
//     this.age = age;
//     this.legSize = legSize;
// }
//
// function Prince(name, age, shoesSize) {
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//     this.findPopelushka = function (arr){
//         for (const girl of arr) {
//             (girl.legSize === this.shoesSize) ? console.log(`Це туфелька попелюшки за іменем ${girl.name}!`) : null;
//         }
//     }
// }
//
// const princeOlexandr = new Prince('Olexandr', 22, 36);
//
// const girlsArray = [new Popelushka('Sveta', 20, 37), new Popelushka('Olena', 21, 38), new Popelushka('Viktoria', 19, 37), new Popelushka('Natasha', 18, 36), new Popelushka('Katya', 23, 39), new Popelushka('Anastasia', 22, 38), new Popelushka('Ira', 20, 37), new Popelushka('Solia', 24, 39), new Popelushka('Sophia', 20, 38), new Popelushka('Marta', 18, 37)];
//
// princeOlexandr.findPopelushka(girlsArray);

// ==============================================


//
//
//
//
//
// // додаткове завдання від Віті
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// class Car {
//     constructor(model, power, owner, price, year) {
//         this.model = model;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
//     }
// }
//
// class CarOwner {
//     constructor(name, age, drivingExperience) {
//         this.name = name;
//         this.age = age;
//         this.drivingExperience = drivingExperience;
//     }
// }
//
// const cars = [
//     new Car('BMW', 400, new CarOwner('Yura', 22, 4), 70000, 2020),
//     new Car('Seat', 130, new CarOwner('Sergiy', 26, 3), 15000, 2018),
//     new Car('VW', 170, new CarOwner('Valentyn', 23, 5), 10000, 2012),
//     new Car('Skoda', 150, new CarOwner('Slavik', 43, 25), 12000, 2013),
//     new Car('Renault', 110, new CarOwner('Pasha', 22, 4), 7000, 2011),
//     new Car('Kadilac', 300, new CarOwner('Alex', 30, 12), 47000, 2015),
//     new Car('Nissan', 160, new CarOwner('Roman', 22, 4), 17000, 2013),
//     new Car('Opel', 140, new CarOwner('Ruslan', 22, 4), 11000, 2013),
// ];
//
// for (let i = 0; i < cars.length; i += 2) {
//     cars[i].power = Math.round(cars[i].power * 1.1);
//     cars[i].price = Math.round(cars[i].price * 1.05);
//     cars[i].owner = new CarOwner(`newCarOwner${i}`, Math.round(Math.random() * (40 - 25) + 25), Math.round(Math.random() * (7 - 5) + 5));
// }
//
// let totalCarsPrice = 0;
//
// for (const car of cars) {
//     (car.owner.age > 25 && car.owner.drivingExperience < 5) ? car.owner.drivingExperience += 1 : null;
//     totalCarsPrice += car.price;
// }

