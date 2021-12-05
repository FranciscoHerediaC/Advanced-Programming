import { type } from "os";

const device = {
    sesorModel: "HC04",
    count: 0,
    date: new Date(),
}

console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);
//Crear un JSON desde code

const myJson = '{"name": "Luis", "Edad": 24, "Friends:" ["Rafa", "Angelo"], "isMannager:" false}';
console.log(myJson, typeof myJson);

//Manipular JSON
const myObj = JSON.parse(myJson);
console.log(myObj.name);