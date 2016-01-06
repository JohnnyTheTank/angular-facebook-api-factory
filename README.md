**angular-facebook-api-factory** is an angularjs module with a facebook api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-facebook-api-factory`
    2. `npm install --save angular-facebook-api-factory`
    3. download [angular-facebook-api-factory.zip](https://github.com/JohnnyTheTank/angular-facebook-api-factory/zipball/master)
2. Add `jtt_facebook` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-facebook-api-factory/src/angular-facebook-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-facebook-api-factory/src/angular-facebook-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-facebook-api-factory.min.js"></script>
    ```
4. Use the factory `facebookFactory`


### factory methods

#### getPosts

```js
facebookFactory.getPostsFromPageById({
    pageId:"<PAGE_ID>",
    limit:"<LIMIT>", // (optional) valid values: 0-100 | default: 25
    until:"<UNTIL>", // (optional)
    since:"<SINCE>", // (optional)
    __previous:"<PREVIOUS>", // (optional)
    __paging_token:"<PAGING_TOKEN>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getPhotos

```js
facebookFactory.getPhotosFromPageById({
    page:"<PAGE>", // ID or name
    limit:"<LIMIT>", // (optional) valid values: 0-100 | default: 25
    before:"<BEFORE>", // (optional)
    after:"<AFTER>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getVideos

```js
facebookFactory.getVideosFromPageById({
    pageId:"<PAGE_ID>",
    limit:"<LIMIT>", // (optional) valid values: 0-100 | default: 25
    before:"<BEFORE>", // (optional)
    after:"<AFTER>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getEvents

```js
facebookFactory.getEventsFromPageById({
    pageId:"<PAGE_ID>",
    limit:"<LIMIT>", // (optional) valid values: 0-100 | default: 25
    before:"<BEFORE>", // (optional)
    after:"<AFTER>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getPage

```js
facebookFactory.getPageById({
    pageId:"<PAGE_ID>",
    access_token:"<ACCESS_TOKEN>"
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

## Facebook Graph JSON API

* docs: https://developers.facebook.com/docs/graph-api
* graph explorer: https://developers.facebook.com/tools/explorer/


## License

MIT