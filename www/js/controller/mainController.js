app.controller('mainController', function($scope){
   var tasks = new getTasks();
   
   $scope.lista = tasks.items;
   $scope.showMarked = false;
   
   $scope.onMarkTask = function(item){
       item.finalizada = !item.finalizada;
       //console.log("passou");
   };
   
   $scope.onShowItem = function(item){
       return item.finalizada && $scope.showMarked;
   };
});


