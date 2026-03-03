function count(nums){
    let count={};

    for(let i=0;i<nums.length;i++){
        let num=nums[i]

        if(count[num]){
            count[num]=count[num]+1
        }else{
            count[num]=1
        }
    }
    return count

}

console.log(count([1,2,2,3,1,4,2]))