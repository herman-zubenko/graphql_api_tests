const assert = require('assert');
const request = require('../../core/request');
const testData = require('./example.testData');

describe('Example query for Manga ', async () => {
	it('should assert status code', async () => {
		const statusCode = await request.getStatusCode(testData.queryManga);

		assert.equal(statusCode, 200);
	})
	it('should assert Media Title value', async () => {
		const resp = await request.getResponseBody(testData.queryManga);

		assert.equal(resp.Media.title.english, 'Monster');
	})
	it('assert items count', async () => {
		const resp = await request.getResponseBody(testData.queryManga);

		assert.equal(Object.keys(resp.Media.title).length, 3);
	})
});