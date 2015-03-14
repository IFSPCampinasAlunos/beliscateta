(function (global) {
  angular
  .module('escape-filter', [])
  .filter('escape', function () {
    return global.encodeURIComponent;
  });
}(window));
