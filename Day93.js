function grtnumber(nums,callback){

    let result=[];
    for(let i=0;i<nums.length;i++){
        if(callback(nums[i],i,nums)){
            result.push(nums[i])
        }
    }
     return result

}

let nums = [5, 12, 8, 20, 3];

function greaterNumber(value,index,nums){
    return value>10;
}

console.log(grtnumber(nums,greaterNumber))