var myVar;
let myLet;
const myConst=3.1416;

var hoistedVariable = 25;

function aFunctionBlock(){
    if(true){
        console.log(myVar);
        var myVar=50;
        console.log(myVar);
    }
}