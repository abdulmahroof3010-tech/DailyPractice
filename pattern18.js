function pattern18(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            let ch=n+j-i;
            row+=String.fromCharCode(ch+64)
        }
        console.log(row)
    }

}

pattern18(5)