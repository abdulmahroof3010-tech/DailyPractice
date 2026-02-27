function conToStr(nums,callback){
    let con=[];

    for(let i=0;i<nums.length;i++){
        con.push(callback(nums[i],i,nums))
    }
   return con

}


function convertToString(value,index,arr){
    return value.toString()
}

console.log(conToStr([10, 20, 30],convertToString))
