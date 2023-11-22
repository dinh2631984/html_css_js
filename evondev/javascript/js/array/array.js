let listNumber = [3, 2, 3, 4, 5, 6];

console.log(listNumber.reduce( (a, element) => a + element, 4 ));
console.log(listNumber);


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 20;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10