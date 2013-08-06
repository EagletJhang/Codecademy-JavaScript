var cube = function (x) {
    return x * x *x;
};

cube(7);
console.log(cube("test")); 
//输出NaN not a number

//定义体积函数, 三个变量
var volume = function (w, l, h ) {
    if (typeof(x) !== 'number') return 0;
    //显示输入的数据类型
    return w * l * h;
};
volume(2, 3, 4);



var area = 36;
var volume = function (w, l, h) {
    var area = w * l;
    //局部变量
    return area * h;
};

console.log(volume(2, 3, 4));
console.log(area);
//调用全局变量, 输出36. 若21行没有var, 则变成新的赋值, 这里输出的是更新后值为6.
