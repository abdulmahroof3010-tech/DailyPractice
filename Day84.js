function sum(number){
    let sum=0;
    let con=number.split("");
    
    for(let i=0;i<con.length;i++){
        sum+=Number(con[i])
    }


return sum



}

console.log(sum("1234"))