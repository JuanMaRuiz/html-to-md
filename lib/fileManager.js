const { logError, logSuccess } = require('./logger');
const fs = require('fs');
const dir = './html-to-markdown';

const generateFile = async (fileName, content) => {
    let fileFullPath = `${dir}/${fileName}`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    await fs.writeFile(fileFullPath, content, (err) => {
        if (err) {
            logError(`🤦 There was an error writing file ${fileFullPath} => ${err}`);
            process.exit(1);
        }
    
        logSuccess(`👏 File "${fileFullPath}" was created!!`);
    });

};

module.exports = generateFile;
