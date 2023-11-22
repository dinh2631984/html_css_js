// addEventListener
let submit = document.querySelector('.submit');
const span = document.querySelector('.submit span')

// span.addEventListener('click', (e) => {
//     alert('span 2');
//     // e.stopPropagation();
//     // e.stopImmediatePropagation(); // The stopImmediatePropagation() method prevents other listeners of the same event from being called.
// });
span.addEventListener('click', (e) => {
    alert('span');
    // e.stopPropagation();   // method prevents propagation of the same event from being called.

    // e.stopImmediatePropagation();
}, { capture: true });
// submit.addEventListener('click', (e) => {
//     submit.classList.toggle('click');
// } )

submit.addEventListener('click', click, { capture: true });

function click(e) {
    submit.classList.toggle('click');
    // e.stopPropagation();
}

document.body.addEventListener('click', () => console.log('body'), { capture: true }
);

// bubbling  Chạy click span (child) trước rồi chạy tiếp click submit (parent)
