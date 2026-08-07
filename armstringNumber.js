function armstrongNumber(n){
    let orginal=n;
    let temp=n;
    let sum=0;
    let count=0;

    while(temp>0){
        count++;
        temp=Math.floor(temp/10)
    }
   

   while(n>0){
    let last=n%10;
    let power=1;
    
    for(let i=1;i<=count;i++){
      power=power*last
    }

    sum+=power
    n=Math.floor(n/10)


   }
    console.log(sum)
  return sum=== orginal;
    


}
console.log(armstrongNumber(153))


let power=1;

for(let i=1;i<=4;i++){
    power=power*7
}
console.log(power)