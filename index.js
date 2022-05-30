









let name = 'Alex'
let money = 10000
let account = 7777


let people = prompt('Имя?')

if(name === people) {

    let accountU = +prompt('Номер счета?') 

    if(accountU === account) {
        let Money = +prompt('Сколько вы хотите обналичить?')

        if(Money <= money) {
            document.write(`
                ${name} <br> <hr></hr> <b>
                ваш прежний баланс: ${money} <br>
                баланс сейчас: ${money - Money} <br>
            `)
        } else {
            alert('Чел у тебя недостаточно средств!')
        }
    }
} else {
    alert('Пока')
}









// let letters = confirm('А/а?')
// let age = prompt('Сколько вам лет?')
// let money = prompt('Сколько у вас денег?')
// let chel = prompt('Сколько людей ходят зайти в клуб ?')

// if( age > 20 && age <= 40  ||  money >= 100  || chel <= 10 ) {
//    console.log('Добро пожаловать!');
// } else {
//     console.log('Иди спи!');
// } 
