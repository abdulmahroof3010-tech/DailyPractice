function double(number,callback){
    let result=[];

    for(let i=0;i<number.length;i++){
        result.push(callback(number[i],i,number))
            
        
    }
  
return result

}

let numbers=[2,4,5,6]

function doubling(value,index,arr){
    return value*2
}

console.log(double(numbers,doubling))
console.log(double([1,2,3,4],doubling))
