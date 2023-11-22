// Chỉ dùng với 1 node
const attrNode = document.querySelector('a');
console.log( attrNode.getAttribute('href'));
attrNode.removeAttribute('class');
attrNode.setAttribute('class2', 'nms');

console.log(attrNode.hasAttribute('href'));
console.log(attrNode.hasAttributes());