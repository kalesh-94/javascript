class User {
    constructor(mail,pass){
        this._mail = mail
        this._pass = pass
    }

    get pass(){
        return this._pass.toUpperCase()
    }
    set pass(value){
        this._pass = value;
    }


    get mail(){
        return this._mail.toLowerCase()
    }
    set mail(value){
        this._mail = value;
    }

    showpass(){
        console.log(`${this.mail} this mailid has password : ${this.pass}`)
    }
}

const user1 = new User("KALESHPATIL@gmail.com", "@abcd12334")
console.log(user1.showpass());
