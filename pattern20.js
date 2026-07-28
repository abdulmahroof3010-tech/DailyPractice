function pattern20(n){

    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="*"
        }

        for(let k=1;k<=2*(n-i);k++){
            row+=" "
        }
        for(let r=1;r<=i;r++){
            row+="*"
        }
        console.log(row)
    }

    for(let i=n-1;i>=1;i--){
        let row="";
        for(let j=1;j<=i;j++){
            row+="*"
        }

        for(let k=1;k<=2*(n-i);k++){
            row+=" "
        }
        for(let r=1;r<=i;r++){
            row+="*"
        }
        console.log(row)
    }



}

pattern20(5)