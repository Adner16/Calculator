
const display = document.getElementById("display");

function addTodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    let expression = display.value.replace(/x/g, '*');

    try{
        if(expression.includes("%")){
            percent(expression);
        } else {
            const result = eval(expression);
            if(isNaN(result)){
                display.value = "error";
            } else {
                display.value = result;
            }
        }
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
    const percent = parseFloat(arr[0]);
    const value = parseFloat(arr[1]);
    display.value = (percent / 100)* value;
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