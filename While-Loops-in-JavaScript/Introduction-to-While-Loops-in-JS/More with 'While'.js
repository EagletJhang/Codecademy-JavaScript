//for loops   when you know ahead of time how many times 
for(i = 1;i < 4;i++){
    console.log("I'am for-loops.");
}
//while loops   don't know ahead of time how many times 
i = true;
while(i){
    console.log("I'am while-loops.");
    i = false;
}
//do while  make sure your loop runs at least one time no matter what
do{
    console.log("I'am dowhile-loops.");
}
while(1 < 0);
