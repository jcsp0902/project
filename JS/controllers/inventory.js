app.controller('inventory', function(
  										$scope,
                                        inventoryfactory,
                                        $filter
  									){




inventory();
$scope.chenes = [];
$scope.chixs = {};
$scope.chixss = {};

function inventory(){
    $scope.expiration = false;
        var promise = inventoryfactory.get_inventory();
        promise.then(function(data){
            $scope.inventory = data.data.result;
            
            for (var i in  $scope.inventory){
                var a = new Date($scope.inventory[i].expiration);
                a = $filter('date')(a,"yyyy-MM-dd");
                var b = new Date();
                b.setDate(b.getDate() - 7);
                b = $filter('date')(b,"yyyy-MM-dd");
                if (a <= b){
                    $scope.expiration = true;
                    $scope.chixs[i] = $scope.inventory[i];
                }
                else{
                     $scope.chixss[i] = $scope.inventory[i];
     
                }
                }
          
        });
 

}




$scope.save = function(){
       console.log($scope.chenes);
 
            inventory();

             for(var i in $scope.chenes){
                if ($scope.chenes != null ){
                console.log($scope.chenes[i]);
                        var filters = { 
                            id : $scope.chenes[i].id,
                            name : $scope.chenes[i].name,
                            price: $scope.chenes[i].price,
                            quantity : $scope.chenes[i].quantity,
                            expiration : $scope.chenes[i].expiration
                                // id : $scope.chenes[i].$scope.ID,
                                // price : $scope.chenes[i].$scope.Quantity,
                                // quantity: $scope.chenes[i].$scope.Price,
                                // expiration : $scope.chenes[i].$scope.Expiration,
                                // name : $scope.chenes[i].$scope.name
                            
                        };
                       var promise = inventoryfactory.register(filters);
                        promise.then(function(data){
                            inventory();    

                })  
                    }
             }
                    // ngDialog.openConfirm({
                    // template: 'CreateModal',
                    // className: 'ngdialog-theme-plain',
                    
                    // scope: $scope,
                    // showClose: false
        // })
     
}


$scope.register = function(){

        var filters = { 
            id : $scope.ID,
            price : $scope.Quantity,
            quantity: $scope.Price,
            expiration : $scope.Expiration,
            name : $scope.name
        };
        $scope.chenes.push(filters);
     
        // console.log(filters);
        // var promise = inventoryfactory.register(filters);
        // promise.then(function(data){
        //     inventory();
        //             // ngDialog.openConfirm({
        //             // template: 'CreateModal',
        //             // className: 'ngdialog-theme-plain',
                    
        //             // scope: $scope,
        //             // showClose: false
        // // })
                
        // })
}

 
});