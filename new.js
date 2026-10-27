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

/* properties
1. tagName = return tag for element node eg. element.tagName 
2. innerTag = return inner text of element eg. div.innetText
3. innerHTML = give all inner html with thir raspective tags. eg. div.innerHTML
4.textContent = return texted content even of hidden elements eg. element.textContent
*/

//practice-1...access h2 heading and change its inner text
let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText + "change in inner text"; // pasting this in console.

//practice-2...3 div boxes with common class name box acces then and add some unique text to each of them
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs) {
  div.innerText = "new value of div",idx;
  idx++;
}

//part 2 of DOM

//attributes get and set attributes
let className = div.getAttribute("class");
console.log(className);


//style
//.node.style;..can do changes in css js using style property

/* Insert Elements
Node.append(element);
Node.prepend(element);
Node.before(element);
Node.After(element);

*/
let newbtn = documemt.createElement("button");
newbtn.innerHTML = "click new!";
console.log(newbtn);

// to remove element
//Node.remove()





