function evNum(nums,callback){

    let result=[];

    for(let i=0;i<nums.length;i++){
        if(callback(nums[i],i,nums)){
            result.push(nums[i])
        }
    
    }

    return result
    

}

let nums = [1, 2, 3, 4, 5, 6];

function evenNumber(value,index,arr){
    return value%2===0

}

console.log(evNum(nums,evenNumber))