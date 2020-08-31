"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryManga = exports.queryAnime = void 0;
exports.queryAnime = `{
    Media(type: ANIME) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;
exports.queryManga = `{
    Media(type: MANGA) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;
