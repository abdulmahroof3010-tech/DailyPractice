function pattern19(n){
    
//     for(let i=n;i>0;i--){
//         let row="";
//         for(let j=0;j<i;j++){
//             row+="*"
//     }

//        for(let k=1;k<=2*(n-i);k++){
//         row+=" "
//     }
//     for(let r=0;r<i;r++){
//        row+="*"
//     }
//   console.log(row)
//     }

//     for(let i=1;i<=n;i++){
//         let row="";
//         for(let j=1;j<=i;j++){
//             row+="*"
//         }
 
//         for(let k=1;k<=2*(n-i);k++){
//             row+=" "
//         }

//         for(let r=1;r<=i;r++){
//             row+="*"
//         }

//         console.log(row)
//     }

for(let i=1;i<=2*n;i++){
    let star;
    if(i<=n){
        star=n-i+1
 }else{
    star=i-n
 }

 let row="";
  for (let j = 1; j <= star; j++) {
            row += "*";
        }
       for(let k=1;k<=2*(n-star);k++){
        row+=" "
    }
    for(let r=1;r<=star;r++){
       row+="*"
    }
  console.log(row)
    
}

}

pattern19(5);