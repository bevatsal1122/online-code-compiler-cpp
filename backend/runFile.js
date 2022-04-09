const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");
const { stdout } = require("process");

const diruserOutputs = path.join(__dirname, "userOutputs");

const runFile = (filePath, prbName) => {
    var expO;
    const fileToken = path.basename(filePath).split(".")[0];
    const outputFile = path.join(diruserOutputs, `${fileToken}.exe`);
    const toInput0 = path.join(__dirname, "inputs");
    const toInput1 = path.join(toInput0, `${prbName}.txt`);

    const genEO = "./solutions/" + prbName + ".txt";
    console.log(genEO); 


    fs.readFile(genEO, 'utf8', function(err, data) {
        expO = data;
    });

    return new Promise((resolve, reject) => {
        exec(`g++ ${filePath} -o ${outputFile} && cd ${diruserOutputs} && ${fileToken}.exe < ${toInput1}`,
        (error, stdout, stderr) => {
            if (error) {reject({error, stderr});}
            if (stderr) {reject({stderr});}
            console.log(expO);
            console.log(stdout);
            if (expO == stdout) {resolve("Correct Answer");}
            resolve("Wrong Answer");
        });
    });
}

module.exports = {
    runFile
}