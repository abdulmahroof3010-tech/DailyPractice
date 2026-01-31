function convet (hours,minutes){
    let hoursConvet=hours*3600
    let minutesConvet=minutes*60

    return hoursConvet+minutesConvet

}

console.log(convet(1,3))
console.log(convet(2,0))
console.log(convet(0,0))
