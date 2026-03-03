function secondLargest(nums){
    let largest=nums[0]
    
     
    for(let i=1;i<nums.length;i++){
        if(largest<nums[i]){
            largest=nums[i]
        }
    }

    let second=null;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==largest){
            if(second===null || nums[i]>second){
                second =nums[i]
            }
        }
    }

    return second
}

console.log(secondLargest([10, 5, 80, 20, 3]))