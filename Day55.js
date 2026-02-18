function reverse(arr){
//    return arr.reverse()
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
   return result
}

console.log(reverse([1, 2, 3, 4]))
console.log(reverse([9, 9, 2, 3, 4]))
console.log(reverse([]))
