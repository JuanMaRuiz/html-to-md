const handleRequest = require('./lib/requestHandler');
const generateMarkdown = require('./lib/markdownGenerator');
const generateFile = require('./lib/fileManager');
const page  = process.argv[2];
const fileName = process.argv[3] || 'output';

handleRequest(page).then( ({data}) => {
    const content = generateMarkdown(data);
    generateFile(`${fileName}.md`, content);
});