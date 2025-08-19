function evenOddIndexSums(arr){
    let evenIndexSum = 0, oddIndexSum = 0;
    arr.forEach((num, i) =>{
        if (i % 2 === 0) evenIndexSum += num;
        else oddIndexSum += num;
    });
    return { evenIndexSum, oddIndexSum };
}

console.log(evenOddIndexSums([1,2,3,4,5,6]));