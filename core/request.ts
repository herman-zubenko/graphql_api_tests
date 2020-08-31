// @ts-ignore
import graphqlGot from 'graphql-got';
const environment = 'https://graphql.anilist.co'; // TO BE DEFINED FROM DOCKER ENV VARIABLE

export async function getStatusCode(query: string): Promise<any> {
		const resp = await _request(query);

		console.log('Status code is ', resp.statusCode);
		return resp.statusCode;
	}

export async function getResponseBody(query: string): Promise<any> {
		const resp = await _request(query);

		console.log('Response body is ', resp.body);
		return resp.body;
	}

async function  _request(query: string): Promise<any> {
		return await graphqlGot(`${environment}`, {query, headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}});
	}