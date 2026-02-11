function calculateFuel(distance){
    let fuel=distance*10
    if(fuel>100){
        return fuel
    }
    return 100


}

console.log(calculateFuel(15))
console.log(calculateFuel(23.5))
console.log(calculateFuel(3))
