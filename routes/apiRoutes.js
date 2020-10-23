const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs")



// router.get("/api/notes", (req,res) => {
//     store.getNotes().then(notes) => res.json(notes)
    //you will use fs.readfile('../db/db.json)
  //this is where you read the file and JSON.parse it and THEN res.json
// });






// router.post("/api/notes", (req, res) => {
    //req.body the note that you write and then you will fs.writefile('../db/db.json', 'utf8', JSON.stringify(THE NEW NOTE))
// });












module.exports = router;