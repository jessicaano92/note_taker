const router = require("express").Router();
// const store = require("../db/store");
const fs = require("fs");
const path = require("path");




router.get("/api/notes", (req, res) => {

    fs.readFile(path.join(__dirname, "../db/db.json", function(err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    
}));


// router.post("/api/notes", (req, res) => {
    //req.body the note that you write and then you will fs.writefile('../db/db.json', 'utf8', JSON.stringify(THE NEW NOTE))
// });












module.exports = router;