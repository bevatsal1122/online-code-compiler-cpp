const fs = require('fs');
const path = require('path');
const dirSubmittions = path.join(__dirname, "submittions");
const {v4: uuid} = require('uuid');

const scanFile = async (type, code) => {
    const fileToken = uuid();
    const fileName = `${fileToken}.${type}`;
    const filePath = path.join(dirSubmittions, fileName);
    await fs.writeFileSync(filePath, code);
    return filePath;
};

module.exports = {
    scanFile
};