// let promise = new Promise((resolve,regret) => {
//     console.log("I am a promise");
//     //reject("some error occured");
//     resolve("success");
// });

 function getData(dataId){
    return new Promise((resolve,reject) => {
         setTimeout(() => {
             console.log("data",dataId);
            resolve("success");

         },5000) //5s
     });
 }
getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
    });    
});

const getPromise=() => {
    return new Promise((resolve,reject) => {
        console.log("its a promise");
        resolve("successful");
    });
}
let promise = getPromise();
promise.then((res) => { //.then if promise fulfilfilled
    console.log("promise is fulfilled",res);
});
promise.catch((err) => {
    console.log("rejected",err);
})