Array.prototype.myMap = function(callback) {
    let result=[];
    for(let i=0;i<this.length;i++){
    result.push(callback(this[i],i,this))
    
}
return result
       
}



function double(value,index,srr){
    return value*2
}

console.log([2,4,5,6].myMap(double))

