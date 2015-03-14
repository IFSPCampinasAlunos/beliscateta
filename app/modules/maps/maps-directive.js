(function (maps) {
  'use strict';

  maps
  .directive('btMaps', [
    function btMapsDirectiveFactory() {
      return {
        restrict: 'E',
        scope: {
          mode: '=',
          location: '='
        },
        controllerAs: 'mapsCtrl',
        controller: [
          'Maps',
          function (maps, location) {
            this.embed = function (mode, location) {
              return maps.baseURL + mode + '?key=' + maps.apiKey + '&q=' + location;
            };
          }
        ],
        templateUrl: '/modules/maps/maps.html'
      };
    }
  ]);
}(angular.module('maps')));
