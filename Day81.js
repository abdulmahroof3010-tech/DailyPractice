function countOfNumber(n){
    n=Math.abs(n)

    if (n===0) return 0

    let count=0;

    while(n>0){
       n= Math.floor(n/10)
        count++
    }
    return count
}

console.log(countOfNumber(4))
console.log(countOfNumber(4))
console.log(countOfNumber(14))
console.log(countOfNumber(234))
console.log(countOfNumber(-234))
console.log(countOfNumber(0))