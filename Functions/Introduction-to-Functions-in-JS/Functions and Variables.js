var perimeterBox = function(length,width){
    return length + length + width + width;
};
perimeterBox(1,3)


var multiplied = 5;
//这是一个全局变量.

var timesTwo = function(number) {
        var multiplied = number * 2;    
        //这是一个局部变量.
};
timesTwo(4);
console.log(multiplied);
//输出的是全局变量的值.

//function & if
var creditCheck = function(income){
    if (income >= 100){
        return "You earn a lot of money! You qualify for a credit card." ;
    }
    else
        return "Alas you do not qualify for a credit card. Capitalism is cruel like that." ;
}
creditCheck(100)
