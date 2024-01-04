// /* Задача №1 */

// let nom = prompt('Введите Ваше имя')
// let year = +prompt('Введите текущий год')
// let birth = +prompt('Введите год Вашего рождения')

// function age(bilo,stalo) {
//     let count = stalo - bilo
//     return count
// }

// console.log('Вас зовут ' + nom + ', Ваш возраст ' + age(birth,year))

//Задача 2

function rand(min,max) {
    return Math.floor(Math.random() *  (max + 1 - min)  + min)
}

let primerAmount = +prompt('Введите количество примеров')

for(let i = 0; i < primerAmount;i++) {
    let one = rand(1, 10);
    let two = rand(1, 10);
    let znak = rand(1, 4);
    let rez = 0;
    if (znak == 1) {
        rez = one + two,
        znak = '+'
    } else if (znak == 2) {
        rez = one - two,
        znak = '-'
    } else if (znak == 3) {
        rez = one * two,
        znak = '*'
    } else {
        rez = one / two,
        znak = '/'
    }

    let primer = +prompt(one + znak + two + ' =');
    let word = primer == rez ? 'Молодец' : 'Глупота';
    alert(one + znak + two + ' = ' + (rez) + ' Ваш ответ ' + primer  + '. ' + word)
}