function smallestNumber(nums){
     let smallest=nums[0];

     for(let i=1;i<nums.length;i++){
        if(nums[i]<smallest)
            smallest=nums[i]
     }

   return smallest
}

console.log(smallestNumber([10, 5, 8, 20, 15,3]))