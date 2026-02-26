let nums = [ 10 , 20 , 30 , 40 , 20 , 10 , 60 ];

function removeDup(nums){
    let result=[];
    
    for(let i=0;i<nums.length;i++){
   let isDuplicate=false;
        for(let j=0;j<result.length;j++){
            if(nums[i] == result[j]){
                isDuplicate=true;
               
            }
            }
            if(!isDuplicate){
                result.push(nums[i])
        }
    }
    return result
}



console.log(removeDup(nums))