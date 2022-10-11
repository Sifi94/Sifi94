//n! = 1 * 2 * ... (n-1) * n
/*
function calcFact(number)
{
    var fact=1;
    for (var i = 1; i <= number; i++)
    {
        fact = fact * i;
    }
    console.log(fact);
    return fact;
}

calcFact(5);
// Ádám megoldása
*/

/*
function calcFact (number){
    let c= 1;
    for(i = 1; i <= number; i++){
 c = c * i 
    }return c;
}
console.log(calcFact(15));
// Virág megoldása
*/

// n! = n * (n - 1)!  ez az alap függvény
// n! = n * (n - 1)! * (n - 2)!
// 1! = 1
function calcFact(number) {
    let fact 
if(number === 1) {
  return 1;
} else {  
    return (number * calcFact(number - 1));
}
}
const fact = calcFact(15);
console.log(fact);