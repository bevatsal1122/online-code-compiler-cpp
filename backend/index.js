const express = require("express");
const app = express();
app.get("/", (req, res) => {
    return res.json({content: "Hello World!"});
});
app.post("/run", (req, res) => {
    return res.json(req.body)
});
app.listen(4000, () => {
    console.log("Listening on Port 4000");
});