"use strict";

(function () {
    angular
        .module("mx-angular-api")
        .factory("mxngApiService", mxngApiService);

    mxngApiService.$inject = ["$http", "Constants"];

    function mxngApiService($http, Constants) {
        var apiUrl = Constants.apiBaseUrl;

        return {
            get: get,
            post: post,
            patch: patch,
            put: put,
            delete: del,
            http: http
        };

        function http(method, url, headers, data, success, failure) {
            var req = {
                method: method,
                url: apiUrl + url,
                headers: headers,
                data: data,
                transformRequest: []
            };
            $http(req).then(success, failure);
        }

        function get(url, config, success, failure) {
            return $http.get(apiUrl + url, config)
                .then(success, failure);
        }

        function post(url, data, success, failure, config) {
            return $http.post(apiUrl + url, data, config)
                .then(success, failure);
        }

        function put(url, data, success, failure) {
            return $http.put(apiUrl + url, data)
                .then(success, failure);
        }

        function patch(url, data, success, failure) {
            return $http.patch(apiUrl + url, data)
                .then(success, failure);
        }

        function del(url, data, success, failure) {
            return $http.delete(apiUrl + url, data)
                .then(success, failure);
        }
    }
})();