const query = `{
    Media(type: ANIME) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;

const queryAnime = `{
    Media(type: ANIME) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;

const queryManga = `{
    Media(type: MANGA) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;

module.exports = {
	queryAnime,
	queryManga
}