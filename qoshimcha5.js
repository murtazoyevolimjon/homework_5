function capMe(arr){
  return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(capMe(["mavis", "senaida", "letty"]));