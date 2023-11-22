/*
const h1 = document.createElement('h1');
document.body.appendChild(h1);
*/

/*
const body = document.body;
const div = document.createElement('div');
div.classList.add("card");
// document.body.appendChild(div);

const img = document.createElement('img');
// img.classList.add('card-image');
img.setAttribute('class', 'card-image');
img.setAttribute('src', 'https://source.unsplash.com/random')
img.setAttribute('alt', 'random image');
div.appendChild(img);
body.appendChild(div);

const text = document.createTextNode('Hello this is my H1 heading');
const h1 = document.createElement('h1');
h1.appendChild(text);
body.appendChild(h1);

const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

h1.insertAdjacentText('afterbegin', 'afte');
h1.insertAdjacentText('beforebegin', '123');
*/

const span = document.body.querySelector('span');
console.log(span.parentNode);
console.log(span.parentElement);
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
span.parentNode.removeChild(span);
