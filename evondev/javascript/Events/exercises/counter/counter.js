const increase = document.querySelector('.counter-increase');
const decrease = document.querySelector('.counter-decrease');
const value = document.querySelector('.counter-value');
let valueInt = parseInt(value.innerText);

increase.addEventListener('click', increaseCounter);
decrease.addEventListener('click', decreaseCounter);
function decreaseCounter() {
    if ( valueInt !== 0 ) {
        value.innerText= --valueInt;
    }
}

function increaseCounter() {
    // let valueInt = parseInt(value.innerText);
    // valueInt++;
    value.innerText=++valueInt;
}