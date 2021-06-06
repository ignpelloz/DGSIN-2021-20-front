angular
  .module("ContactManagerApp")
  .controller("AnalyticsCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Analytics Controller initialized");
    $scope.update = function() {
      $http
        .get("/api/v1/data")
        .then(function(response) {
          $scope.data = response.data;
          console.log("Data received:" + $scope.data);

          Highcharts.chart('container', {

         title: {
             text: 'Ejemplo de datos'
         },

         yAxis: {
             title: {
                 text: 'Valor'
             }
         },

         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'middle'
         },

         plotOptions: {
             series: {
                 label: {
                     connectorAllowed: false
                 }
             }
         },

         series: [{
             name: 'Datos',
             data: $scope.data
         }],

         responsive: {
             rules: [{
                 condition: {
                     maxWidth: 500
                 },
                 chartOptions: {
                     legend: {
                         layout: 'horizontal',
                         align: 'center',
                         verticalAlign: 'bottom'
                     }
                 }
             }]
         }

      });


        });
    }

    $scope.update();



  }]);