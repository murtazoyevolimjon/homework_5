function arrayOfMultiples(num, length, arr = []){
    if (arr.length === length) return arr;
    return arrayOfMultiples(num, length, [...arr, num * (arr.length + 1)]);
}

console.log(arrayOfMultiples(7,5));
console.log(arrayOfMultiples(12,10));