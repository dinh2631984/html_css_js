const nameFull = "Testing JSC es   ";
/* console.log(nameFull);
console.log(typeof(nameFull))
console.log("My name is " + nameFull + ". I'm a frontend developer");
console.log(`My name is ${nameFull}. 
I'm a frontend developer`);
 */
console.log(nameFull.length);
console.log(nameFull.split(" ")); // index
console.log(nameFull.toLowerCase()); // index
console.log(nameFull.toUpperCase()); // index
console.log(nameFull.startsWith("Testing J"));
console.log(nameFull.includes("est"));
console.log(nameFull.replace("es", "NB"));
console.log(nameFull.repeat(3));
console.log(nameFull.slice(1, 4));
console.log(nameFull.trim());
console.log(nameFull.substr(2, 5)); // Get a subtring from index 2 with length is 5
console.log(nameFull.substring(2, 5)); // Get a substring from index 2 to index 5 - 1

console.log(nameFull);
const mySr2 = "   Frontend Developer D  ";
let strResult = mySr2
  .trim()
  .replace("Developer D", "Developer and Designer")
  .toUpperCase()
  .repeat(2);
console.log(strResult);
