/*
 * Created By Gustaf Sterner 2012-11-29
 */


function Evaluator(expression, symbol){
	this.VAR_AS_STRING = "var "
	this.EQUALS =  "= "
	this.symbol = symbol
	this.expression = expression

    this.evaluate = function(value)
    {
		var value_expression = this.VAR_AS_STRING + this.symbol + this.EQUALS + value.toString()
		eval(value_expression)
		return eval(this.expression)
    }

    this.calculateDataPoint = function(xValue) {
        yValue = this.evaluate(xValue);
        return [xValue, yValue];
    }

    this.calculateDataArray = function(xArray) {
        var returnData = [];
        for(i in xArray) {
            var dataPoint = this.calculateDataPoint(xArray[i]);
            returnData.push(dataPoint)
        }
        return [returnData];        
    }   
}


