let digits = document.querySelectorAll('.digit');
let currTime = 0;

let count = function(){
    currTime+= 10;
    if(currTime > 10 * 1000){
        digits.forEach((digit) => digit.style.color = 'red');
        return;
    }
        setDigit(digits[4], 10, currTime);
        setDigit(digits[3], 100, currTime);
        setDigit(digits[1], 1000, currTime);
        setDigit(digits[0], 10000, currTime);   
}

function setDigit (el, divi, curr){
    let digit = Math.floor(curr / divi) % 10;
    el.textContent = digit;
}

setInterval(count, 10);