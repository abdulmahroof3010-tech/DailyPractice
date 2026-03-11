function secondLargest(nums){
    if(nums.length<2) return null

    let largest;
    let second;

    if(nums[0]>nums[1]){
        largest=nums[0];
        second=nums[1];
     }else{
        largest=nums[1];//80,
        second=nums[0];//50,
     }

     for(let i=2;i<nums.length;i++){
        if( nums[i] > largest){
               second=largest;
               largest=nums[i];

        }else if(nums[i]>second && nums[i]!== largest){
            second=nums[i]
        }
     }
     return second

}

console.log(secondLargest([10,20,50,30,80,40,4]))