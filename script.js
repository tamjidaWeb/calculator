
const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function clearDisplay(){
    display.value = '';
}
function deleteDisplay(){
    display.value = display.value.slice(0, -1);
} 



function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'error';
    }
}
