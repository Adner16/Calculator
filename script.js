
const display = document.getElementById("display");

function addTodisplay(input){
    display.value += input;
}

function cls(){
    display.value = "";
}

function calculate(){
    let expression = display.value.replace(/x/g, '*');
    try{
        display.value = eval(expression);
    } catch {
        display.value = "error";
    }
    
}