// all paths required
const express = require ("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded ({ extended: true}));
app.use(express.static("public"));      //allows for express to access files within the public folder


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




//Listener//
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


