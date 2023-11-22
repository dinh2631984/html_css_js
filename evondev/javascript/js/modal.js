const close = document.querySelector('.close');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

modalContainer.addEventListener('click', addCloseClass);
close.addEventListener('click', addCloseClass);
// modal.stopPropagation();
modal.addEventListener('click', (e) => e.stopImmediatePropagation());
function addCloseClass() {
    modalContainer.classList.toggle('modal-close');
    // modal2.stopPropagation();
}