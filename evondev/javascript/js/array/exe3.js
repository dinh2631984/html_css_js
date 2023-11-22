/***** Flat array *****/
console.log('***** Flat array *****');
const arr = [1, 3, [5,9], 8, 6, ['n', 'm', [9, 6, [1, 'nm']]]];
console.log(arr);
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(99));