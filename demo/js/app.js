var app = angular.module("app", ['jtt_facebook']);
app.controller('controller', ['$scope', 'facebookFactory', function($scope, facebookFactory) {

    var _access_token = '<YOUR_FACEBOOK_ACCESS_TOKEN>';

    facebookFactory.getPostsFromPageById({
        page:"147615681968982",
        limit:100,
        access_token:_access_token,
    }).then(function(_data){
        console.log("posts", _data);
    });

    facebookFactory.getPhotosFromPageById({
        page:"147615681968982",
        access_token:_access_token,
    }).then(function(_data){
        console.log("photos", _data);
    });

    facebookFactory.getVideosFromPageById({
        page:"147615681968982",
        access_token:_access_token,
    }).then(function(_data){
        console.log("videos", _data);
    });

    facebookFactory.getEventsFromPageById({
        page:"147615681968982",
        access_token:_access_token,
    }).then(function(_data){
        console.log("events", _data);
    });

    facebookFactory.getPageById({
        page:"147615681968982",
        access_token:_access_token,
    }).then(function(_data){
        console.log("page", _data);
    });

}]);
