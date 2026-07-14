function pattern12(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=j
        }
    for(let k=1;k<=2*(n-i);k++){
        row+=" "
    }
    for(let r=i;r>=1;r--){
        row+=r
    }
    console.log(row)
    }

}

pattern12(5);
pattern12(4)