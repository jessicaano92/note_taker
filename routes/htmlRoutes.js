
const path = require("path");
const router = require("express").Router();

//load routes last. 



//ROUTE HANDLERS//

router.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));

});


router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
    res.end("It works!");
});



//catch all route handler 
router.get("*", function(req, res){
    res.status(404).send('something is broken');
})


module.exports = router;