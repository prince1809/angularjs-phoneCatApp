var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl', function($scope){
  $scope.phones = [
    {
      'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S'
    },
    {
      'name': 'Motorola XOOM',
      'snippet': 'The Next, Next Generation tablet'
    },
    {
      'name': 'MOTOX',
      'snippet': 'This is a new Generation Smartphone'
    }
  ];
});
