function largestNumber(nums){
  let largest=nums[0];
  for(let i=0;i<nums.length;i++){
      if(nums[i]>largest){
        largest=nums[i]
      }
  }

  return largest

}

console.log(largestNumber([10, 5, 8, 20, 15]))