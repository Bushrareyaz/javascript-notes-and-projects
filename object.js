//Prototype in js
//js object is an entity having state and behaviour(properties and methods js obj have a special prop called prototype)

//Object

const student ={
    name:"Bushra Reyaz",
    marks:95.5,
    printMarks:function(){
        console.log("marks=",this.marks);//this in this object will take object of this function only
    },
};

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
};
const AliyaAdiba={
    salary:50000,
    calcTax(){
        console.log("Tax is 20%");
    },
};
AliyaAdiba__proto__ = employee;
