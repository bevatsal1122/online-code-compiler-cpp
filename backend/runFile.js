const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");
const { stdout } = require("process");

const diruserOutputs = path.join(__dirname, "userOutputs");

const runFile = (filePath, prbName) => {
    var expO;
    const fileToken = path.basename(filePath).split(".")[0];
    const outputFile = path.join(diruserOutputs, `${fileToken}.exe`);
<<<<<<< HEAD
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
=======
    return new Promise((resolve, reject) => {
        exec(`g++ ${filePath} -o ${outputFile} && cd ${diruserOutputs} && ${fileToken}.exe`,
        (error, stdout, stderr) => {
            error && reject({error, stderr});
            stderr && reject({stderr});
            resolve(stdout);            
        })
>>>>>>> 1b8733a1e99fe19ac159a22590e0e4c76ac618ab
    });
}

module.exports = {
    runFile
}
