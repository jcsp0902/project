app.controller('POS', function(
  										$scope,
                                        inventoryfactory,
                                        $filter
  									){




inventory();
$scope.chenes = [];
$scope.chixs = {};
$scope.chixss = {};
$scope.filters = {};
$scope.result = {};
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
                            expiration : $scope.chenes[i].total
                                // id : $scope.chenes[i].$scope.ID,
                                // price : $scope.chenes[i].$scope.Quantity,
                                // quantity: $scope.chenes[i].$scope.Price,
                                // expiration : $scope.chenes[i].$scope.Expiration,
                                // name : $scope.chenes[i].$scope.name
                            
                        };
                //        var promise = inventoryfactory.register(filters);
                //         promise.then(function(data){
                //             inventory();    

                // })  
                    }
             }
                    // ngDialog.openConfirm({
                    // template: 'CreateModal',
                    // className: 'ngdialog-theme-plain',
                    
                    // scope: $scope,
                    // showClose: false
        // })
     
}
function add_number() {

            var first_number = parseInt(document.getElementById("Text1").value);
            var second_number = parseInt(document.getElementById("Text2").value);
            $scope.result = first_number * second_number;

            document.getElementById("txtresult").value = $scope.result;
         
}
$scope.register = function(){
add_number();
        var filters = { 
            id : $scope.ID,
            quantity : $scope.Quantity,
            price : $scope.Price,
            total :$scope.result,
            name : $scope.name
        };
        $scope.chenes.push(filters);
        console.log($scope.chenes);
     
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