function starPattern(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=i;j<=n;j++){
            row+="*"
        }
        console.log(row)
    }

}
starPattern(5)
starPattern(4)
starPattern(2)
