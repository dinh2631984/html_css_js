const h1Content = document.querySelector('#heading');
// console.log(h1Content.innerHTML = '123');

// Trả về 1 Nodelist chứa danh sách các node. Nếu không có trả về empty
// Có thẻ loop nhưng không phải array nên không dùng được các array method như push, shift, pop, ...
const all = document.querySelectorAll('h2');
console.log(all);


// Trả về 1 HTML Collection. Nếu không có trả về empty
// // Có thẻ loop nhưng không phải array nên không dùng được các array method như push, shift, pop, ...
const list= document.getElementsByClassName('list');
console.log(list);
