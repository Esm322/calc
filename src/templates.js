

export function disDisplay(){
    return `
    <div class="display">
        <input disabled id="display" type="text" value="0">
    </div>
    ` 
}

export function disButtons (){
    return `
    <div class="buttons">
        <button class="btn bg-grey clear">AC</button>
        <button class="btn plus-minus bg-grey">+/-</button>
        <button class="btn procent bg-grey">%</button>
        <button class="btn sign bg-orange">/</button>
        
        <button class="btn num bg-lightblack">7</button>
        <button class="btn num bg-lightblack ">8</button>
        <button class="btn num">9</button>
        <button class="btn sign bg-orange">x</button>
        
        <button class="btn num">4</button>
        <button class="btn num">5</button>
        <button class="btn num">6</button>
        <button class="btn sign bg-orange">-</button>
        
        <button class="btn num">1</button>
        <button class="btn num">2</button>
        <button class="btn num">3</button>
        <button class="btn sign bg-orange">+</button>
        
        <button class="btn num zero">0</button>
        <button class="btn decimal">.</button>
        <button class="btn sign bg-orange">=</button>
    </div>
    `
}



