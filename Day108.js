function moveZero(nums){
    let left=0;

    for(let right=0;right<nums.length;right++){
        if(nums[right] !==0){
            let temp=nums[right];
            nums[right]= nums[left];
            nums[left]=temp;
            left++;
        }
    }

    return nums


}

console.log(moveZero([2,3,0,5,0,5,4,0,12]))