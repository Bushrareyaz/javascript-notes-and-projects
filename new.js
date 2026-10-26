console.log(window.document);
console.dir(window.document);

/* DOM manipulation
1) detect with id 
document.getelementById("my id");

2) selecting with class 
document.getelEmentByClassname("myclass");

3) selecting with tag
document.getelEmentByTagName("P")

*/
let heading = document.getElementById(".myclass");
console.dir(heading);
let parah = document.getElementsByTagName("p");
console.dir(parah);// show as html collection

// document query selector

let elements = document.querySelectorAll("h1");
console.log(elements);

