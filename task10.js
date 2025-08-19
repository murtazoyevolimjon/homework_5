function arrayValuesTypes(arr){
    return arr.map(x => typeof x);
}

console.log(arrayValuesTypes([1,2, "salom"]));