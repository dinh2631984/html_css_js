const listC = document.querySelectorAll('.list:nth-child(2n)');
console.log(listC);
// selector.classList.add('is-green');
for (let a of listC) {
    a.classList.add('is-green');
}

// select.className
let listB = document.querySelectorAll('.list');
for (let a of listB) {
    console.log(a.className);
}


// selector.classList.remove('is-green');
for (let a of listC) {
    a.classList.remove('list');
}

// selector.classList.contains('list');
for (let a of listC) {
    a.classList.contains('list');
}

let listA = document.querySelectorAll('.list');
// selector.classList.toggle('list');
for (let a of listA) {
    a.classList.toggle('list');
}

for (let a of listB) {
    a.className = '12323 54545454';
}