function pattern17(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n-i;j++){
            row+=" ";
     }
     for(let k=1;k<=i;k++){
        row+=String.fromCharCode(k+64)
     }
     for(let k=i-1;k>=1;k--){
        row+=String.fromCharCode(k+64   )
     }
     console.log(row)
    }


}

pattern17(5)