// 1. Viết 1 function kiểm tra đầu vào có phải object hay không
function isObject(obj) {
    return   typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

console.log(isObject(null));
console.log(isObject([1, 2, 4, 5]));
console.log(isObject({1: 2}));

// 2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]

// object constructor
const objectConstructor = new Object();

const nss = {
    1: 2,
    3: 4,
    ns: "nmms",
    ss: {
        ssx: 'ssx',
        yyy: 'yyy'
    }
}

console.log(nss);
function without(obj , b) {
     delete obj[b];
     return obj;
}

let a = without(nss, 'ns') ;
console.log(a)
