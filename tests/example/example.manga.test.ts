import assert from 'assert';
import {getStatusCode, getResponseBody} from '../../core/request';

import request from 'supertest';

import {queryManga} from './example.testData';

describe('Example query for Manga ', async () => {
	it('supertest test!', async () => {
		const test = await request('https://graphql.anilist.co')
			.post('')
			.send({query: queryManga})
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.expect(200)

		console.log(test.body.data.Media);
	})

	it('should assert status code', async () => {
		const statusCode = await getStatusCode(queryManga);

		assert.equal(statusCode, 200);
	})
	it('should assert Media Title value', async () => {
		const resp = await getResponseBody(queryManga);

		assert.equal(resp.Media.title.english, 'Monster');
	})
	it('assert items count', async () => {
		const resp = await getResponseBody(queryManga);

		assert.equal(Object.keys(resp.Media.title).length, 3);
	})
});