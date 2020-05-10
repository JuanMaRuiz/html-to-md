const chalk = require('chalk');
const {log, error} = console;

const logError = (msg) => {
    error(chalk.bold.red(msg));
};

const logSuccess = (msg) => {
    log(chalk.green(msg));
};

module.exports = {
    logError,
    logSuccess
};