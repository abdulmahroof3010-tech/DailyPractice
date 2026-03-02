function largest(nums){
    let num=nums[0];
    
    for(let i=1;i<nums.length;i++){
        if(num<nums[i]){
            num=nums[i]
        }
    }
    return num
    
    
}

console.log(largest([10, 5, 80, 20, 3]))