// Arrays=collection of item of same or different data type

let Marks = [78,90,56,83,21,71];
let heroes = ['spiderman', 'hulk','batman','thor',];
let Indheroes = ['shaktiman','krish'];

console.log(Marks);//will print orinal array
console.log(Marks.length);
console.log(heroes);
Marks[1] = 89;
console.log(Marks); //change value of 2nd element...arrays are Mutable..(value can be changed)

// looping in Arrays
sum = 0;
for(let i=0 ; i < Marks.length ; i++){
    console.log(Marks[i]);
    sum += Marks[i];
    console.log(sum);
    
}

// methods in Arrays
//pop()..delete last element
//push()..add element at end
//Marks.toLocaleString()..convert marks to strings
//marks.concat(heroes)...add two strings
//shift()..dekete element from start
//unshift()..add element to start
//slice(start,end)..same as slice works
//splice(start,delete,add element)..




