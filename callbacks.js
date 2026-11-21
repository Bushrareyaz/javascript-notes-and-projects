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

function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("hello",dataId);
        if(getNextData){
            getNextData();
        }

    },2000) ;//2s
    
}
//call back hell example
getData(1,() =>{
    console.log("getting data 2.....");
    getData(2,() => {
        console.log("getting data 3.....");
        getData(3,() => {
            console.log("getting data 4.....");
            getData(4);
        });
    });

});

