//Crate an Array

var myArray = [1,2,3,4,5]; 
// var myArray2 = new Array(1,2,3);
//Longitud de Arrays
const ln = myArray.length;
console.log(ln);

//Show Array;

console.log(myArray);

//Iterate Array

for(let i = 0; i < ln; i++){
    console.log(myArray[i]);
}

for(let index in myArray){
    console.log(myArray[index]);
}

for(let i of myArray){
    console.log(i);
}

//Adding Elements
let data = [];
console.log(data);
const temp = 27;
data.push(temp);
data.push(30);

//Insert first Element
data.unshift(12);
console.log(data);
//Insert multiple data
data.splice(2,0, 3,4);
console.log(data);

//Delete Elements
data.pop();
data.shift();
data.splice(1,3);
console.log(data);

//Copiar

var friends = ["Luis", "Rafael", "Carla"];
//para copiar:
var bestFriend = friends;
bestFriend.shift();

console.log(friends);
console.log(bestFriend);

//Restar 2 a las edades
//var edades = [20,22,23,24];
//edades=edades.map( function (currentValue, index){
//    return currentValue-2);
//}

//for(let i = 0; i < edades.length; i++){
//    edades[i] = edades[i-2];
//}
//console.log(edades);