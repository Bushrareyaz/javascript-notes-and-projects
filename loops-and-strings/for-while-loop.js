//...loops are created to execute code repeatedly 
// for loop

let sum = 0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log("sum is =",sum);

// while loop 

let num = 10;
while(num <= 10){
    console.log("helllo word");
    num++ ;
}

//do while loop
do{
    console.log("hamdard");
}while(num <= 10); 


//for-of loop

let str ="bushra";
let size = 0;
for(let value in str){
    size+=1;
}
console.log(size);

//for-in loop
let fruit ={
   red : 25,
   yellow:68,
   green:310,
}
for(let key in fruit){
    console.log(fruit[key]);
}

