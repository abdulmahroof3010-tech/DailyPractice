function GCD(n1,n2){

//     let gcd=0;
//     for(let i=1;i<n1 && i<n2;i++){
//         if(n1%i===0 && n2 %i===0){
//             gcd=i
//         }    }
//  return gcd
  
     while(n2 !==0){
        let reminder=n1%n2;
        n1=n2;
        n2=reminder
     }
     return n1
}

console.log(GCD(9,12))