var isEven = function(number) {
    if(number % 2 === 0){
    return true;
    }
    else if(isNaN(number)){
        return "It is not a number.";
    }
};
