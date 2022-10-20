// function add(a, b) {
//     return a + b
// }

// function greeting(something) {
//         return `Hello ${something}`
// }


// let headerOne = document.querySelector('.header')
// headerOne.innerText = add(5, 9)


// let elementButton = document.querySelector('.first-button')

// let FirstInput = document.querySelector('.first-input')
// let SecondInput = document.querySelector('.second-input')

// let elementHeader = document.querySelector('.header')



// elementButton.addEventListener('click', function(){
//     let FirstInputValue = parseInt(FirstInput.value)
//     let SecondInputValue = parseInt(SecondInput.value)

//     elementHeader.innerText = FirstInputValue + SecondInputValue

//     //elementHeader.innerText = `${FirstInputValue} ${SecondInputValue}`
// })


let elementButton = document.querySelector('.first-button')
let FirstInput = document.querySelector('.first-input')
let elementHeader = document.querySelector('.header')

elementButton.addEventListener('click', function(){
    let summa = parseInt(FirstInput.value)
    let percent = 0.13
    elementHeader.innerText = `Сумма НДС со ${summa} рублей равна ${summa * percent} рублям`
})