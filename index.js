module.exports = require('angular')
  .module('ngDisableInflight', [])
  .directive('disableInflight', disableInflight)
  .name

disableInflight.$inject = ['$http']

function disableInflight ($http) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var element = element[0]
      var loading = function () {
        return $http.pendingRequests.length > 0
      }

      scope.$watch(loading, function (isLoading) {
        if (isLoading) {
          element.classList.add('disabled-inflight')
          element.setAttribute('disabled', true)
        } else {
          element.classList.remove('disabled-inflight')
          element.removeAttribute('disabled')
        }
      })
    }
  }
}
