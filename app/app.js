(function (global) {
  'use strict';

  // init foundation
  $(document).foundation();

  // init app
  global.app = angular.module('churras-belisca-teta', [
    'mm.foundation',
    'escape-filter',
    'localize-filter',
    'maps'
  ])
  .config([
    'MapsProvider', '$sceDelegateProvider',
    function (maps, $sce) {
      // add google maps ur as a safe url
      $sce.resourceUrlWhitelist([
        'self',
        maps.getSCETrustedUrl()
      ]);

      // set google maps api key
      maps.setAPIKey('AIzaSyB4H_IoPzJaVCqAGfNLiRWrQleXkpbn0WQ');
    }
  ]);
}(window));
