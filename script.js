let lastNumber = "";
let newNumber = "";
let lastOperator = "";
let currentOperator = ""
let isDecimal = false;
const inputScreen = document.querySelector(".input");


const changeNewNumber = function(e){
    newNumber = newNumber + e.currentTarget.getAttribute("data-value");
    inputScreen.innerText = newNumber;
    if(currentOperator == ""){
        lastNumber = "";
    }
    
}
/*
When an operator is clicked while current operator has value, finish the previous
operation and change the value displayed on output.
*/


const sum = function(){
    let aNumb = parseFloat(lastNumber);
    let bNumb = parseFloat(newNumber);
    lastNumber = `${aNumb + bNumb}`;

}
const percentage = function(){
    let aNumb = parseFloat(lastNumber);
    let bNumb = parseFloat(newNumber);
    lastNumber = `${aNumb + bNumb}`;
}

const quotient = function(){
    let aNumb = parseFloat(lastNumber);
    let bNumb = parseFloat(newNumber);
    lastNumber = `${aNumb / bNumb}`;
}

const product = function(){
    let aNumb = parseFloat(lastNumber);
    let bNumb = parseFloat(newNumber);
    lastNumber = `${aNumb * bNumb}`;
}

const difference = function(){
    let aNumb = parseFloat(lastNumber);
    let bNumb = parseFloat(newNumber);
    lastNumber = `${aNumb - bNumb}`;
}


const equals = function(){
     switch(currentOperator){
        case "percentage": percentage(); break;
        case "sum": sum(); break;
        case "product": product(); break;
        case "difference": difference(); break;
        case "quotient": quotient(); break;
    }
    newNumber = ""
    currentOperator = "";
    isDecimal = false;
    changeDisplay();
}

const chooseOperator = function(e){
    if(currentOperator != "" && newNumber != ""){
        equals();
        changeDisplay();
        currentOperator = e.currentTarget.getAttribute("data-value");
        isDecimal = false;    
    }
    currentOperator = e.currentTarget.getAttribute("data-value");
    isDecimal = false;
    if(lastNumber == ""){
        changeLastNew();
    }}

const changeLastNew = function(){
    lastNumber = newNumber;
    newNumber = "";
}

const clearButton = function(){
    newNumber = "";
    currentOperator = "";
}

const changeDisplay = function(){
    document.querySelector(".output").innerText = lastNumber;
    document.querySelector(".input").innerText = "0";
}

const addDecimal = function(e){
    if(isDecimal == false){
        isDecimal = true;
        changeNewNumber(e);
    }
}

const clearAll = function(){
    newNumber = '';
    lastNumber = '';
    currentOperator = '';
}

const addClicks = function(){
    const numbers = document.querySelectorAll(".num");
    const operators = document.querySelectorAll(".operator");
    const equal = document.querySelector("#equals");
    const decimal = document.querySelector(".decimal");
    const allClear = document.querySelector("#allClear");
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", clearButton);
    clear.addEventListener("click", changeDisplay);
    allClear.addEventListener("click", clearAll);
    allClear.addEventListener("click", changeDisplay);
    decimal.addEventListener("click", addDecimal);
    for(let number of numbers){
        number.addEventListener("click", changeNewNumber);
    }
    for(let op of operators){
        op.addEventListener("click", chooseOperator);
        op.addEventListener("click", changeDisplay);
    }
    equal.addEventListener("click", equals);
}

addClicks(); 