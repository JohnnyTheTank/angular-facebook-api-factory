/**
    @name: angular-facebook-api-factory 
    @version: 0.5.0 (24-02-2016) 
    @author: Jonathan Hornung 
    @url: https://github.com/JohnnyTheTank/angular-facebook-api-factory#readme 
    @license: MIT
*/
"use strict";

angular.module("jtt_facebook", [])
    .factory('facebookFactory', ['$http', 'facebookSearchDataService', function ($http, facebookSearchDataService) {

        var facebookFactory = {};

        facebookFactory.getPostsFromPageById = function (_params) {
            var facebookSearchData = facebookSearchDataService.getNew("postsFromPageById", _params);

            return $http({
                method: 'GET',
                url: facebookSearchData.url,
                params: facebookSearchData.object,
            });
        };

        facebookFactory.getPhotosFromPageById = function (_params) {
            var facebookSearchData = facebookSearchDataService.getNew("photosFromPageById", _params);

            return $http({
                method: 'GET',
                url: facebookSearchData.url,
                params: facebookSearchData.object,
            });
        };

        facebookFactory.getVideosFromPageById = function (_params) {
            var facebookSearchData = facebookSearchDataService.getNew("videosFromPageById", _params);

            return $http({
                method: 'GET',
                url: facebookSearchData.url,
                params: facebookSearchData.object,
            });
        };

        facebookFactory.getEventsFromPageById = function (_params) {
            var facebookSearchData = facebookSearchDataService.getNew("eventsFromPageById", _params);

            return $http({
                method: 'GET',
                url: facebookSearchData.url,
                params: facebookSearchData.object,
            });
        };

        facebookFactory.getPageById = function (_params) {
            var facebookSearchData = facebookSearchDataService.getNew("pageById", _params);

            return $http({
                method: 'GET',
                url: facebookSearchData.url,
                params: facebookSearchData.object,
            });
        };

        return facebookFactory;
    }])
    .service('facebookSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            var version;

            if(angular.isDefined(_params) && angular.isDefined(_params.version)) {
                version = _params.version+"/";
            } else {
                version = "v2.5/";
            }
            return "https://graph.facebook.com/"+version;
        };

        this.fillDataInObjectByList = function(_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if(angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var facebookSearchData = {
                object: {
                    access_token:_params.access_token || undefined,
                },
                url: "",
            };

            if (angular.isDefined(_params.limit)) {
                facebookSearchData.object.limit = _params.limit;
            }

            switch (_type) {
                case "postsFromPageById":
                    facebookSearchData.object.fields = "id,message,story,created_time,full_picture,from,link,description,type,shares,source,picture,object_id";

                    facebookSearchData = this.fillDataInObjectByList(facebookSearchData, _params, [
                        '__paging_token', 'until', 'since', '__previous'
                    ]);

                    facebookSearchData.url = this.getApiBaseUrl()+_params.page+"/posts?";
                    break;

                case "photosFromPageById":

                    facebookSearchData.object.fields = "id,created_time,from,link,picture,album,name,images,width,height";

                    facebookSearchData = this.fillDataInObjectByList(facebookSearchData, _params, [
                        'before', 'after'
                    ]);

                    facebookSearchData.url = this.getApiBaseUrl()+_params.page+"/photos?";
                    break;

                case "videosFromPageById":

                    facebookSearchData.object.fields = "id,created_time,from,description,source,picture,format,title,embed_html,permalink_url,length";

                    facebookSearchData = this.fillDataInObjectByList(facebookSearchData, _params, [
                        'before', 'after'
                    ]);

                    facebookSearchData.url = this.getApiBaseUrl()+_params.page+"/videos?";
                    break;

                case "eventsFromPageById":

                    facebookSearchData.object.fields = "id,owner,description,picture{url},end_time,name,cover,category,place,start_time,ticket_uri";

                    facebookSearchData = this.fillDataInObjectByList(facebookSearchData, _params, [
                        'before', 'after'
                    ]);

                    facebookSearchData.url = this.getApiBaseUrl()+_params.page+"/events?";
                    break;

                case "pageById":

                    facebookSearchData.object.fields = "cover,link,picture{url},username,name";

                    facebookSearchData.object.limit = undefined;

                    facebookSearchData.url = this.getApiBaseUrl()+_params.page+"/";
                    break;

            }

            return facebookSearchData;
        };
    });