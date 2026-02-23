function howManyWall(n,w,h){

    let area=w*h
    let len=n/area
    return Math.floor(len)


}

console.log(howManyWall(100, 4, 5))
console.log(howManyWall(10, 15, 12))
console.log(howManyWall(41, 3, 6))
