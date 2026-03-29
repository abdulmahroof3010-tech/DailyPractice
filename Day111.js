function maxNum(nums){
    let max=nums[0];
    for (let i=0;i<nums.length;i++){
        if(max<nums[i]){
            max=nums[i]
        }
    }
    return max

}

console.log(maxNum([3,7,2,9,5]))
console.log(maxNum([-3,-7,-2,-9,-5]))
