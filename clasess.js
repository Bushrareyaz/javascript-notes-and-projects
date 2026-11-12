//class in a program code template for creating objects.
//creating class
class ToyotaCar {
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
let fortuner=new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("Lexus");