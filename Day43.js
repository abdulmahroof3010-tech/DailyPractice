function length(char){
   if(char==="") return 0;
   return 1+length(char.slice(1));
}

console.log(length("apple"))
console.log(length("make"))
console.log(length("a"))
console.log(length(""))
