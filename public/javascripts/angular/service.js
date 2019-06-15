BlockChainApplication.service('Service', ['$http', '$q',  function ($http, $q) {
    'use strict';

    return {
        addBlock: function (parameters) {
            var deferred = $q.defer();
            var deferredData = {};
            var url = '/addBlock';
            // var url = UIUtilityService.getURL('features').smsDetails;

            $http({method: 'POST', url: url,data:parameters}).success(function (data, status, headers, config) {
                if (data.success == 'false' || !data.success) {
                    deferredData.success = false;
                } else {
                    deferredData.success = true;
                    deferredData.data = data.data;
                }
                deferred.resolve(deferredData);
            })
                .error(function (data, status, headers, config) {
                    deferredData.success = false;
                    deferred.resolve(deferredData);
                });
            return deferred.promise;
        },
        getBlockChain: function (params) {
            var deferred = $q.defer();
            var deferredData = {};
            var url = '/getBlockChain'
            // var url = UIUtilityService.getURL('features').getSMSHistoryOfRecord;

            $http({method: 'GET', url: url}).success(function (data, status, headers, config) {

                if (data.success == 'false' || !data.success) {
                    console.log(data);
                    deferredData.success = false;
                } else {
                    console.log(data);
                    deferredData.success = true;
                    deferredData.data = data.data;
                }
                deferred.resolve(deferredData);
            })
                .error(function (data, status, headers, config) {
                    deferredData.success = false;
                    deferred.resolve(deferredData);
                });
            return deferred.promise;
        },

    }
}]);
