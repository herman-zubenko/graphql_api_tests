"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const request_1 = require("../../core/request");
const example_testData_1 = require("./example.testData");
describe('Example query for Manga ', async () => {
    it('should assert status code', async () => {
        const statusCode = await request_1.getStatusCode(example_testData_1.queryManga);
        assert_1.default.equal(statusCode, 200);
    });
    it('should assert Media Title value', async () => {
        const resp = await request_1.getResponseBody(example_testData_1.queryManga);
        assert_1.default.equal(resp.Media.title.english, 'Monster');
    });
    it('assert items count', async () => {
        const resp = await request_1.getResponseBody(example_testData_1.queryManga);
        assert_1.default.equal(Object.keys(resp.Media.title).length, 3);
    });
});
