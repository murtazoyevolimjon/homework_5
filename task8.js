function arrBetween(num1, num2, arr){
    return arr.filter(x => x > num1 && x < num2);
}

console.log(arrBetween(3, 8,[1, 5, 95, 0, 4, 7]));