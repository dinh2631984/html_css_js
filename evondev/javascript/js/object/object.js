
const nss = {
    1: 2,
    3: 4,
    ns: {
        ss: "nmms",
        ssx: 'sse'
    }
}


let ss = { ... nss };
console.log(ss);
console.log(nss);
console.log('/***** Modified *****/')

ss.ns.ss = 'nms jsc';
console.log(ss);
console.log(nss);

ss =  Object(JSON.stringify(nss));
ss.ns.ss = 'nms jsc 456'
console.log(ss);
console.log(nss);