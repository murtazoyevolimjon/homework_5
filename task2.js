function getOddValue(arr){
    return arr.filter(num => num % 2 === 0);
}

console.log(getOddValue([1,2,3,6]));