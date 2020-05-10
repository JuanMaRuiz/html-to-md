const TurndownService = require('turndown');
const { logError, logSuccess } = require('./lib/logger');
const fs = require('fs');
const handleRequest = require('./lib/requestHandler');
const page  = process.argv[2];
const fileName = process.argv[3] || 'output.md';

handleRequest(page).then( output => {
    const turndownService = new TurndownService();
    const partsToremove = [
        'script',
        'style',
        'title'
    ];
    partsToremove.forEach((item) => {
        turndownService.remove(item);
    });
    const content = turndownService.turndown(output.data);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            logError(`🤦 There was an error writing file ${fileName} => ${err}`);
            process.exit(1);
        }

        logSuccess(`👏 File "${fileName}" was created!!`);
    });
});