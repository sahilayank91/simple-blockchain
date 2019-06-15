
BlockChainApplication.controller('IndexController', ['$scope', '$state', '$window' ,'Service', function ($scope, $state, $window, Service) {


    $scope.addBlock = function(){
        if($scope.data!=null){
            let parameters = {};
            parameters.data = $scope.data;

            Service.addBlock(parameters)
                .then(function(data){
                    console.log(data);

                })
        }
    }

    $scope.getBlockChain = function(){
        Service.getBlockChain()
            .then(function(data){
                console.log(data);
            })
    }

}])