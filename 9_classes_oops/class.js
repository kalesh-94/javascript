function sirname (Sirname) {
    this.Sirname = Sirname;
    console.log(sirname);
    
  
}

function userdetails(name,roll,id){
    sirname.call(this, name)
    this.name = name
    this.roll = roll
    this.id = id
}

let user = new userdetails("kalesh", 31, 7031)
console.log(user);


// [Function: sirname]
// userdetails { name: 'kalesh', roll: 31, id: 7031 } ----> without call and this


// @kalesh-94 ➜ /workspaces/javascript/9_classes_oops (main) $ node class.js 
// [Function: sirname]
// userdetails { Sirname: 'kalesh', name: 'kalesh', roll: 31, id: 7031 }  ----> with call and this