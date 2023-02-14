// get input value from the input field 
function getValueFromInput(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    // clear input field 
    inputValue.value = "";
    return inputValueNumber;
}

// get the text field and make the logic to set the input value through instanceof
function setInputValueOnTextField(textId){
    const textField = document.getElementById(textId);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString);
    return textFieldNumber;
}

// set and show the input value on the text field 
function setAndShowTheValueOnTextField(textId, inputValue){
    const setTextValue = document.getElementById(textId);
    setTextValue.innerText =  inputValue;
}