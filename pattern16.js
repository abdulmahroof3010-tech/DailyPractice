function pattern16(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=String.fromCharCode(i+64)
        }
        console.log(row)
    }
 
}

pattern16(5);
pattern16(4)