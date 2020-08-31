import assert from 'assert';
import {getStatusCode, getResponseBody} from '../../core/request';
import {queryAnime} from './example.testData';

describe('Example query for Anime ', async () => {
	it('should assert status code', async () => {
		const statusCode = await getStatusCode(queryAnime);

		assert.equal(statusCode, 200);
	})
	it('should assert Media Title value', async () => {
		const resp = await getResponseBody(queryAnime);

		assert.equal(resp.Media.title.english, 'Cowboy Bebop');
	})
	it('assert items count', async () => {
		const resp = await getResponseBody(queryAnime);

		assert.equal(Object.keys(resp.Media.title).length, 3);
	})
});