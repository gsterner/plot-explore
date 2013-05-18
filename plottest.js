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


function getPlotData(evaluatorInfo){
    var fEvaluator = new Evaluator(evaluatorInfo.expression, evaluatorInfo.variable);
    var xdata = range(evaluatorInfo.minval, evaluatorInfo.maxval, evaluatorInfo.step);
    return fEvaluator.calculateDataArray(xdata);
} 

function FiddleController($scope) {
    $scope.evaluatorInfo = {
        variable   : "x",
        expression : "x*x",
        minval     : 0.0,
        maxval     : 10,
        step       : 1.0
    };
    $scope.data = getPlotData($scope.evaluatorInfo);
    $scope.change = function() {
        $scope.data = getPlotData($scope.evaluatorInfo);
    };
}

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



