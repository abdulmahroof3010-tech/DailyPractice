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

        for(let i =0;i<str.length;i++){
            if(obj[str[i]]===1){
                return str[i]
            }
                
            }
            return null
            
        }

    

    console.log(firstUniqueChar("leetcode"))
    console.log(firstUniqueChar("lleettccoodde"))
    console.log(firstUniqueChar("leetcode"))

