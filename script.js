console.log("test git")
const display = document.getElementById("display");

function addTodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let expression = display.value.replace(/x/g, '*');
    
    if(expression.includes("%")){
        percent(expression);
    }
    
    try{
        display.value = eval(expression);
    } catch {
        display.value = "error";
    }
    
}

function deleteLast() {
    newStr = display.value.slice(0, -1);
    display.value = newStr;
}

function percent(expr){
    const arr = expr.split('%');
    display.value = arr[0] / 100 * arr[1];
}


function invert() {
    const arr = display.value.split("");
    if(arr[0] !== "-"){
        arr.unshift("-");
    }  else {
        arr.shift()
    }
    display.value = arr.join("");
}