function incrementItem(arr){
   

    for(let i=0;i<arr.length;i++){
        arr[i]++
        
        
    }
    return arr
    

}

console.log(incrementItem([0, 1, 2, 3]));
console.log(incrementItem([2, 4, 6, 8]));
console.log(incrementItem([-1, -2, -3, -4]));
