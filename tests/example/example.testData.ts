export const queryAnime = `{
    Media(type: ANIME) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;

export const queryManga = `{
    Media(type: MANGA) {
        id
        title {
              romaji
              english
              native
        }
    }
}`;