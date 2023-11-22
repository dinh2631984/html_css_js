// 1. Đảo ngược 1 chuỗi.
const str = "You are not alone hi i";
/* 

function reverseStr(str, spliter) {
  if (!str) return null;
  return str.split(spliter).reverse().join(spliter);
}
console.log(reverseStr(str, " "));
 */
//  2. Đảo ngược 1 chuỗi và cả từng ký tự
/*  function reverseWord(str) {
  if (!str) return null;
  // return str.split('').reverse().join(''); */
/*  return str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" "); */
/*
  return str
    .split(" ")
    .reverse()
    .map((item) => reverseStr(item, ""))
    .join(" ");
}
console.log(reverseWord(str));
*/

// 3. Viết hoa mọi chữ cái đầu của chuỗi.
function capitalizeStr(str) {
  return str
    .split(" ")
    .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
    .join(" ");
}
console.log(capitalizeStr(str));
