// addEventListener
let submit = document.querySelector('.submit');
const span = document.querySelector('.submit span')
const link = document.querySelector('.link');

// span.addEventListener('click', (e) => {
//     alert('span 2');
//     // e.stopPropagation();
//     // e.stopImmediatePropagation(); // The stopImmediatePropagation() method prevents other listeners of the same event from being called.
// });
span.addEventListener('click', (e) => {
    // alert('span');
    // e.stopPropagation();   // method prevents propagation of the same event from being called.
    console.log(e.currentTarget);
    console.log(e.target);
    // e.stopImmediatePropagation();
}, { capture: false });
// submit.addEventListener('click', (e) => {
//     submit.classList.toggle('click');
// } )

submit.addEventListener('click', click, { capture: false });

function click(e) {
    submit.classList.toggle('click');
    console.log(e.currentTarget);
    console.log(e.target);
    // e.stopPropagation();
}

document.body.addEventListener('click', (e) => {
    console.log('body');
    console.log(e.currentTarget);
    console.log(e.target);
    }, { capture: false }

);

link.addEventListener('click', (e) => {
    console.log('this is the link', link);
    e.preventDefault();
})
// bubbling  Chạy click span (child) trước rồi chạy tiếp click submit (parent)
