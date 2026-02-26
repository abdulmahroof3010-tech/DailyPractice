function evenNumber(nums){
   let count=0;

   for(let i=0;i<nums.length;i++){
      if(nums[i]%2===0){
        count++
      }
   }

   return count


}

console.log(evenNumber([1, 2, 3, 4, 5, 6]))