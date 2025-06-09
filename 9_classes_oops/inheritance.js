class Student {
    constructor(stdname){
        this.stdname = stdname;
    }

    logme(){
        console.log(this.stdname);
        
    }
}


class Teacher extends Student{
    constructor(tname, stdname, mail){
        super(stdname)
        this.tname = tname
        this.mail = mail
    }

    alldetails(){
        console.log(`${this.stdname} this student is teach by ${this.tname} this teacher and his mailid is ${this.mail}`);
        
    }
}

let teacher1 = new Teacher("Tony", "Tom", "tonystark@mail.com")

teacher1.alldetails();



let student1 = new Student("Tomy")
student1.logme();

console.log(student1===teacher1);
