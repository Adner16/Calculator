console.log("funzipona");
const display = document.getElementById("display");

function addTodisplay(input){
    display.value += input;
}

function cls(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "error";
    }
    
}