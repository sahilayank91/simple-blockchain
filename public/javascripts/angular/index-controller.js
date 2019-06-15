BlockChainApplication.controller('IndexController', ['$scope', '$state', '$window' ,'Service', function ($scope, $state, $window, Service) {
    $scope.addBlock = function(){
        if($scope.data!=null){
            let parameters = {};
            parameters.data = $scope.data;

            Service.addBlock(parameters)
                .then(function(data){
                    console.log(data);
                    $scope.data = ''
                    $scope.getBlockChain();
                })
        }
    }

    $scope.chain = [];
    $scope.getBlockChain = function(){
        Service.getBlockChain()
            .then(function(data){
                console.log(data);
                $scope.chain = data.data;
            })
    }

}])