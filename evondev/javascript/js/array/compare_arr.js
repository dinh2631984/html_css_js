let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr1;
console.log( arr1 === arr2);
console.log( JSON.stringify(arr1) === JSON.stringify( arr2));
console.log( arr1 === arr3);

arr1[0] = 10;
console.log(arr3)

console.log(JSON.stringify(arr1));

JSON.parse('[1, 2, 3]');