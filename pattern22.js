function pattern22(n){

    for(let i=0;i<2*n-1;i++){
        let row="";
        for(let j=0;j<2*n-1;j++){
            let last=2*n-2;
            let top=i;
            let left=j;
            let bottom=last-i;
            let right=last-j;
           let min=top <left ?top  :left;
           min=min<bottom?min:bottom;
           min=min<right?min:rightpa


           let value=n-min;
           row+=value+" "

        }

        console.log(row)

    }

}

pattern22(5);
// pattern22(4);