function wordLarge(words,callback){
    let output=[];
    for(let i=0;i<words.length;i++){
        if(callback(words[i],i,words)){
            output.push(words[i])
        }
    }

    return output

}
let words = ["cat", "elephant", "dog", "tiger"];

function largestWord(value,index,arr){
    return value.length>3;
}

console.log(wordLarge(words,largestWord))