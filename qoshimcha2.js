function reverseWordst(str){
    if(typeof str === "number"){
        return str.toString().split("").reverse().join(" ")
    }

    return str.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWordst("the sky is blue"));
console.log(reverseWordst(23456));