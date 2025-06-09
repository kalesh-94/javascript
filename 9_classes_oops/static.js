class User {
    constructor(name){
        this.name = name
    }


   static logme(){
        console.log(this.name);
        
    }
}

const u1 = new User("Hitesh")

u1.logme() ///------------Error due to static , it prevents to access the method inside of class

