(function () {
  'use strict';

  var maps = angular
  .module('maps', [])
  .provider('Maps', [function MapsProvider() {
    var settings = {
      baseURL:  'https://www.google.com/maps/embed/v1/'
    };

    this.setAPIKey = function (key) { settings.apiKey = key; };
    this.getAPIKey = function () { return settings.apiKey; };

    this.getSCETrustedUrl = function () { return 'https://www.google.com/maps/embed/v1/**'; };

    this.$get = [function () {
      return angular.extend({}, settings);
    }];
  }]);
}());
