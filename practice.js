let data = "important info";
class User{
    constructer(name,email){
        this.email=email;
        this.name=name;
    }
    viewData(){
        console.log("data = ",data);
    }
}
class Admin extends User{
    constructer(name,email){
        super(name,email);
        
    }
    editData(){
        data = "some new value";
    }
}
let student1 = new User("Bushra","abc@gmail.com");
let student2 = new User("riya","Riya@gmail.com");