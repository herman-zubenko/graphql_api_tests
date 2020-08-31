"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseBody = exports.getStatusCode = void 0;
// @ts-ignore
const graphql_got_1 = __importDefault(require("graphql-got"));
const environment = 'https://graphql.anilist.co'; // TO BE DEFINED FROM DOCKER ENV VARIABLE
async function getStatusCode(query) {
    const resp = await _request(query);
    console.log('Status code is ', resp.statusCode);
    return resp.statusCode;
}
exports.getStatusCode = getStatusCode;
async function getResponseBody(query) {
    const resp = await _request(query);
    console.log('Response body is ', resp.body);
    return resp.body;
}
exports.getResponseBody = getResponseBody;
async function _request(query) {
    return await graphql_got_1.default(`${environment}`, { query, headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        } });
}
