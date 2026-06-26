function numPattern(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n-i+1;j++){
            row+=j
        }
        console.log(row)
    }



}
numPattern(5)
numPattern(4)