function vowels(name){
     let number=0;
     let char=["a","e","i","o","u"]

     for(let i=0;i<name.length;i++){
       for(let j=0;j<char.length;j++){
         if(name[i]===char[j]){
            number++
         }
       }
     }
     return number

}

console.log(vowels("javascrip"))