function lastElement(arr){
    let last;

    for(let i=0;i<arr.length;i++){
            last=arr[i]
    }
   return last
    
// return arr[arr.length-1]

// return arr.at(-1)

}

console.log(lastElement([1, 2, 3]))
console.log(lastElement(["cat", "dog", "duck"]))
console.log(lastElement([true, false, true]))
