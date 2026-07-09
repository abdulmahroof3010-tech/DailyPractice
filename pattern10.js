function pattern10(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="*"
        }
        console.log(row)
    }

    for(let i=n-1;i>=1;i--){
        let row="";
        for(let j=i;j>=1;j--){
            row+="*"
        }
        console.log(row)
    }

}

pattern10(5)