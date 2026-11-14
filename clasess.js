//class in a program code template for creating objects.
//creating class
/*class ToyotaCar {
      constructor(brand,mileage) {
        console.log("creating a constructor");
        this.brand = brand;
        this.mileage = mileage;
      }
      start(){
        console.log("start");

      }
      stop(){
        console.log("stop");
      }
      setBrand(brand){
        this.brand = brand;
      }
}

let fortuner=new ToyotaCar("fortuner",10);//constructor
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus",12);//constructor
lexus.setBrand("Lexus");
*/
class person{
  eat(){
    console.log("eat");
  }
  sleep(){
    console.log("sleep");
  }
  
}
class Engineer extends person{
  work(){
    console.log("solve prob,build things");
  }
}
class Doctor extends person{
  work(){
    console.log("treat patients");
  }
}
let bushraobj = new Engineer;