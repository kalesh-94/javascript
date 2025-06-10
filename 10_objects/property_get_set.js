function User(mail,pass){
    this._mail = mail              /////////using function this is old method
    this._pass = pass


    Object.defineProperty(this, "mail", {
        get: function(){
            return this._mail.toUpperCase()
        },
        set: function(val){
            this._mail = val
        }
    })
    Object.defineProperty(this, "pass", {
        get: function(){
            return this._pass.toUpperCase()
        },
        set: function(val){
            this._pass = val
        }
    })
}


const user1 = new User("mahajankalesh@gmail.com", "upper@1245")

console.log(user1.mail);
console.log(user1.pass);
