function divisor(n){
    
    let number=[];

    // for(let i=1;i<=n;i++){
    //     if(n%i===0){
    //         number.push(i)
    //     }
    // }
    // return number

    for(let i=1;i*i<=n;i++){
        if(n%i===0){
            number.push(i)
            number.push(n/i)
        }

    }
    return number

}


console.log(divisor(36))
console.log(divisor(100))
console.log(divisor(12))