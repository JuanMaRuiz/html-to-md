const TurndownService = require('turndown');
const axios = require('axios');
const { logError, logSuccess } = require('./lib/logger');
const fs = require('fs');

const page  = process.argv[2];

axios.get(page).then( (output) => {
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
    const file = 'output.md';
    fs.writeFile(file, content, (err) => {
        if (err) {
            logError('🤦 There was an error writing file');
            process.exit(1);
        }

        logSuccess(`👏 File "${file}" was created!!`);
    });
});