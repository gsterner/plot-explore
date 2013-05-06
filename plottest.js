var App = angular.module('App', []);

App.controller('Ctrl', function($scope){
    
    var data1 = [ [[0, 1], [1, 5], [2, 2]] ],
        data2 = [ [[0, 4], [1, 2], [2, 4]] ],
        curr  = 1;
    
    $scope.data = data1;
    
    $scope.change = function(){ 
        if(curr === 1){ 
            $scope.data = data2;
            curr = 2;
        }else{
            $scope.data = data1;
            curr = 1;
        }
    };

});

App.directive('chart', function(){
    return{
        restrict: 'E',
        link: function(scope, elem, attrs){
            
            var chart = null,
                opts  = { };
                   
            scope.$watch(attrs.ngModel, function(v){
                if(!chart){
                    chart = $.plot(elem, v , opts);
                    elem.show();
                }else{
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
    };
});

