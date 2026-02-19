function shouldServeDrink(age,onBreak){

   return age>=18 && !onBreak
}

console.log(shouldServeDrink(17, true));
console.log(shouldServeDrink(19, false));
console.log(shouldServeDrink(30, true));

