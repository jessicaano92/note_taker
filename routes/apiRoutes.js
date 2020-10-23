const router = require("express").Router();
// const store = require("../db/store");
const fs = require("fs");
const path = require("path");




router.get("/api/notes", (req, res) => {

    fs.readFile(path.join(__dirname,"../db/db.json", function(err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
        console.log(req.body);
    
}));


router.post("/api/notes", function (req, res){

    fs.writeFile(path.join(__dirname, "../db/db.json", "utf8", JSON.stringify(notes)), (err, data) =>{
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        notes.push(newNote);
        res.json(newNote);

        res.end();

    });

});





});






module.exports =  router;


