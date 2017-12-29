(function() {
  'use strict';

  angular.module('banker').controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $document, $timeout, GatewayFactory, DataService) {

    // model declarations
    $scope.banks = [];
    $scope.limit = 50;
    $scope.offset = 0;
    $scope.loading = false;
    $scope.searchable_city = '';
    $scope.cities = DataService.getCities();
    $scope.headers = DataService.getHeaders();

    // nanobar for load progress
    $scope.nanobarOptions = {
      classname: 'nanobar'
    };

    var nanobar = new Nanobar($scope.nanobarOptions);

    $scope.checkIfEmpty = function(temp) {
      return angular.isDefined(temp);
    }

    // find bank/branch in a city - can provide limit and offset to restrict number of incoming objects
    $scope.findBanksInTheCity = function(limit, offset) {
      if (!$scope.loading) {

        nanobar.go(60);
        $scope.limit = limit;
        $scope.offset += offset;
        $scope.loading = true;

        GatewayFactory.execute($scope.searchable_city, $scope.limit, $scope.offset).then(function(response) {
          if (typeof response.data != 'undefined' && response.data) {
            response.data.forEach(function(e) {
              $scope.banks.push(e);
            });
            nanobar.go(100);
            $scope.loading = false;
          } else {
            $scope.loading = false;
          }
        }).then(function(error) {
          nanobar.go(100);
          $scope.loading = false;
        })
      }
    };

    // search functionality
    $scope.selectedFieldName = 'bank_name';
    $scope.searchText = '';

    // Set search category on change
    $scope.selectFieldName = function(head) {
      $scope.selectedFieldName = head;
    }

    // SearchList filter takes each object of array, reads and checks whether the search string is present, if yes return true else false;
    $scope.SearchList = function(row) {
      if ($scope.selectedFieldName && $scope.searchText) {
        $scope.loading = true;
        var propVal = row[$scope.selectedFieldName.toLowerCase()] + '';
        if (propVal) {
          $scope.loading = false;
          return propVal.toUpperCase().indexOf($scope.searchText.toUpperCase()) > -1;
        } else {
          $scope.loading = false;
          return false;
        }
      }
      return true;
    };

    // sticky searchbar on top while scroll is on
    $window.onscroll = function() {
      navFunction();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function navFunction() {
      if ($window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    // TBD - lazy load on scroll
    function lazyload(){

    }
  }
})();
