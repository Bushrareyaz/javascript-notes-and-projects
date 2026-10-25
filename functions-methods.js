 /*function - Block of code to perform specific task can be invoked whenever needed.
function functname(){
     do some work
 } 

functname(); ....function call

 function functname(parameter 1, parameter 2){
          do some work 
 
}
  */
 //sum of two numbers
 function sum(x,y) {
    sum = x +y;
    return sum;

 }

 let result = sum(3,4);
 console.log(result);

 // Arrow function
const val=(a,b) => {
    return a+b;
}
let answer=val(12,12);
console.log(answer); 

// forEach  loop in Array..arr.forEach(callback function);
// callback function - execute for each elmeent in array..also forEach is HIGHER ORDER FUNCTION.
let arr = [1,2,3,4,5,6,7];
arr.forEach((i) => {
    console.log(i);

});
// square on array
let calcsquare = (num) => {
    console.log(num*num) ;
}
arr.forEach(calcsquare);

//methods map;..return value with some operation..its value use to make new array
let newarr = arr.map((item) =>{
    return item*2 ;

})
console.log(newarr);

//filter method ...create new array that give true for givenn condition

let arr2 = arr.filter((even) => {
    return even%2 === 0 ;

})
console.log(arr2);

// reduce method return single value
let array = [1,2,3,4];
const output = array.reduce((res,curr) => {
    return res+curr;
})
console.log(output);

// user input ...make array 1 to n
let n = prompt("enter a number");
let userarr = [];
for(let j=0 ; j<n ; j++){
    userarr[j];
}
console.log(userarr);
//factorial
let m = [1,2,3,4,5];
let factorial = m.reduce((res,curr) => {
    return res*curr ;

})
console.log("factorial is",factorial);


 
 
