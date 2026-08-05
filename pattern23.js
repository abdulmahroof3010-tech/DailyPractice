function pattern23(n){

    for(let i=0;i<2*n-1;i++){
        let row="";
        for(let j=0;j<2*n-1;j++){
            let top=i;
            let right=j;
            let last=2*n-2;
            let bottom=last-i
            let left=last-j;
           let min=top<left?top:left;
           min=min<bottom?min :bottom;
           min=min<right?min: right;
           let value=n-min;
           row+=value+" "
        }
        console.log(row)
    }

}

pattern23(5);