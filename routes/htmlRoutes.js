
const path = require("path");
const router = require("express").Router();

//load routes last. 



//ROUTE HANDLERS//

router.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(req.body);

});


router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log(req.body);
    
});



//catch all route handler 
router.get("*", function(req, res){
    res.status(404).send('something is broken');
    console.log(req.body);

})


module.exports = router;