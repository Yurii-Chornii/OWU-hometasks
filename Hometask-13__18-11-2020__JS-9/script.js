// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.


// let energy = 2000;
//
// function massage(message, energy) {
//     console.log(message);
//     console.log(`Залишилось ${energy} енергії`)
// }
//
// function wakeUp(energy, callBack) {
//     setTimeout(() => {
//         massage('Я прокинувся', energy);
//         callBack(null, energy);
//     }, 3000)
// }
//
// function brushMyTeeth(energy, callBack) {
//     setTimeout(() => {
//         energy -= 300;
//         if (energy <= 0) {
//             callBack('Закінчилась енергія коли чистив зуби');
//             return;
//         }
//         massage('Почистив зуби', energy);
//         callBack(null, energy);
//     }, 1000)
// }
//
// function eat(energy, callBack) {
//     setTimeout(() => {
//         energy += 400;
//         massage('Поїв', energy);
//         callBack(null, energy);
//     }, 1500)
// }
//
// function goToWork(energy, callBack) {
//     setTimeout(() => {
//         energy -= 800;
//         if (energy <= 0) {
//             callBack('Закінчилась енергія коли їхав на роботу');
//             return;
//         }
//         massage('Приїхав на роботу', energy);
//         callBack(null, energy);
//     }, 2000)
// }
//
// function working(energy, callBack) {
//     setTimeout(() => {
//         energy -= 500;
//         if (energy <= 0) {
//             callBack('Закінчилась енергія коли працював');
//             return;
//         }
//         massage('Попрацював', energy);
//         callBack(null, energy);
//     }, 3000)
// }
//
// function goToTheGum(energy, callBack) {
//     setTimeout(() => {
//         energy -= 600;
//         if (energy <= 0) {
//             callBack('Закінчилась енергія під час тренування');
//             return;
//         }
//         massage('Потренувався', energy);
//         callBack(null, energy);
//     }, 500)
// }
//
// function goHome(energy, callBack) {
//     setTimeout(() => {
//         energy -= 400;
//         if (energy <= 0) {
//             callBack('Закінчилась енергія під час дороги додому');
//             return;
//         }
//         massage('Приїхав додому', energy);
//         callBack(null, energy);
//     }, 900)
// }
//
// function goAsleep(energy, callBack) {
//     setTimeout(() => {
//         energy = 2000
//         massage('Пішов спати', energy);
//         callBack(null, energy);
//     }, 800)
// }
//
// wakeUp(energy, (error, data) => {
//     brushMyTeeth(data, (error, data) => {
//         if (error) {
//             console.log(error);
//             return;
//         }
//         eat(data, (error, data) => {
//             goToWork(data, (error, data) => {
//                 if (error) {
//                     console.log(error);
//                     return;
//                 }
//                 working(data, (error, data) => {
//                     if (error) {
//                         console.log(error);
//                         return;
//                     }
//                     eat(data, (error, data) => {
//                         goToTheGum(data, (error, data) => {
//                             if (error) {
//                                 console.log(error);
//                                 return;
//                             }
//                             goHome(data, (error, data) => {
//                                 if (error) {
//                                     console.log(error);
//                                     return;
//                                 }
//                                 goAsleep(data, () => {
//
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// promise
// wakeUpHour: number
function myDay(wakeUpHour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUpHour > 9) reject('Я проспав((')
            resolve(`Я проснувся о ${wakeUpHour} годині і почуваюсь дуже бадьоро)`)
        }, 2000)
    })
}

// Toothpaste: true / false
function brushMyTeeth(toothpaste) {
    return new Promise((resolve, reject) => {
        console.log('Йду чистити зуби...')
        setTimeout(() => {
            if (!toothpaste) reject('Закінчилась зубна паста(')
            resolve('Почистив зуби')
        }, 1500)
    })
}

// coffee: true / false
function makeCoffee(coffee){
    return new Promise((resolve, reject) => {
        console.log('Йду робити каву...')
        setTimeout(() => {
            if (!coffee) reject('Кава закінчилась, я без неї на роботу не піду!(');
            resolve('Зробив кавусю і випив)')
        }, 1400)
    })
}

// eggsCount: number
function fryingTheOmelet(eggsCount){
    return new Promise((resolve, reject) => {
        console.log('Йду жарити омлет...')
        setTimeout(() => {
            if (eggsCount < 3) reject('Замало яєць в холодильнику, я не можу поснідати(');
            resolve('Я шойно зхавав найкращий омлет в світі))')
        }, 3000)
    })
}

//diesel: true / false
function goToWork(diesel){
    return new Promise((resolve, reject) => {
        console.log('Йду до машини, щоб їхати на роботу. Вчора жінка їздила на ній, цікаво чи є паливо...');
        setTimeout(() => {
            if (!diesel) reject('Я ТАК І ЗНАВ!!! Знов пустий бак!!(');
            resolve('Дизель є, пів баку) Я радий їду на роботу')
        }, 4000)
    })
}

//isAllRight: true / false
function working(isAllRight){
    return new Promise((resolve, reject) => {
        console.log('Починаю працювати');
        setTimeout(() => {
            if (!isAllRight) reject('На роботі знову проблеми(');
            resolve('На роботі було все окей)')
        }, 2500)
    })
}

// gumEntryCard: true / false
function goToTheGum(gumEntryCard){
    return new Promise((resolve, reject) => {
        console.log('Їду в зал, сподіваюсь не забув абонемент');
        setTimeout(() => {

        }, 3000)

    })
}


myDay(9)
    .then((wakeUpHour) => {
        console.log(wakeUpHour);
        return brushMyTeeth(true)
    })
    .then((data) => {
        console.log(data);
        return makeCoffee(true)
    })
    .then((data) => {
        console.log(data);
        return fryingTheOmelet(3)
    })
    .then((data) => {
        console.log(data);
        return goToWork(true)
    })
    .then((data) => {
        console.log(data);
        return working(true)
    })
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })
