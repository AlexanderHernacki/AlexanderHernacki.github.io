let button = document.querySelector('#button1');
button.addEventListener('click',convertC);
const Temp = document.getElementById("Temp");

var tempSet= 0;
var temperature= 0;

//let temp = document.querySelector('button2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click',convertF);
const Units = document.getElementById("Units");

function convertC() {
    temperature = prompt("Please enter a temperature in Kelvin");
    Temp.textContent = temperature-273;
    Units.textContent= "Your Temp In C";
    tempSet=1;

}

function convertF() {

if(tempSet==1){
    Temp.textContent = temperature*(9/5)+32;
    tempSet=0;
    Units.textContent= "Your Temp In F";
}
else if(tempSet==0) {
alert("please enter a temp in kelvin first");
}

}