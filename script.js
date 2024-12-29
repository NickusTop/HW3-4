// 1
const inp = document.getElementById('inp')
const inp2 = document.getElementById('inp2')

const value = inp.value.trim()
const value2 = inp.value.trim()

if (value && value2) {
    console.log("Обидва поля заповнені")
} else {
    console.log("Не всі поля заповнені")
}
// 2 
let number1 = 2
let number2 = 5

const number3 = number1 + number2

if (number3 > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}
// 3
const text = "JavaScript"

if (text == "JavaScript") {
    console.log("Текст містить слово JavaScript")
} else {
    console.log("Текст не містить слово JavaScript")
}
// 4
const diapnumber = 12

if (diapnumber > 10 && diapnumber < 20) {
    console.log("Число входить в Діапазон від 10 до 20")
} else {
    console.log("Число не входить в Діапазон від 10 до 20")
}
// 5
const name = "Nikita"
const email = "nikita@gmail.com"
const password = "772233"
if (name.length > 3 && email.includes("@") && email.indexOf(".") > email.indexOf("@") && password.length >= 6){
    console.log("Перенаправлення на іншу сторінку")
} else {
    console.log("Помилка: неправильне заповнення")
}