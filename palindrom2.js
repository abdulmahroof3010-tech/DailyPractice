function palindrom2(n){
    let orginal=n;
    let reversed=0;

    while(n>0){
        let last =n%10;
        reversed=reversed*10+last;
        n=Math.floor(n/10)
    }

  return orginal===reversed

}

console.log(palindrom2(4554))
console.log(palindrom2(7789))
