// TODO: why two frontends (one with ts and this one with js? check out SOS'!
// all these list.html, listCtrl.js, editCtrl.js, analyticsCtrl.js etc are part of the frontend

angular
  .module("ContactManagerApp")
  .controller("ListCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("List Controller initialized");

    //var APIurl = "/api/v1/contacts"; // w/o proxy
    var APIurl = "/proxyXX/api/v1/contacts"; // with proxy
    var APIurl = "http://dgsin1819-xx.herokuapp.com/api/v1/contacts"; // with cors

    function getContacts() {
      $http.get(APIurl).then(function(response) {
        console.log("Contacts reveiced: " + JSON.stringify(response.data, null, 2));
        $scope.contacts = response.data;
      });
    }

    $scope.addContacts = function addContacts() {
      $http.post(APIurl, $scope.newContact).then(function(response) {
        console.log("POST finished");
        getContacts();
      });
    }

    $scope.deleteContacts = function deleteContacts() {
      $http.delete(APIurl + "/" + contactName).then(function(response) {
        console.log("DELETE finished");
        getContacts();
      });
    }
  }]);
