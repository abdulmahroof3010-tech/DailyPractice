let prm=new Promise((resolve,reject)=>{
    console.log("Executor function");
    // resolve({id:"101",name:"mahroof"})
  reject("failure");

})

prm.
then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});

const prm1=new Promise((resolve,reject)=>{
    console.log("water as to started to boil ...");
    setTimeout(()=>{
      console.log("water as been boiled");
      resolve ();
    },3000)

});

prm1
 .then(()=>{console.log("promise fulfilled" )})
.catch(()=>{console.log("promise failed")});

setTimeout(()=>{
    console.log("Macro Task")
},4000)



