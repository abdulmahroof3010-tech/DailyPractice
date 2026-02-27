function strLen(words,callback){
    let result=[]

    for(let i=0;i<words.length;i++){
        result.push(callback(words[i]))
    }

    return result

}

let words = ["hi", "hello", "world"];

function stringLength(value){
    return value.length
}


console.log(strLen(words,stringLength))