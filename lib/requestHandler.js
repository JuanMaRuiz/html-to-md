const axios = require('axios');

const handleRequest = (page) => axios.get(page);

module.exports = handleRequest;