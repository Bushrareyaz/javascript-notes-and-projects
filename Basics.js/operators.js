// Arithematic operators 

let a = 6;
let b = 8;
console.log("a =",a,"& b =",b);
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);

//increament opeartor Post-Increment(a++) a is variable,a is incremented to 1.Fist print then decrease.
 
let x = 6;
let y = 4;
console.log("x =",x,"& y =",y);
console.log("x++ =",x++);
console.log("y-- =",y--);
console.log("increament of x is ",x);
console.log("decreament of y is ",y);

//Pre-increment(++a and --a).first inc or dec then print.

let x1 = 10;//integer
let y1 = 11;//integer

console.log("x1 =",x1,"& y1 =",y1);
++x1;
--y1;
console.log("increament of x1 is ",x1);
console.log("increament of y1 is ",y1);

//Comparison Operator

z1="10";//we take 10 bcz prev decr operatior now y1 is 10.
console.log("z1 =",z1);
console.log("z1 == y1",z1 == y1); //string -> integer
console.log("z1 === y1",z1 === y1); //=== is stricter version 
console.log("x1 == y1",x1 == y1); //false
console.log("x1 != y1",x1 != y1); //true 

//logical operators. && , || , !

num1 = 15;
num2 = 25;
console.log("num1 =",num1,"num2 =",num2);
console.log("and opearator on num1 and num2 is ",num1 < num2 && num1 == 15);//&& opeartor true if both conditions are true.
console.log("or operator on num1 and num2 ",num1 == 15 || num1 >= num2);// || opearator true if any one condition is true.
console.log("not operator ",!(num1 >= num2));// ! operator oppose the original condition.




















