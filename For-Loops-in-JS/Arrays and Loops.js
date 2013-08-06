//First element in the array: junkData[0]
//Second element in the array: junkData[1]

var cities = ["Melbourne", "Amman", "Helsinki", "London"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

//找出array中的最大数
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
for (i=0;i<8;i++){
    if(largest<array[i]){
            largest = array[i];
    }
}
console.log(largest);
