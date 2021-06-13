//question 1
let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedfoods = foods.slice(1,4);
console.log(modifiedfoods);
// question 2
 let modifiedfood= foods.splice(1,0,"noodles", "icecream", "fingerShips");
 console.log(foods);
 // question 3
 let numberArray = [12,324,213,4,2,3,45,4234];
 let iseven = (Array) =>{
        return Array.filter(item =>(item %2 == 0))
 }   
 let result = iseven(numberArray);
 console.log(result);
 let isprime = (array) =>{
     return array.filter(function test_prime(n){
        if (n===1) {
          return false;
        }else if(n === 2){
          return true;
        }else{
          for(var x = 2; x < n; x++){
            if(n % x === 0){
              return false;
            }
          }
          return true;  
        }
      })
         
    }
// question 4
let nonprime= (array)=>{
    return array.filter(function test_prime(n){
        if (n===1) {
          return true;
        }else if(n === 2){
          return false;
        }else{
          for(var x = 2; x < n; x++){
            if(n % x === 0){
              return true;
            }
          }
          return true;  
        }
      })
         
    }
// q5 rewriting using lambda
let iseven = (array) =>{
    return array.filter(item =>(item %2 == 0));
}   
//q6 map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (array) =>{
    return array.map(item => item*item);
}
console.log(findSquareOfNumbers(myArray));
//q7 reduce
const myarray=[1,2,3,4,5]
let multiply = (array) =>{
    return array.reduce(function(init,acc){
        return init*acc;
    });
}
console.log(multiply(myarray));