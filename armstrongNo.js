 function armStrongNumber(n){
    let orginal=n;
    let temp=n;

    let digit=0;
    while(temp>0){
        digit++;
        temp=Math.floor(temp/10)
    }

    let sum=0;
    while(n>0){
        let last=n %10;
       sum+= Math.pow(last,digit);
       n=Math.floor(n/10);
        
    }
    return orginal===sum



 }

 console.log(armStrongNumber(153))