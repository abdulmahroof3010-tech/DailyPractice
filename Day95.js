function sumNumber(nums,callback){
    let sum=0;

    for(let i=0;i<nums.length;i++){
        sum=(callback(sum,nums[i],i,nums))
    }

return sum


}

let nums = [1, 2, 3, 4];

function sumnum(sum,value,index,arr){
   
    return  sum+value
}

console.log(sumNumber(nums,sumnum))