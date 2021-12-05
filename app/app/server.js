const chalk = require("chalk");
const express = require("express");

const PORT = 3000;
const URL = "http://localhost";
const app = express();

app.get("/", (request, response) =>{
    response.json("Hello World")
})

app.get("/home", (request, response) =>{
    response.json("Welcome Home...")
    console.log(chalk.yellow("/home was requested!"))
    //Controlador
})

app.listen(PORT, () => {
    console.log(chalk.green(`server running at: ${URL}:${PORT}/`));
})