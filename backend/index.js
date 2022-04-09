const express = require("express");
const cors = require('cors');
const { scanFile } = require('./scanFile');
const { runFile } = require('./runFile');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({content: "Hello World!"});
});

app.post("/run", async (req, res) => {
    const { language="cpp", prbName, code } = req.body;
    if (code === undefined)
    {
        return res.status(400).json({transferStatus: false, errorMessage: "Null Code"});
    }
    try {
    const filePath = await scanFile(language, code);
    const userOutput = await runFile(filePath, prbName);
    return res.json({filePath, userOutput});
    } catch(err) {
        res.status(400).json(err.stderr);
    }
});

app.listen(4000, () => {
    console.log("Listening on Port 4000");
});