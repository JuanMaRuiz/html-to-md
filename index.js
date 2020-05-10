const TurndownService = require('turndown');
const axios = require('axios');
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
    fs.writeFile('output.md', content, (err) => {
        if (err) {
            console.error('There was an error writing file');
            process.exit(1);
        }

        console.log('File was created!!');
    });
});