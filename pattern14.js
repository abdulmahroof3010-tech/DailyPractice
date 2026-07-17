function pattern14(n){

    for(let i=1;i<=n;i++){
        let row="";
    for(let j=1;j<=i;j++){
        row+=String.fromCharCode(j+64)
        }
    console.log(row)
    }

}

pattern14(5);
pattern14(4)