//sync....code run in order after each instrucion
setTimeout(() =>{
    console.log("hello");
},4000)//4seconds...Async function

//function call back.
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calculator(1,2,sum);

//callback Hell...nested callbacks stacked below one another forming a pyramid structure

