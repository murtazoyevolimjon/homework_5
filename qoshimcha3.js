function stolenItemsSum(obj){
    let values = Object.values(obj);
    return values.length === 0 ? "Lucky you!" : values.reduce((a, b)=> a + b, 0);
}

console.log(stolenItemsSum)