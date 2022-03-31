const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const diruserOutputs = path.join(__dirname, "userOutputs");

const runFile = (filePath) => {
    const fileToken = path.basename(filePath).split(".")[0];
    const outputFile = path.join(diruserOutputs, `${fileToken}.exe`);
    return new Promise((resolve, reject) => {
        exec(`g++ ${filePath} -o ${outputFile} && cd ${diruserOutputs} && ${fileToken}.exe`,
        (error, stdout, stderr) => {
            error && reject({error, stderr});
            stderr && reject({stderr});
            resolve(stdout);            
        })
    });
}

module.exports = {
    runFile
}
