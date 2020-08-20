const graphqlGot = require('graphql-got');
const environment = 'https://graphql.anilist.co'; // TO BE DEFINED FROM DOCKER ENV VARIABLE

class RequestHelper {
	async getStatusCode(query) {
		const resp = await this._request(query);

		console.log('Status code is ', resp.statusCode);
		return resp.statusCode;
	}

	async getResponseBody(query) {
		const resp = await this._request(query);

		console.log('Response body is ', resp.body);
		return resp.body;
	}

	async _request(query) {
		return await graphqlGot(`${environment}`, {query, headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}});
	}
}

module.exports = new RequestHelper();