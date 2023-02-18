function button(){
    const buttonField = document.createElement('button');
buttonField.innerText = 'Convert to m'; 
buttonField.style.backgroundColor = 'blue';
buttonField.style.paddingTop = '4px';
buttonField.style.paddingBottom = '4px';
buttonField.style.paddingLeft = '18px';
buttonField.style.paddingRight = '18px';
}

function getInput(input){
    const inputValue = document.getElementById(input);
    const inputValueString = inputValue.value;
    const inputAmount = parseFloat(inputValueString);

    return inputAmount;
}

function getValue(value){
    const element = document.getElementById(value);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);

    return elementValue;
}

function calculator(name, value){
    const nameField = document.getElementById(name);
    nameField.innerText = value;
}