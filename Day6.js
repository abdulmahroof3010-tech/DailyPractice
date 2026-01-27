function footballPoint(win ,draw,losses){

    let point=win*3
    let point1=draw*1
    let point2=losses*0

    let totalPoint=point+point1+point2

    return totalPoint
}

console.log(footballPoint(3,4,2))
console.log(footballPoint(5,0,2))
console.log(footballPoint(0,0,1))
