function sum(str){
    
    let sum=0;
    for(let i=0;i<str.length;i++){
        sum+=Number(str[i])
        
    }
    return sum
    
    
}

console.log(sum("1234"))//10