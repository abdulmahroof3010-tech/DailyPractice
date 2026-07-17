function pattern15(n){

    for(let i=n;i>=1;i--){
        let row="";
        for(let j=1;j<=i;j++){
            row+=String.fromCharCode(j+64)
        }
        console.log(row)
        }
  
    

}

pattern15(5)
pattern15(4)