function calculator(expr){
    let nums=[]
    let ops =[];
    let num="";

    const precedence=(op)=>(op==="+" ||op==="-")?1:2;

    const applyOp=()=>{
        const b=nums.pop();
        const  a=nums.pop();
        const op=ops.pop();

if(op==="+") nums.push(a+b);
if(op==="-") nums.push(a-b);
if(op==="*") nums.push(a*b);
if(op==="/") nums.push(a/b);


    }

    for (let ch of expr){
        if(!isNaN(ch)){
            num+=ch;
        }else{
            nums.push(Number(num))
            num="";

            while(
                ops.length &&
                precedence(ops[ops.length-1])>=precedence(ch)
            ){
                applyOp();
            }
            ops.push(ch)

        }
    }
    nums.push(Number(num));

    while(ops.length){
        applyOp();
    }

    return nums[0];
   
}

console.log(calculator("23+4"))

console.log(calculator("45-15") )

console.log(calculator("13+2-5*2") )


console.log(calculator("49/7*2-3") )