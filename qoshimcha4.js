function removeABC(str){
    if (!/[abc]/.test(str)) return null;
    return str.replace(/[abc]/g, "");
}

console.log(removeABC("This might be a bit hard"))