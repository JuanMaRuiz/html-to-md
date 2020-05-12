const TurndownService = require('turndown');
const turndownService = new TurndownService();
const partsToremove = [
    'script',
    'style',
    'title'
];
partsToremove.forEach((item) => {
    turndownService.remove(item);
});
const generateMarkdown = (content) => turndownService.turndown(content);

module.exports = generateMarkdown;