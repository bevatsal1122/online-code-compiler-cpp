const express = require("express");
const { scanFile } = require('./scanFile')
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({content: "Hello World!"});
});

app.post("/run", async (req, res) => {
    const { language="cpp", code } = req.body;
    if (code === undefined)
    {
        return res.status(400).json({transferStatus: false, errorMessage: "Null Code"});
    }
    const filePath = await scanFile(language, code);
    return res.json({filePath});
});

app.listen(4000, () => {
    console.log("Listening on Port 4000");
});