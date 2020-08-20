**README**

This is an lightweight example of GraphQL API testing framework. 
Testing is performed against public API https://graphql.anilist.co,
which provides access to data regarding Anime and Manga.

Mocha is used as a test runner & graphql-got is used for making requests.

**BUILD AND RUN USING DOCKER**
1. Clone this repository.
2. Open root folder and run 
`docker build -t graphql_api_testing .`
It may take some time to install dependencies.
3. After build is finished, run 
`docker run -it graphql_api_testing`
4. Test results will be posted in console.

**BUILD AND RUN USING NODE JS**
1. Clone this repository.
2. Open root folder and run 
`npm install`
It may take some time to install dependencies.
3. After build is finished, run 
`npm run start`
4. Test results will be posted in console.
