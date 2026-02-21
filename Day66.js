function latterApper(name){
    let count=0;

    for(let i=0;i<name.length;i++){
        if(name[i]==="a"){
            count++
        }
    }
    return count

}

console.log(latterApper("banana"))