var user = prompt("What is your nationality?").toUpperCase();
if(user.length > 0 && user.length < 20){
    switch(user){
    case 'CHINESE':
        console.log("Me too.");
        break;
    case 'ENGLISH':
        console.log('OMG');
        break;
    case 'Japanese':
        console.log('Really?');
        break;
    default:
        console.log('Don\'t know');
    }
}
else if(user.length >= 20 || user.length === 0){
    console.log("OK");
}
