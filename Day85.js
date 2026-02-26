function sorted(nums){
   for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            return false
        }
       
   }
   return true
}

console.log(sorted([1, 2, 3, 4]))
console.log(sorted([1, 3, 2, 4]))
console.log(sorted([1, 30, 28, 4]))

