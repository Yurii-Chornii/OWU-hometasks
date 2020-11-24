// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

function getRandomTime(ms) {
    return Math.round(Math.random() * ms);
}

const element = document.querySelector('#paperSheet');

function writeLetter(letter) {
    return new Promise(resolve => {
        setTimeout(() => {
            element.innerHTML += letter;
            resolve();
        }, getRandomTime(1000))
    })
}

async function printer() {
    let text = prompt('Введіть текст');

    let letters = text.split('');
    for (const oneLetter of letters) {
        await writeLetter(oneLetter);
    }
}

printer();
