const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const http = require("http").Server(app);
var cors = require("cors");
const { argv } = require("process");
const router = express.Router();
let bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { exec } = require("child_process");

exec("python hello.py", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});



app.get('/hello',(req,res)=>{
   res.end("Hello")
})
const server = http.listen(PORT, () => {
    console.log("Listening to port", PORT);
});