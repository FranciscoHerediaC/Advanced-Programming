import { cp } from "fs";

const myObj = {
    name: "Luis",
    age: 24,
    greeting: function(message){
        console.log(`this is equal: ${JSONthis}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
        console.log(message);
    }
};

const cpyStudent = Object.assign(student);
cpyStudent.NAME = "Fernando";
console.log(student);
console.log(cpyStudent);