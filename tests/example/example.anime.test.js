const assert = require('assert');

const request = require('../../core/request');

const testData = require('./example.testData');

describe('Example query for Anime ', async () => {
	it('should assert status code', async () => {
		const statusCode = await request.getStatusCode(testData.queryAnime);

		assert.equal(statusCode, 200);
	})
	it('should assert Media Title value', async () => {
		const resp = await request.getResponseBody(testData.queryAnime);

		assert.equal(resp.Media.title.english, 'Cowboy Bebop');
	})
	it('assert items count', async () => {
		const resp = await request.getResponseBody(testData.queryAnime);

		assert.equal(Object.keys(resp.Media.title).length, 3);
	})
});