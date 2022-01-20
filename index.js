const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const http = require("http").Server(app);
var cors = require("cors");
const { argv } = require("process");
const router = express.Router();
let bodyParser = require('body-parser');

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/getP',(req,res)=>{
    let data = req.body.symptoms.toString().split(",")
    var payload = ["./hello.py"]
    data.map((item,key)=>{
        payload.push(item)
    })
    const { spawn } = require('child_process');
    const pyProg = spawn('python',payload);
    let respose = ''
    pyProg.stdout.on('data', function(data) {
        res.end(data.toString().trim())

    });
})
const server = http.listen(PORT, () => {
    console.log("Listening to port", PORT);
});