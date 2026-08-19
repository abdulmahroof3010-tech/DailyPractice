function primeNumber(n){
    
    // let count =0;
    // for(let i=1;i<=n;i++){
    //     let divire=n%i;
    //     console.log("the divire",divire)
    //     if(n%i===0){
    //         count++
    //     }
    // }

    // return count ===2

    if(n<2) return false;

    for(let i=2;i*i<=n;i++){
        if(n%i===0){
            return false
        }
    }
    return true

}

console.log(primeNumber(2))
console.log(primeNumber(10))
