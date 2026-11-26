const URL = "https://dogapi.dog/api/v2/breeds" ;
const fact =document.querySelector("#fact");
const btn =document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    fact.innerText = data[1];

};
btn.addEventListener("click",getFacts);