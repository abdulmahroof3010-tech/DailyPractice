function countTotalChar(words,callback){
    let count=0;

    for(let i=0;i<words.length;i++){
        count=(callback(count,words[i],i,words))
    }

    return count

}

let words = ["hi", "hello", "world"];

function countChar(acc,value,index,arr){
    return  acc+value.length

}

console.log(countTotalChar(words,countChar))

