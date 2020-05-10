const { expect } = require('chai');
const handleOptions = require('../lib/optionsHandler');

describe('optionsHandler', () => {
    it('handleOptions should return the url passed as argument', () => {
        expect(handleOptions('--bazinga foo ddo')).to.be.eql('--bazinga foo ddo');
    });
});