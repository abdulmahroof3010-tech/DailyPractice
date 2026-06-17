function patten(n){

    for(let i=0;i<=n;i++){
        let row="";
        for(let j=i;j<n;j++){
            row+="*"
        }
        console.log(row)
    }

}

patten(5)
patten(4)