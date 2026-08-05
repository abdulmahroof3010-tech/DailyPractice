function countDigit(n){
    if(n===0) return 1;
    let count=0;


    while(n>0){
        count++
       
       n=Math.floor(n/10)
      
    }
    
    return count

}
console.log(countDigit(12345));
console.log(countDigit(7789))
console.log(countDigit(0))