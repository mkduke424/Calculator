function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function mulitply(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate (operator, num1 , num2){
    if (operator == '+'){
        return add(num1, num2);
    }
    else if(operator == '-'){
        return subtract(num1,num2);
    }
    else if(operator == '*'){
        return mulitply(num1, num2);
    }
    else if(operator == '/'){
        return divide(num1,num2);
    }
}
 // Clearing the calculator   
function clear(){
    document.getElementById("display").innerHTML = "";
    displayText = "";
    displayNumber = 0;
}
let btnClear = document.getElementById("btnclear");
btnClear.addEventListener("click", clear)


// add an event listener to each number key
let btnNumbers = document.querySelectorAll(".keys");
btnNumbers.forEach((button) => {
    button.addEventListener("click",populateDisplay)
});


//populate the display screen
let displayText = "";
let displayNumber = 0;
let Screen = document.getElementById("display");
function populateDisplay(){
    

    displayText += this.innerHTML
    displayNumber = +displayText;
    Screen.innerHTML = displayText;

}
//Logic for the operators        
let arrCalc = [];                                                      //When I set displayNumber to display text outside of the populate display function it wouldn't work. so why does it work now that it's inside the button for event listeners  
let btnOperators = document.querySelectorAll(".op-keys");
    btnOperators.forEach((button)=>{
        button.addEventListener("click",() =>{
            
        if(button.innerHTML == "+"){
            arrCalc.push('+');
            arrCalc.push(displayNumber);
            clear();
            console.log(arrCalc);
        }
        else if(button.innerHTML =="="){
            console.log(displayNumber);
            displayNumber = operate(arrCalc[0],arrCalc[1],displayNumber);
            Screen.innerHTML = displayNumber.toString();
            console.log(displayNumber);
            arrCalc = [];
        }
        })
    })

