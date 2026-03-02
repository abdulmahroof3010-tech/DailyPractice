function reverseString(str){
 let result="";

//  for(let i=0;i<str.length;i++){
//     result=str[i]+result
//  }

for(let i=str.length-1;i>=0;i--){
    result+=str[i]
}

 return result

}

console.log(reverseString("hello"))