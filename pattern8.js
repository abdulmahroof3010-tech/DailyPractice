function pattern7(n){

    for(let i=n;i>=1;i--){
        let row="";
        for(let j=1;j<=n-i;j++){
            row+=" ";
        }
        for(let k=1;k<=2*i-1;k++){
            row+="*"

        }
        console.log(row)
        
    }
    
}

pattern7(5);
pattern7(4);