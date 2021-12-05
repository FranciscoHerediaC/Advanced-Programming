import {chalk} from "chalk"

class Device {
    constructor(Name, model, noLeds, location){
        this.name = Name;
        this.model = model;
        this.noLeds = noLeds;
        this.location = location;
    };
    turnOnLed(){
        console.log('Led turned On...');
    }
};

//instanciar Objecto
const cesar = new Device("MyFirstDevice", "RaspberryPi4", 2, 1000);
cesar.turnOnLed();