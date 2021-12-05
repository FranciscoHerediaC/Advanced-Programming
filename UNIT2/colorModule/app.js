//I wanna create an app
const fs = require("fs");
const chalk = require("chalk");

const InitialMessage = chalk.blue("App running...");

console.log( InitialMessage );

fs.writeFileSync("test.txt", "Hello world");
