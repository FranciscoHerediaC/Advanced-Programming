//console.log{addTwoNumbers(2,3))};
console.log(addFullnumbers(1,2,3));

function addTwoNumbers(parameter1, parameter2){ //Expression!
    return parameter1 + parameter2;
};

const AddFullNumbers = function (){
        const Numbers = [...arguments]
        const add = numbers.reduce(function(ace, currentValue, currentIndex, array){
            return acc = acc+currentValue;
        }, ace = 0)
        return add;
};

//Arrow function
function getName(firstName, lastName){
    return `${firstName} ${lastName}`; 
}

function sayHello(callback){
    console.log(`Hello ${callback(first, last)}`);git
}

sayHello(getName, "Luis","Gerardo");

const arrowFunction = (parameter11, parameter22) => {return parameter11*parameter22};
console.log(arrowFunction(2,5));