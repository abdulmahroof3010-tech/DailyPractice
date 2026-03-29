    function firstUniqueChar(str){
        let obj={};

        for(let i=0;i<str.length;i++){
            let char=str[i];
            if(obj[char]){
                obj[char]++
            }else{
            obj[char]=1
            }
        }

        let val=""

        for(let i =0;i<str.length;i++){
            if(obj[str[i]]===1){
                val+=str[i]
            }
                
            }
            return val?val:null
            
        }

    

    console.log(firstUniqueChar("leetcode"))
    console.log(firstUniqueChar("lleettccoodde"))
    console.log(firstUniqueChar("leetcode"))

