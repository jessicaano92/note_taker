
const path = require("path");
const router = require("express").Router();

//load routes last. 
//put in a catch all at the last of the routes

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,'','./public/notes.html'));
});



router.get("*", function (req, res){
    res.sendFile(path.join(__dirname,'','./public/index.html'));
});


module.exports = router;