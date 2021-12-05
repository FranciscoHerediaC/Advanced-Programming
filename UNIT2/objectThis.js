const myObj = {
    name: "Luis",
    age: 24,
    greeting: function(message){
        console.log(`this is equal: ${JSONthis}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
        console.log(message);
    }
};

const Carlos = Object.create(student);
Carlos.name = "Carlos Jose";
Carlos.age = 20;
Carlos.greeting("Hola Mundo");

const Cesar = Object.create(student);
Cesar.name = "Cesar Jesus";
Cesar.age = 20;
Cesar.greeting("Hola Mundo");
Cesar.programming = function (problem){
    //Logic and computing
    console.log("Programming solution for", problem);
};
Cesar.programming("Creating an amazing Web application");
console.log(this);