const exPress = require("express");
const router = exPress.Router();

//REST API CRUD
router.get("/raspberry", function (request, reponse){
    response.json('Led On!');
    console.log(chalk.red('Led On!'))
});

router.get("/home", function (request, reponse){
    console.log(request);
    response.json('Welcome Home!');
    console.log(chalk.red('Welcome Home!'))
});

router.post("/raspberry", (req, res) =>{
    console.log(req);
    res.send("posting...")
})

router.put();
router.delete();