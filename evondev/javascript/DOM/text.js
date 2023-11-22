// 1. textContent :  Nội dung giữa các thẻ tag.  Nếu có html tag nó vẫn lấy nội dung và remove thẻ tag đi và lấy cả khoảng trắng, xuống hàng
const spin = document.querySelector('li:last-child');
console.log(spin.textContent);

// 2 .innerText:  Loại bỏ hết khoảng trắng và xuống hàng 2 bên và cả html tag bên trong
console.log(spin.innerText);

//3. innerHTML: lấy toàn bộ nội dung kể cả html tag bên trong
console.log(spin.innerHTML);