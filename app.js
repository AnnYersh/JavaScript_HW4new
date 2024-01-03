/* Задача №1 */

let nom = prompt('Введите Ваше имя')
let year = +prompt('Введите текущий год')
let birth = +prompt('Введите год Вашего рождения')

function age(bilo,stalo) {
    let count = stalo - bilo
    return count
}

console.log('Вас зовут ' + nom + ', Ваш возраст ' + age(birth,year))~