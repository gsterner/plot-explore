var App = angular.module('App', []);

function range(start, end, step)
{
    var returnArray = [];
    var tempSum = start;
    while(tempSum <= end) {
        returnArray.push(tempSum);
        tempSum += step;
    }    
    return returnArray;
}


function evaluateExpression(x) {
    return x*x;
}

function getData(start, end, step){
    var xdata = range(start, end, step);
    var returnData = [];
    for(i in xdata) {
        yval = evaluateExpression(xdata[i]);
        returnData.push([xdata[i], yval])
    }
    return [returnData];
} 

App.controller('Ctrl', function($scope){
    
    $scope.data = getData(0,4,1);
    $scope.minumumValue = function(minVal, maxVal){
        var start = parseFloat(minVal);
        var end = parseFloat(maxVal);
        $scope.data = getData(start, end,1);
        var myint = 1;
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



