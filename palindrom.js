function palindrom(n){
    let orginal=n;
    let reverse=0;


    while(n>0){
        let last=n%10;
        reverse=reverse*10+last;
        n=Math.floor(n/10);

          }
          if(orginal ===reverse){
            return true
          }
          return false

}

console.log(palindrom(121))
console.log(palindrom(123))
console.log(palindrom(1221))
