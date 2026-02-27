let name ={
    firstname:"mahroof",
    lastname:"rahiman",
   
}

 let printFullName=function(hometown){
        console.log(this.firstname+ " " +this.lastname+ " from " +hometown)
    }

// printFullName.call(name,"kasaragod");

printFullName.apply (name,["kasaragod"]);


let name2={
    firstname:"sachin",
    lastname:"thendulkar",

}

// printFullName.call(name2,"mumbai");


// printFullName.apply(name2,["mumbai"]);

let printmyName=printFullName.bind(name2,"Mumbi");
// console.log(printmyName)

printmyName()
 

