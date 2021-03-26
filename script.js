
var i=0;

var names=["Phil", "Sam", "Henry", "John"];

function addNumbers(a,b){
    return a+b;
}
addNumbers(a,b);

function Multiply(a,b){
    return a*b;
}
Multiply(a,b);

function subtractNumbers(a,b){
    return a-b;
}
subtractNumbers(a,b);

function Divide(a,b){
    return a/b;
}
Divide(a,b)

function CheckAmount(amount){
    if (amount > 100){
        return "You are fine";
    }
    else if (amount <= 50 && amount >= 20){
        return "You should start worrying";
    }
    else if (amount <= 20 && amount >= 10){
        return "Money dangerously low!";
    }
    else{
        return "Carefull, London is expensive!";
    }
}


function PrintNumber(){
    while(i<=10){
        console.log(i);
        i++;
    }
}



function checkingLoop(){
    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }
}

