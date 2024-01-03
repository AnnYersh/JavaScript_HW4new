/* Задача №1 */

let nom = prompt('Введите Ваше имя')
let year = +prompt('Введите текущий год')
let birth = +prompt('Введите год Вашего рождения')

function age(old,you) {
    let count = Math.abs(you - old) 
    return count
}

console.log('Вас зовут ' + nom + ', Ваш возраст ' + age(year,birth))


/* ! Тут то же самое, но можно ли написать короче? Строка 22*/

// let nom = prompt('Введите Ваше имя')
// let year = +prompt('Введите текущий год')
// let birth = +prompt('Введите год Вашего рождения')

// function age(old,you) {
//     return count = Math.abs(you - old) 
// }

// console.log('Вас зовут ' + nom + ', Ваш возраст ' + age(year,birth))

