const { expect } = require('chai');
const handleRequest = require('./../lib/requestHandler');
const axios = require('axios');
const { stub } = require('sinon');

describe('requestHandler', () => {
    it('should make the request with the given argument', () => {
        const getStub = stub(axios, 'get').returns(() => {});
        handleRequest('bazinga');
        expect(getStub.calledOnce).to.be.true;
    });
});