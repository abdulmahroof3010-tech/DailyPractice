function acceptIntoMovie(age,isSupervised){

    return age>=15 || isSupervised
}

console.log(acceptIntoMovie(14,true));
console.log(acceptIntoMovie(14,false));
console.log(acceptIntoMovie(16,false));

