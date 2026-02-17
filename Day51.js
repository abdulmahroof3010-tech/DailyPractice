function equation(str){
   let nums=[];
   let ops=[];
   let num="";

   const precedence =(op)=>(op==="+" ||op==="-")?1:2;

   const applyOp=()=>{
    const b=nums.pop();
    const a =nums.pop();
    const op=ops.pop();

    if(op==="+")nums.push(a+b);
    if(op==="-")nums.push(a-b);
    if(op==="*")nums.push(a*b)
   };

   for( let ch of str){
    if(!isNaN(ch)){
        num+=ch;

    }else{
        nums.push(Number(num));
        num="";


        while(
            ops.length &&
            precedence(ops[ops.length-1])>=precedence(ch)
        ){
            applyOp();

        }

        ops.push(ch);

    }
   }

   nums.push(Number(num))

   while(ops.length){
    applyOp()
   }

   return nums[0];


}

console.log(equation("1+1"))
console.log(equation("7*4-2"))
console.log(equation("1+1+1+1+1"))

