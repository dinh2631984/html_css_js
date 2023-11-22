function isAmstrongNumber(numberAms) {
    let num = parseInt(numberAms);
    if (!num) return false;
    if (num !== String(num).split('').reduce((a, item) => a + Math.pow(parseInt(item), 3), 0)) {
        return false;
    }
    return true;

}

function findAmstrongNumbers(start, end) {
    for ( let i = start; i <= end; i++) {
        if (isAmstrongNumber(i)) console.log(i);
    }
    return null;
}

console.log(findAmstrongNumbers(100, 371));