const btn = document.querySelector('#click');
const menu = document.querySelector('.menu') ;
const close  = document.querySelector('.close');


if (btn !== null) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('display-ok');
    })
}

close.addEventListener( 'click', () => {
    menu.classList.toggle('display-ok');
})