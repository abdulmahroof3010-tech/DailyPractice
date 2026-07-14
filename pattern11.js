function pattern11(n){
      
    for (let i=1;i<=n;i++){
        let row = ""
        let current=0
        
        if(i%2 !==0){
            current=1 
        }else{
            current=0
        }
        for(let j=1;j<=i;j++){
            row+=current
            current=1-current
        }
        console.log(row)
    }

}

pattern11(5)
pattern11(4)
