import { model } from './model'
import { disDisplay, disButtons } from './templates';


const $calc = document.querySelector('.calculator');

model.forEach (block => {
    
    let html = '';

    if (block.type === 'display'){
        html = disDisplay(block)
    }else if (block.type === 'buttons'){
        html = disButtons(block)
    };

    $calc.insertAdjacentHTML('beforeend', html)
})

export let numbers = document.querySelectorAll('.num'),
    signs = document.querySelectorAll('.sign'),
    decimal = document.querySelector('.decimal'),
    ac = document.querySelector('.clear'),
    plusMinus = document.querySelector('.plus-minus'),
    procent = document.querySelector('.procent'),
    outText = document.querySelector('#display'),
    currentNumber = '0',
    newNumber = false,
    pendingOper = '';

for (let i = 0; i < numbers.length; i += 1){
    let number = numbers[i];
    number.addEventListener('click', function (el){
        console.log (el)
        pressButt(el.textContent)
    })
}

function pressButt (number) {
    if (newNumber) {
        outText.textContent = number;
        newNumber = false;
    }else{
        if (outText.textContent === '0'){
            outText.textContent = number;
        }else{
            outText.textContent += number
        }
    }
}