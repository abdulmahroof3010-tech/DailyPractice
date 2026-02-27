function largest(nums,callback){
    let result=nums[0]

    for(let i=0;i<nums.length;i++){
        if(callback(result,nums[i],i,nums)){
            result=nums[i]
        }
          
    }
    return result

}

let nums = [10, 5, 30, 20,50];

function max(acc,value,index,arr){
    return acc<value
}

console.log(largest(nums,max))